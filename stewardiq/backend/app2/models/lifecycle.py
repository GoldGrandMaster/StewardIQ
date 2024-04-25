from sqlalchemy import BigInteger, Boolean, Column, ForeignKey, String, Integer, Date
from sqlalchemy.orm import relationship, Mapped, mapped_column, DeclarativeBase
from sqlalchemy.ext.declarative import declared_attr
from config import Base


class Lifecycle(Base):
    __tablename__ = 'lifecycle'
    
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    phase = Column(String(255), nullable=False)
    description = Column(String(255), nullable=False)
    
    lifecycle = relationship(
        "Task", back_populates="lifecycle_name", lazy="raise", passive_deletes=True
    )

    lifecycle_proj = relationship(
        "Project", back_populates="lifecycle_proj_name", lazy="raise", passive_deletes=True
    )

    lifecycle_prog = relationship(
        "Program", back_populates="lifecycle_prog_name", lazy="raise", passive_deletes=True
    )

    lifecycle_port = relationship(
        "Portfolio", back_populates="lifecycle_port_name", lazy="raise", passive_deletes=True
    )

    kpis = relationship(
        "KPI", back_populates="phase_kpi", lazy="raise", passive_deletes=True
    )
