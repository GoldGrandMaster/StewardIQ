from sqlalchemy.orm import Session
from models.risks import Risk
from schemas.risks import RiskSchema


def get_risks(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Risk).offset(skip).limit(limit).all()


def get_risk_by_id(db: Session, risk_id: int):
    return db.query(Risk).filter(Risk.id == risk_id).first()

def create_risk(db: Session, risk: RiskSchema):
    db_risk = Risk(type=risk.type, name=risk.name,
                   description=risk.description, mitigation=risk.mitigation, assigned_to=risk.assigned
                   , is_completed=risk.completed, DueDate=risk.DueDate)
    db.add(db_risk)
    db.commit()
    db.refresh(db_risk)
    return db_risk


def delete_risk(db: Session, risk_id: int):
    db_risk = db.query(Risk).filter(Risk.id == risk_id).first()
    db.delete(db_risk)
    db.commit()


def update_risk(db: Session, risk_id: int, risk: RiskSchema):
    db_risk = db.query(Risk).filter(Risk.id == risk_id).first()
    db_risk.type = risk.type
    db_risk.name = risk.name
    db_risk.description = risk.description
    db_risk.mitigation = risk.mitigation
    db_risk.assigned_to = risk.assigned
    db_risk.is_completed = risk.completed
    db_risk.DueDate = risk.DueDate
    db.commit()
    db.refresh(db_risk)
    return db_risk

