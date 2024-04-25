from sqlalchemy import BigInteger, Boolean, Column, ForeignKey, String, Integer, Date, Float
from sqlalchemy.orm import relationship, Mapped, mapped_column, DeclarativeBase, joinedload
from sqlalchemy import join
from sqlalchemy.ext.declarative import declared_attr
from config import Base
from database.mixins import TimestampMixin

class Portfolio(Base, TimestampMixin):
    __tablename__ = 'portfolios'
    
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    description = Column(String(255), nullable=False)
    StartDate = Column(Date, nullable=False)
    EndDate = Column(Date, nullable=False)

    portfolio_lifecycle_id = mapped_column(ForeignKey("lifecycle.id"))
    lifecycle_port_name = relationship("Lifecycle", back_populates="lifecycle_port", lazy="raise") 

    port = relationship(
        "Program", back_populates="port_name", lazy="raise", passive_deletes=True
    )

    portname = relationship(
        "Steward", back_populates="asset_domain", lazy="raise", passive_deletes=True
    )

    port_risks = relationship(
        "Risk", back_populates="port_risk_name", lazy="raise", passive_deletes=True
    )

    port_issues = relationship(
        "Issue", back_populates="port_issue_name", lazy="raise", passive_deletes=True
    )