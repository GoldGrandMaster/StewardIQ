from sqlalchemy import BigInteger, Boolean, Column, ForeignKey, String, Integer, Date, Float
from sqlalchemy.orm import relationship, Mapped, mapped_column, DeclarativeBase, joinedload
from sqlalchemy import join
from sqlalchemy.ext.declarative import declared_attr
from config import Base
from database.mixins import TimestampMixin

class Roadmap(Base, TimestampMixin):
    __tablename__ = 'roadmaps'
    
    id = Column(BigInteger, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    description = Column(String(255), nullable=False)

    proj_roadmap = relationship(
        "Project", back_populates="proj_roadmap_name", lazy="raise", passive_deletes=True
    )

    prog_roadmap = relationship(
        "Program", back_populates="prog_roadmap_name", lazy="raise", passive_deletes=True
    )

   