from sqlalchemy import BigInteger, Boolean, Column, ForeignKey, String, Integer, Date, Float
from sqlalchemy.orm import relationship, Mapped, mapped_column, DeclarativeBase, joinedload
from sqlalchemy import join
from sqlalchemy.ext.declarative import declared_attr
from config import Base
from database.mixins import TimestampMixin

class Issue(Base, TimestampMixin):
    __tablename__ = 'issues'
    
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    type = Column(String(100), nullable=False)
    name = Column(String(100), nullable=False)
    description = Column(String(500), nullable=False)
    mitigation = Column(String(500), nullable=False)
    assigned_to = Column(String(50), nullable=False)
    is_completed = Column(Boolean, default=False, nullable=False)
    DueDate = Column(Date, nullable=False)


    issues_id = mapped_column(ForeignKey("tasks.id"))
    issue_name = relationship("Task", back_populates="issues", lazy="raise") 

    proj_issue_id = mapped_column(ForeignKey("projects.id"))
    proj_issue_name = relationship("Project", back_populates="proj_issues", lazy="raise") 

    prog_issue_id = mapped_column(ForeignKey("programs.id"))
    prog_issue_name = relationship("Program", back_populates="prog_issues", lazy="raise")

    port_issue_id = mapped_column(ForeignKey("portfolios.id"))
    port_issue_name = relationship("Portfolio", back_populates="port_issues", lazy="raise")
