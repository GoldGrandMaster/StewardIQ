from sqlalchemy.orm import Session
from models.kpi import KPI
from schemas.kpi import KPISchema



def get_kpi(db: Session, skip: int = 0, limit: int = 100):
    return db.query(KPI).offset(skip).limit(limit).all()


def get_kpi_by_id(db: Session, kpi_id: int):
    return db.query(KPI).filter(KPI.id == kpi_id).first()


def create_kpi(db: Session, kpi: KPISchema):
    db_kpi = KPI(name=kpi.name, description=kpi.description, value=kpi.value)
    db.add(db_kpi)
    db.commit()
    db.refresh(db_kpi)
    return db_kpi


def delete_kpi(db: Session, kpi_id: int):
    db_kpi = db.query(KPI).filter(KPI.id == kpi_id).first()
    db.delete(db_kpi)
    db.commit()


def update_lifecycle(db: Session, kpi_id: int, kpi: KPISchema):
    db_kpi = db.query(KPI).filter(KPI.id == kpi_id).first()
    db_kpi.name = kpi.name
    db_kpi.description = kpi.description
    db_kpi.value = kpi.value
    db.commit()
    db.refresh(db_kpi)
    return db_kpi