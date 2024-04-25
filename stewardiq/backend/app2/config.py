from sqlalchemy.orm import declarative_base, sessionmaker
from google.cloud.sql.connector import Connector, IPTypes
import google.auth
import google.auth.transport.requests
from google.oauth2 import service_account
import sqlalchemy
import asyncpg
import os
import psycopg2

custom_creds = "/workspace/cloud_sql_proxy/ip-app-001-8774b81e7b15.json"
credentials = service_account.Credentials.from_service_account_file(custom_creds, scopes=['https://www.googleapis.com/auth/cloud-platform', 'https://www.googleapis.com/auth/sqlservice.admin'])
auth_req = google.auth.transport.requests.Request()
credentials.refresh(auth_req)

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = custom_creds
# initialize Connector object
connector = Connector()
INSTANCE_CONNECTION_NAME = "ip-app-001:us-west1:stewardiq-db"
# function to return the database connection object
def getconn():
    conn = connector.connect(
        INSTANCE_CONNECTION_NAME,
        "pg8000",
        user='appdb-432@ip-app-001.iam',
        password=credentials.token,
        db="appdb",
        ip_type=IPTypes.PUBLIC,
        enable_iam_auth=True,
    )
    return conn

# create connection pool with 'creator' argument to our connection object function
pool = sqlalchemy.create_engine(
    "postgresql+pg8000://",
    creator=getconn,
)

POSTGRESS_URL='postgresql:///vectordb?host=/cloudsql/ip-app-001:us-west1:stewardiq-db&user=appdb-432@ip-app-001.iam&password=credentials.token&sslmode=disable'

dbname = 'appdb'
user = 'appdb-432@ip-app-001.iam'
password = credentials.token  # You need to replace 'your_password' with the appropriate password or credentials
host = '35.227.190.101'  # Replace INSTANCE_CONNECTION_NAME with your actual Cloud SQL instance connection name

try:
    # Establish a connection to the PostgreSQL database
    conn = psycopg2.connect(
        dbname=dbname,
        user=user,
        password=password,
        host=host
    )
    
    # Create a cursor to execute SQL queries
    cursor = conn.cursor()
    
    
except psycopg2.Error as e:
    print("Error connecting to the database:", e)

POSTGRES_CONNECTION = {
    "dbname": "appdb",
    "user": "postgres",
    "password": "Stewardiq3939",
    "host": "localhost",
    "port": "5432"
}

DATABASE_URL = POSTGRESS_URL
#DATABASE = 'postgresql://postgres:Stewardiq3939@localhost:5432/appdb'

engine = pool
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

async def connect_to_db():
    return await asyncpg.connect(DATABASE_URL)

async def close_db_connection(connection):
    await connection.close()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()