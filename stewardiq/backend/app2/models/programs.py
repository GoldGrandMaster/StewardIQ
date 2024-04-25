from sqlalchemy import BigInteger, Boolean, Column, ForeignKey, String, Integer, Date, Float
from sqlalchemy.orm import relationship, Mapped, mapped_column, DeclarativeBase, joinedload
from sqlalchemy import join
from sqlalchemy.ext.declarative import declared_attr
from config import Base
from database.mixins import TimestampMixin


class Program(Base, TimestampMixin):
    __tablename__ = 'programs'
    
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    description = Column(String(255), nullable=False)
    StartDate = Column(Date, nullable=False)
    EndDate = Column(Date, nullable=False)

    program_lifecycle_id = mapped_column(ForeignKey("lifecycle.id"))
    lifecycle_prog_name = relationship("Lifecycle", back_populates="lifecycle_prog", lazy="raise") 
    
    prog = relationship(
        "Project", back_populates="prog_name", lazy="raise", passive_deletes=True
    )

    portfolio_id = mapped_column(ForeignKey("portfolios.id"))
    port_name = relationship("Portfolio", back_populates="port", lazy="raise") 

    prog_roadmap_id = mapped_column(ForeignKey("roadmaps.id"))
    prog_roadmap_name = relationship("Roadmap", back_populates="prog_roadmap", lazy="raise")

    prog_risks = relationship(
        "Risk", back_populates="prog_risk_name", lazy="raise", passive_deletes=True
    )

    prog_issues = relationship(
        "Issue", back_populates="prog_issue_name", lazy="raise", passive_deletes=True
    )

    progname = relationship(
        "Steward", back_populates="asset_domain_prog", lazy="raise", passive_deletes=True
    )