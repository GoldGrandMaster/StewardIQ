from fastapi import APIRouter, Depends, HTTPException, status, Path
from config import get_db
from sqlalchemy.orm import Session
from schemas.projects import RequestProject, ResponseProject, ListResponseProject
import database.projects as lc


project_router = APIRouter(
    prefix="/project",
)


@project_router.get("/", response_model=ListResponseProject)
def get_project(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    project = lc.get_projects(db, skip=skip, limit=limit)
    return {"code": "success", "status": status.HTTP_200_OK, "response": project}


@project_router.post("/", response_model=ResponseProject, status_code=status.HTTP_201_CREATED)
def create_project(project: RequestProject, db: Session = Depends(get_db)):
    lc.create_project(db, project)
    return {"code": "success", "status": status.HTTP_201_CREATED, "response": project}


@project_router.get("/{project_id}", response_model=ResponseProject)
def retrieve_project(project_id: int = Path(...), db: Session = Depends(get_db)):
    db_project = lc.get_project_by_id(db, project_id=project_id)
    if db_project is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="project not found")
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_project}


@project_router.put("/{project_id}", response_model=ResponseProject)
def update_project(project_id: int = Path(...), project: RequestProject = None, db: Session = Depends(get_db)):
    db_project = lc.get_project_by_id(db, project_id=project_id)
    if db_project is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="project not found")
    lc.update_project(db, project_id=project_id, project=project)
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_project}


@project_router.delete("/{project_id}", response_model=ResponseProject)
def delete_project(project_id: int = Path(...), db: Session = Depends(get_db)):
    db_project = lc.get_project_by_id(db, project_id=project_id)
    if db_project is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="project not found")
    lc.delete_project(db, project_id=project_id)
    return {"code": "success", "status": status.HTTP_204_NO_CONTENT, "response": "project deleted"}