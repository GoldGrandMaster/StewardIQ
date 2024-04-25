from sqlalchemy import BigInteger, Boolean, Column, ForeignKey, String, Integer, Date, Float
from sqlalchemy.orm import relationship, Mapped, mapped_column, DeclarativeBase, joinedload
from sqlalchemy import join
from sqlalchemy.ext.declarative import declared_attr
from config import Base
from database.mixins import TimestampMixin


class Task(Base, TimestampMixin):
    __tablename__ = 'tasks'
    
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    description = Column(String(255), nullable=False)
    is_completed = Column(Boolean, default=False, nullable=False)
    status = Column(String(50), nullable=False)
    priority = Column(String(50), nullable=False)
    progress = Column(Float, nullable=False)
    StartDate = Column(Date, nullable=False)
    EndDate = Column(Date, nullable=False)
    cost = Column(Float, nullable=False)

    task_assignee_id = mapped_column(ForeignKey("users.id"))
    assignee = relationship("User", back_populates="tasks", lazy="raise")

    task_lifecycle_id = mapped_column(ForeignKey("lifecycle.id"))
    lifecycle_name = relationship("Lifecycle", back_populates="lifecycle", lazy="raise")

    project_id = mapped_column(ForeignKey("projects.id"))
    proj_name = relationship("Project", back_populates="proj", lazy="raise") 

    task_wbs_id = mapped_column(ForeignKey("wbs.id"))
    wbs_name = relationship("WBS", back_populates="task_name", lazy="raise")

    risks = relationship(
        "Risk", back_populates="risk_name", lazy="raise", passive_deletes=True
    )

    issues = relationship(
        "Issue", back_populates="issue_name", lazy="raise", passive_deletes=True
    )

    taskname = relationship(
        "Steward", back_populates="asset_domain_task", lazy="raise", passive_deletes=True
    )