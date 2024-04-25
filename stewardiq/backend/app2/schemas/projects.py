from typing import List
from pydantic import BaseModel, Field, ConfigDict
from datetime import datetime, date


class ProjectSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    name: str
    description: str | None
    completed: bool = Field(alias="is_completed", description="completed status")
    StartDate: date
    EndDate: date  

class RequestProject(ProjectSchema):
    pass

class ResponseProject(BaseModel):
    code: str
    status: int
    response: str | ProjectSchema = Field(...)

class ListResponseProject(BaseModel):
    code: str
    status: int
    response: List[ProjectSchema] = Field(...)