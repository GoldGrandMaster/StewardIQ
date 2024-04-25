from sqlalchemy import BigInteger, Boolean, Column, ForeignKey, String, Integer, Date, Unicode
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declared_attr
from config import Base
from database.mixins import TimestampMixin


class User(Base, TimestampMixin):
    __tablename__ = "users"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    email = Column(String(100), nullable=True)
    password = Column(Unicode(255), nullable=True)
    username = Column(String(50), nullable=True)
    first_name = Column(String(50), nullable=True)
    last_name = Column(String(50), nullable=True)
    is_system_admin = Column(Boolean, default=False)
    is_fte = Column(Boolean, default=False)
    is_business_steward = Column(Boolean, default=False)
    is_resource = Column(Boolean, default=False)
    is_onshore = Column(Boolean, default=False)

    tasks = relationship(
        "Task", back_populates="assignee", lazy="raise", passive_deletes=True
    )

   