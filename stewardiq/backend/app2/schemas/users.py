import re

from typing import List
from pydantic import BaseModel, Field, ConfigDict, EmailStr, constr, validator
from datetime import datetime, date


class UserSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    email: EmailStr
    password: constr(min_length=8, max_length=64) # type: ignore
    username: constr(min_length=3, max_length=64) # type: ignore
    first_name: str | None
    last_name: str | None
    admin: bool = Field(alias="is_system_admin", description="User admin status")
    fte: bool = Field(alias="is_fte", description="User admin status")
    steward: bool = Field(alias="is_business_steward", description="User admin status")
    resource: bool = Field(alias="is_resource", description="User resource status")
    onshore: bool = Field(alias="is_onshore", description="User onshore status")
    
    @validator("password")
    def password_must_contain_special_characters(cls, v):
        if not re.search(r"[^a-zA-Z0-9]", v):
            raise ValueError("Password must contain special characters")
        return v

    @validator("password")
    def password_must_contain_numbers(cls, v):
        if not re.search(r"[0-9]", v):
            raise ValueError("Password must contain numbers")
        return v

    @validator("password")
    def password_must_contain_uppercase(cls, v):
        if not re.search(r"[A-Z]", v):
            raise ValueError("Password must contain uppercase characters")
        return v

    @validator("password")
    def password_must_contain_lowercase(cls, v):
        if not re.search(r"[a-z]", v):
            raise ValueError("Password must contain lowercase characters")
        return v

    @validator("username")
    def username_must_not_contain_special_characters(cls, v):
        if re.search(r"[^a-zA-Z0-9]", v):
            raise ValueError("Username must not contain special characters")
        return v


class RequestUser(UserSchema):
    pass


class ResponseUser(BaseModel):
    code: str
    status: int
    response: str | UserSchema = Field(...)


class ListResponseUser(BaseModel):
    code: str
    status: int
    response: List[UserSchema] = Field(...)