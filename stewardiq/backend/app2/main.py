import uvicorn
from fastapi import FastAPI, WebSocket
from models.tasks import Task
from models.users import User
from models.kpi import KPI
from models.projects import Project
from models.programs import Program
from models.portfolios import Portfolio
from models.risks import Risk 
from models.issues import Issue  
from models.roadmaps import Roadmap
from models.steward import Steward
from models.wbs import WBS
from models.baseline import Baseline
from models.lifecycle import Lifecycle
from config import engine, conn
from routes.tasks import task_router
from routes.users import user_router
from routes.kpi import kpi_router
from routes.lifecycle import lifecycle_router
from routes.projects import project_router
from routes.programs import program_router
from routes.portfolios import portfolio_router
from routes.steward import steward_router
from routes.risks import risk_router
from routes.issues import issue_router
from routes.roadmaps import roadmap_router
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import MetaData
from jira.auth import get_jira_projects, fetch_custom_fields
import json
import openai
from fastapi.responses import HTMLResponse

metadata = MetaData()

openai.api_key = "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"

Task.metadata.create_all(bind=engine)
User.metadata.create_all(bind=engine)
Lifecycle.metadata.create_all(bind=engine)
KPI.metadata.create_all(bind=engine)
Project.metadata.create_all(bind=engine)
Program.metadata.create_all(bind=engine)
Portfolio.metadata.create_all(bind=engine)
Roadmap.metadata.create_all(bind=engine)
Risk.metadata.create_all(bind=engine)
Issue.metadata.create_all(bind=engine)
Steward.metadata.create_all(bind=engine)
WBS.metadata.create_all(bind=engine)
Baseline.metadata.create_all(bind=engine)

