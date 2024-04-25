from fastapi import APIRouter, Depends, HTTPException, status, Path
from config import get_db
from sqlalchemy.orm import Session
from schemas.tasks import RequestTask, ResponseTask, ListResponseTask
import database.tasks as tc

task_router = APIRouter(
    prefix="/tasks",
)


@task_router.get("/", response_model=ListResponseTask)
def get_tasks(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    tasks= tc.get_tasks(db, skip=skip, limit=limit)
    return {"code": "success", "status": status.HTTP_200_OK, "response": tasks}


@task_router.post("/", response_model=ResponseTask, status_code=status.HTTP_201_CREATED)
def create_task(task: RequestTask, db: Session = Depends(get_db)):
    tc.create_task(db, task)
    return {"code": "success", "status": status.HTTP_201_CREATED, "response": task}


@task_router.get("/{task_id}", response_model=ResponseTask)
def retrieve_task(task_id: int = Path(...), db: Session = Depends(get_db)):
    db_task = tc.get_task_by_id(db, task_id=task_id)
    if db_task is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Task not found")
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_task}


@task_router.put("/{task_id}", response_model=ResponseTask)
def update_task(task_id: int = Path(...), task: RequestTask = None, db: Session = Depends(get_db)):
    db_task = tc.get_task_by_id(db, task_id=task_id)
    if db_task is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Task not found")
    tc.update_task(db, task_id=task_id, task=task)
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_task}


@task_router.delete("/{task_id}", response_model=ResponseTask)
def delete_task(task_id: int = Path(...), db: Session = Depends(get_db)):
    db_task = tc.get_task_by_id(db, task_id=task_id)
    if db_task is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Task not found")
    tc.delete_task(db, task_id=task_id)
    return {"code": "success", "status": status.HTTP_204_NO_CONTENT, "response": "task deleted"}