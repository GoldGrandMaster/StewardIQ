from fastapi import APIRouter, Depends, HTTPException, status, Path
from config import get_db
from sqlalchemy.orm import Session
from schemas.risks import RequestRisk, ResponseRisk, ListResponseRisk
import database.risks as lc


risk_router = APIRouter(
    prefix="/risk",
)


@risk_router.get("/", response_model=ListResponseRisk)
def get_risk(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    risk = lc.get_risks(db, skip=skip, limit=limit)
    return {"code": "success", "status": status.HTTP_200_OK, "response": risk}


@risk_router.post("/", response_model=ResponseRisk, status_code=status.HTTP_201_CREATED)
def create_risk(risk: RequestRisk, db: Session = Depends(get_db)):
    lc.create_risk(db, risk)
    return {"code": "success", "status": status.HTTP_201_CREATED, "response": risk}


@risk_router.get("/{risk_id}", response_model=ResponseRisk)
def retrieve_risk(risk_id: int = Path(...), db: Session = Depends(get_db)):
    db_risk = lc.get_risk_by_id(db, risk_id=risk_id)
    if db_risk is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="risk not found")
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_risk}


@risk_router.put("/{risk_id}", response_model=ResponseRisk)
def update_risk(risk_id: int = Path(...), risk: RequestRisk = None, db: Session = Depends(get_db)):
    db_risk = lc.get_risk_by_id(db, risk_id=risk_id)
    if db_risk is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="risk not found")
    lc.update_risk(db, risk_id=risk_id, risk=risk)
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_risk}


@risk_router.delete("/{risk_id}", response_model=ResponseRisk)
def delete_risk(risk_id: int = Path(...), db: Session = Depends(get_db)):
    db_risk = lc.get_risk_by_id(db, risk_id=risk_id)
    if db_risk is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="risk not found")
    lc.delete_risk(db, risk_id=risk_id)
    return {"code": "success", "status": status.HTTP_204_NO_CONTENT, "response": "risk deleted"}