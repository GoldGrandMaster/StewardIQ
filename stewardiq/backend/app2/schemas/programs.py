from typing import List
from pydantic import BaseModel, Field, ConfigDict
from datetime import datetime, date


class ProgramSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    name: str
    description: str | None
    StartDate: date
    EndDate: date  

class RequestProgram(ProgramSchema):
    pass

class ResponseProgram(BaseModel):
    code: str
    status: int
    response: str | ProgramSchema = Field(...)

class ListResponseProgram(BaseModel):
    code: str
    status: int
    response: List[ProgramSchema] = Field(...)