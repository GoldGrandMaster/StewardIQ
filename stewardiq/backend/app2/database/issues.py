from sqlalchemy.orm import Session
from models.issues import Issue
from schemas.issues import IssueSchema


def get_issues(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Issue).offset(skip).limit(limit).all()


def get_issue_by_id(db: Session, issue_id: int):
    return db.query(Issue).filter(Issue.id == issue_id).first()

def create_issue(db: Session, issue: IssueSchema):
    db_issue = Issue(type=issue.type, name=issue.name,
                   description=issue.description, mitigation=issue.mitigation, assigned_to=issue.assigned
                   , is_completed=issue.completed, DueDate=issue.DueDate)
    db.add(db_issue)
    db.commit()
    db.refresh(db_issue)
    return db_issue


def delete_issue(db: Session, issue_id: int):
    db_issue = db.query(Issue).filter(Issue.id == issue_id).first()
    db.delete(db_issue)
    db.commit()


def update_issue(db: Session, issue_id: int, issue: IssueSchema):
    db_issue = db.query(Issue).filter(Issue.id == issue_id).first()
    db_issue.type = issue.type
    db_issue.name = issue.name
    db_issue.description = issue.description
    db_issue.mitigation = issue.mitigation
    db_issue.assigned_to = issue.assigned
    db_issue.is_completed = issue.completed
    db_issue.DueDate = issue.DueDate
    db.commit()
    db.refresh(db_issue)
    return db_issue

