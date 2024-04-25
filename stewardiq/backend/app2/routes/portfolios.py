from fastapi import APIRouter, Depends, HTTPException, status, Path
from config import get_db
from sqlalchemy.orm import Session
from schemas.portfolios import RequestPortfolio, ResponsePortfolio, ListResponsePortfolio
import database.portfolios as lc


portfolio_router = APIRouter(
    prefix="/portfolio",
)


@portfolio_router.get("/", response_model=ListResponsePortfolio)
def get_portfolio(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    portfolio = lc.get_portfolios(db, skip=skip, limit=limit)
    return {"code": "success", "status": status.HTTP_200_OK, "response": portfolio}


@portfolio_router.post("/", response_model=ResponsePortfolio, status_code=status.HTTP_201_CREATED)
def create_portfolio(portfolio: RequestPortfolio, db: Session = Depends(get_db)):
    lc.create_portfolio(db, portfolio)
    return {"code": "success", "status": status.HTTP_201_CREATED, "response": portfolio}


@portfolio_router.get("/{portfolio_id}", response_model=ResponsePortfolio)
def retrieve_portfolio(portfolio_id: int = Path(...), db: Session = Depends(get_db)):
    db_portfolio = lc.get_portfolio_by_id(db, portfolio_id=portfolio_id)
    if db_portfolio is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="portfolio not found")
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_portfolio}


@portfolio_router.put("/{portfolio_id}", response_model=ResponsePortfolio)
def update_portfolio(portfolio_id: int = Path(...), portfolio: RequestPortfolio = None, db: Session = Depends(get_db)):
    db_portfolio = lc.get_portfolio_by_id(db, portfolio_id=portfolio_id)
    if db_portfolio is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="portfolio not found")
    lc.update_portfolio(db, portfolio_id=portfolio_id, portfolio=portfolio)
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_portfolio}


@portfolio_router.delete("/{portfolio_id}", response_model=ResponsePortfolio)
def delete_portfolio(portfolio_id: int = Path(...), db: Session = Depends(get_db)):
    db_portfolio = lc.get_portfolio_by_id(db, portfolio_id=portfolio_id)
    if db_portfolio is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="portfolio not found")
    lc.delete_portfolio(db, portfolio_id=portfolio_id)
    return {"code": "success", "status": status.HTTP_204_NO_CONTENT, "response": "portfolio deleted"}