def init_app():

    origins= [
        "http://localhost:3000"
    ]

    app = FastAPI(
        title="StewardIQ App",
        description="A simple API to manage tasks",
        version="1.0.0",
        docs_url="/docs",
        redoc_url='/redoc',
        openapi_url="/api/openapi.json",

    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["GET", "POST", "PUT", "DELETE"],
        allow_headers=["*"]
    )

      
    app.include_router(task_router, prefix='/api', tags=['tasks'])
    app.include_router(user_router, prefix='/api', tags=['users'])
    app.include_router(lifecycle_router, prefix='/api', tags=['lifecycle'])
    app.include_router(kpi_router, prefix='/api', tags=['kpi'])
    app.include_router(project_router, prefix='/api', tags=['projects'])
    app.include_router(program_router, prefix='/api', tags=['programs'])
    app.include_router(portfolio_router, prefix='/api', tags=['portfolios'])
    app.include_router(risk_router, prefix='/api', tags=['risks'])
    app.include_router(issue_router, prefix='/api', tags=['issues'])
    app.include_router(roadmap_router, prefix='/api', tags=['roadmaps'])
    app.include_router(steward_router, prefix='/api', tags=['steward'])

    @app.get("/")
    async def read_root():
        return {"message": "Hello from FastAPI!"}
     
    def create_postgres_table(table_name, columns):
        
        cur = conn.cursor()

        drop_table_query = f"DROP TABLE IF EXISTS {table_name}"
        cur.execute(drop_table_query)
        conn.commit()
            
        column_definitions = []
        for column in columns:
            column_name = column["name"]
            column_type = column["type"]
            
            if column_type == "any":
                # Treat "any" type fields as JSONB
                column_definitions.append(f'"{column_name}" JSONB')
            else:
                column_definitions.append(f'"{column_name}" {column_type}')
        
        columns_sql = ', '.join(column_definitions)
        create_table_query = f"CREATE TABLE IF NOT EXISTS {table_name} ({columns_sql})"
        
        cur.execute(create_table_query)
        conn.commit()


    def insert_into_postgres(table_name, data):
        
        cur = conn.cursor()

        # Constructing SQL query for inserting data dynamically
        placeholders = ', '.join(['%s' for _ in range(len(data[0]))])
        insert_query = f"INSERT INTO {table_name} VALUES ({placeholders})"

        for i, row in enumerate(data):
            for j, value in enumerate(row):
                if isinstance(value, dict) or isinstance(value, list):
                    data[i][j] = json.dumps(value)

        # Execute the insert query
        cur.executemany(insert_query, data)
        conn.commit()
   

    index_html = """
        <!DOCTYPE html>
        <html>
            <head>
                <title>Chatbot</title>
            </head>
            <body>
                <h1>Chatbot</h1>
                <div id="messages"></div>
                <input type="text" id="messageText" autocomplete="off"/>
                <button onclick="sendMessage()">Send</button>
                <script>
                    var ws = new WebSocket("ws://localhost:8000/ws");

                    ws.onmessage = function(event) {
                        showMessage(event.data);
                    };

                    function showMessage(message) {
                        var messagesDiv = document.getElementById("messages");
                        messagesDiv.innerHTML += "<p>" + message + "</p>";
                    }

                    function sendMessage() {
                        var inputElement = document.getElementById("messageText");
                        var message = inputElement.value;
                        ws.send(message);
                        inputElement.value = "";
                    }
                </script>
            </body>
        </html>
        """

    @app.websocket("/ws")
    async def websocket_endpoint(websocket: WebSocket):
            await websocket.accept()
            while True:
                data = await websocket.receive_text()
                response = get_openai_response(data)
                await websocket.send_text(response)

    def get_openai_response(message):
        # Use OpenAI to generate response
        response = openai.chat.completions.create(
            engine="text-davinci-002",
            prompt=message,
            temperature=0.7,
            max_tokens=100
        )
        return response.choices[0].text.strip()
    
    @app.get("/chatbot")
    async def get():
        return HTMLResponse(index_html)

    @app.post("/dump_project_data")
    async def dump_project_data():
        # Fetching data from Jira
        jira_data = await get_jira_projects()
        custom_fields = await fetch_custom_fields()
        
        # Extracting columns from Jira issues
        columns = []
        for issue in jira_data['issues']:
            issue_fields = issue['fields']
            for field_name, field_value in issue_fields.items():
                if field_name == "issuetype":
                    columns.append({'name': 'issue_type', 'type': 'text'})
                elif field_name == "issuelinks":
                    columns.append({'name': 'subtasks', 'type': 'jsonb'})
                elif field_name == "Sprint":  # Assuming "Sprint" is a custom field
                    columns.append({'name': 'sprint', 'type': 'text'})
                elif field_name == "Epic Link":  # Assuming "Epic Link" is a custom field
                    columns.append({'name': 'epic_link', 'type': 'text'})
                elif field_name == "Risk":  # Assuming "Risk" is a custom field
                    columns.append({'name': 'risk', 'type': 'text'})
                if field_name == 'customfield_10019':  # Example custom field ID
                    field_definition = next(
                        (cf for cf in custom_fields if cf['id'] == field_name), None)
                    if field_definition:
                        field_type = field_definition.get('schema', {}).get('type', 'text')
                        columns.append({'name': field_definition['name'], 'type': field_type})
                if field_name == 'customfield_10015':  # Example custom field ID
                    field_definition = next(
                        (cf for cf in custom_fields if cf['id'] == field_name), None)
                    if field_definition:
                        field_type = field_definition.get('schema', {}).get('type', 'text')
                        columns.append({'name': field_definition['name'], 'type': field_type})
                if field_name == 'customfield_10025':  # Example custom field ID
                    field_definition = next(
                        (cf for cf in custom_fields if cf['id'] == field_name), None)
                    if field_definition:
                        field_type = field_definition.get('schema', {}).get('type', 'text')
                        columns.append({'name': field_definition['name'], 'type': field_type})
                elif isinstance(field_value, (int, float)):
                    columns.append({'name': field_name, 'type': 'numeric'})
                elif isinstance(field_value, (str)):
                    columns.append({'name': field_name, 'type': 'text'})
                # Add more conditions as per your data types
                
        # Remove duplicates and create PostgreSQL table
        columns = [dict(t) for t in {tuple(d.items()) for d in columns}]
        create_postgres_table("jira_project_data", columns)
        
        # Insert data into PostgreSQL table
        data = []
        for issue in jira_data['issues']:
            row = []
            for column in columns:
                field_name = column['name']
                if field_name == 'issue_type':
                    row.append(issue['fields']['issuetype']['name'])
                elif field_name == "issuelinks":
                    subtasks = []
                    for link in issue['fields']['issuelinks']:
                        if 'outwardIssue' in link:
                            subtasks.append(link['outwardIssue']['key'])
                    row.append(json.dumps(subtasks))  # Convert the list to JSON
                elif field_name == 'sprint':
                    # Assuming "Sprint" is a custom field
                    row.append(issue['fields'].get('Sprint', {}).get('name'))
                elif field_name == 'epic_link':
                    # Assuming "Epic Link" is a custom field
                    row.append(issue['fields'].get('Epic Link', {}).get('key'))
                elif field_name == 'risk':
                    # Assuming "Risk" is a custom field
                    row.append(issue['fields'].get('Risk', ''))
                elif field_name in issue['fields']:
                    row.append(issue['fields'][field_name])
                else:
                    row.append(None)
            data.append(row)
        
        insert_into_postgres("jira_project_data", data)
        
        return {"message": "Project data dumped successfully!"}


    return app


app = init_app()

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)