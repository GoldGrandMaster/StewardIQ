from typing import List
from pydantic import BaseModel, Field, ConfigDict
from datetime import datetime, date


class PortfolioSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    name: str
    description: str | None
    StartDate: date
    EndDate: date  

class RequestPortfolio(PortfolioSchema):
    pass

class ResponsePortfolio(BaseModel):
    code: str
    status: int
    response: str | PortfolioSchema = Field(...)

class ListResponsePortfolio(BaseModel):
    code: str
    status: int
    response: List[PortfolioSchema] = Field(...)