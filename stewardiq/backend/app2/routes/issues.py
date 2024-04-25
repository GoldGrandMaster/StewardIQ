from fastapi import APIRouter, Depends, HTTPException, status, Path
from config import get_db
from sqlalchemy.orm import Session
from schemas.issues import RequestIssue, ResponseIssue, ListResponseIssue
import database.issues as lc


issue_router = APIRouter(
    prefix="/issue",
)


@issue_router.get("/", response_model=ListResponseIssue)
def get_issue(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    issue = lc.get_issues(db, skip=skip, limit=limit)
    return {"code": "success", "status": status.HTTP_200_OK, "response": issue}


@issue_router.post("/", response_model=ResponseIssue, status_code=status.HTTP_201_CREATED)
def create_issue(issue: RequestIssue, db: Session = Depends(get_db)):
    lc.create_issue(db, issue)
    return {"code": "success", "status": status.HTTP_201_CREATED, "response": issue}


@issue_router.get("/{issue_id}", response_model=ResponseIssue)
def retrieve_issue(issue_id: int = Path(...), db: Session = Depends(get_db)):
    db_issue = lc.get_issue_by_id(db, issue_id=issue_id)
    if db_issue is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="issue not found")
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_issue}


@issue_router.put("/{issue_id}", response_model=ResponseIssue)
def update_issue(issue_id: int = Path(...), issue: RequestIssue = None, db: Session = Depends(get_db)):
    db_issue = lc.get_issue_by_id(db, issue_id=issue_id)
    if db_issue is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="issue not found")
    lc.update_issue(db, issue_id=issue_id, issue=issue)
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_issue}


@issue_router.delete("/{issue_id}", response_model=ResponseIssue)
def delete_issue(issue_id: int = Path(...), db: Session = Depends(get_db)):
    db_issue = lc.get_issue_by_id(db, issue_id=issue_id)
    if db_issue is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="issue not found")
    lc.delete_issue(db, issue_id=issue_id)
    return {"code": "success", "status": status.HTTP_204_NO_CONTENT, "response": "issue deleted"}