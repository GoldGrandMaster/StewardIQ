from sqlalchemy import BigInteger, Boolean, Column, ForeignKey, String, Integer, Date, Float
from sqlalchemy.orm import relationship, Mapped, mapped_column, DeclarativeBase, joinedload
from sqlalchemy import join
from sqlalchemy.ext.declarative import declared_attr
from config import Base
from database.mixins import TimestampMixin


class Project(Base, TimestampMixin):
    __tablename__ = 'projects'

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    description = Column(String(255), nullable=False)
    is_completed = Column(Boolean, default=False, nullable=False)
    StartDate = Column(Date, nullable=False)
    EndDate = Column(Date, nullable=False)

    project_lifecycle_id = mapped_column(ForeignKey("lifecycle.id"))
    lifecycle_proj_name = relationship("Lifecycle", back_populates="lifecycle_proj", lazy="raise") 
    
    proj = relationship(
        "Task", back_populates="proj_name", lazy="raise", passive_deletes=True
    )

    program_id = mapped_column(ForeignKey("programs.id"))
    prog_name = relationship("Program", back_populates="prog", lazy="raise") 

    proj_roadmap_id = mapped_column(ForeignKey("roadmaps.id"))
    proj_roadmap_name = relationship("Roadmap", back_populates="proj_roadmap", lazy="raise")

    proj_risks = relationship(
        "Risk", back_populates="proj_risk_name", lazy="raise", passive_deletes=True
    )

    proj_issues = relationship(
        "Issue", back_populates="proj_issue_name", lazy="raise", passive_deletes=True
    )

    projname = relationship(
        "Steward", back_populates="asset_domain_proj", lazy="raise", passive_deletes=True
    )