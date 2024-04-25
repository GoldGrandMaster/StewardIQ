from typing import List
from pydantic import BaseModel, Field, ConfigDict
from datetime import datetime, date


class KPISchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    description: str
    value: float | None

class RequestKPI(KPISchema):
    pass


class ResponseKPI(BaseModel):
    code: str
    status: int
    response: str | KPISchema = Field(...)


class ListResponseKPI(BaseModel):
    code: str
    status: int
    response: List[KPISchema] = Field(...)