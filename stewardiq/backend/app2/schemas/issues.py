from typing import List
from pydantic import BaseModel, Field, ConfigDict
from datetime import datetime, date


class IssueSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    type: str
    name: str
    description: str | None
    mitigation: str
    assigned: str = Field(alias="assigned_to", description="Task completed status")
    completed: bool = Field(alias="is_completed", description="completed status")
    DueDate: date

class RequestIssue(IssueSchema):
    pass


class ResponseIssue(BaseModel):
    code: str
    status: int
    response: str | IssueSchema = Field(...)


class ListResponseIssue(BaseModel):
    code: str
    status: int
    response: List[IssueSchema] = Field(...)