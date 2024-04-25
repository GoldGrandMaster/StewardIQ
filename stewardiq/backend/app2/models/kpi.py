from sqlalchemy import BigInteger, Boolean, Column, ForeignKey, String, Integer, Date, Float
from sqlalchemy.orm import relationship, Mapped, mapped_column, DeclarativeBase, joinedload
from sqlalchemy import join
from sqlalchemy.ext.declarative import declared_attr
from config import Base
from database.mixins import TimestampMixin


class KPI(Base, TimestampMixin):
    __tablename__ = 'kpis'
    
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    description = Column(String(500), nullable=False)
    value = Column(Float, nullable=False)

    kpi_lifecycle_id = mapped_column(ForeignKey("lifecycle.id"))
    phase_kpi = relationship("Lifecycle", back_populates="kpis", lazy="raise")