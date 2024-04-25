from sqlalchemy.orm import Session
from models.tasks import Task
from schemas.tasks import TaskSchema




def get_tasks(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Task).offset(skip).limit(limit).all()


def get_task_by_id(db: Session, task_id: int):
    return db.query(Task).filter(Task.id == task_id).first()


def create_task(db: Session, task: TaskSchema):
    db_task = Task(name=task.name,
                   description=task.description, is_completed=task.completed, status=task.status
                   , priority=task.priority , progress=task.progress, StartDate=task.StartDate
                   , EndDate=task.EndDate, cost=task.cost)
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task


def delete_task(db: Session, task_id: int):
    db_task = db.query(Task).filter(Task.id == task_id).first()
    db.delete(db_task)
    db.commit()


def update_task(db: Session, task_id: int, task: TaskSchema):
    db_task = db.query(Task).filter(Task.id == task_id).first()
    db_task.name = task.name
    db_task.description = task.description
    db_task.is_completed = task.completed
    db_task.status = task.status
    db_task.priority = task.priority
    db_task.progress = task.progress
    db_task.StartDate = task.StartDate
    db_task.EndDate = task.EndDate
    db_task.cost = task.cost
    db.commit()
    db.refresh(db_task)
    return db_task

