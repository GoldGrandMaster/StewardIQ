from typing import List
from pydantic import BaseModel, Field, ConfigDict
from datetime import datetime, date


class TaskSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    name: str
    description: str | None
    completed: bool = Field(alias="is_completed", description="Task completed status")
    status: str | None
    priority: str
    progress: float | None
    StartDate: date
    EndDate: date
    cost: float
  

class RequestTask(TaskSchema):
    pass


class ResponseTask(BaseModel):
    code: str
    status: int
    response: str | TaskSchema = Field(...)


class ListResponseTask(BaseModel):
    code: str
    status: int
    response: List[TaskSchema] = Field(...)