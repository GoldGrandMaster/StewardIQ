from fastapi import APIRouter, Depends, HTTPException, status, Path
from config import get_db
from sqlalchemy.orm import Session
from schemas.kpi import RequestKPI, ResponseKPI, ListResponseKPI
import database.kpi as lc


kpi_router = APIRouter(
    prefix="/kpi",
)


@kpi_router.get("/", response_model=ListResponseKPI)
def get_kpi(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    kpi = lc.get_kpi(db, skip=skip, limit=limit)
    return {"code": "success", "status": status.HTTP_200_OK, "response": kpi}


@kpi_router.post("/", response_model=ResponseKPI, status_code=status.HTTP_201_CREATED)
def create_kpi(kpi: RequestKPI, db: Session = Depends(get_db)):
    lc.create_kpi(db, kpi)
    return {"code": "success", "status": status.HTTP_201_CREATED, "response": kpi}


@kpi_router.get("/{kpi_id}", response_model=ResponseKPI)
def retrieve_kpi(kpi_id: int = Path(...), db: Session = Depends(get_db)):
    db_kpi = lc.get_kpi_by_id(db, kpi_id=kpi_id)
    if db_kpi is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="kpi not found")
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_kpi}


@kpi_router.put("/{kpi_id}", response_model=ResponseKPI)
def update_kpi(kpi_id: int = Path(...), kpi: RequestKPI = None, db: Session = Depends(get_db)):
    db_kpi = lc.get_kpi_by_id(db, kpi_id=kpi_id)
    if db_kpi is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="kpi not found")
    lc.update_kpi(db, kpi_id=kpi_id, kpi=kpi)
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_kpi}


@kpi_router.delete("/{kpi_id}", response_model=ResponseKPI)
def delete_kpi(kpi_id: int = Path(...), db: Session = Depends(get_db)):
    db_kpi = lc.get_kpi_by_id(db, kpi_id=kpi_id)
    if db_kpi is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="kpi not found")
    lc.delete_kpi(db, kpi_id=kpi_id)
    return {"code": "success", "status": status.HTTP_204_NO_CONTENT, "response": "kpi deleted"}