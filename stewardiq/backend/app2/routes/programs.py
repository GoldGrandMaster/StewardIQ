from fastapi import APIRouter, Depends, HTTPException, status, Path
from config import get_db
from sqlalchemy.orm import Session
from schemas.programs import RequestProgram, ResponseProgram, ListResponseProgram
import database.programs as lc


program_router = APIRouter(
    prefix="/program",
)


@program_router.get("/", response_model=ListResponseProgram)
def get_program(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    program = lc.get_programs(db, skip=skip, limit=limit)
    return {"code": "success", "status": status.HTTP_200_OK, "response": program}


@program_router.post("/", response_model=ResponseProgram, status_code=status.HTTP_201_CREATED)
def create_program(program: RequestProgram, db: Session = Depends(get_db)):
    lc.create_program(db, program)
    return {"code": "success", "status": status.HTTP_201_CREATED, "response": program}


@program_router.get("/{program_id}", response_model=ResponseProgram)
def retrieve_program(program_id: int = Path(...), db: Session = Depends(get_db)):
    db_program = lc.get_program_by_id(db, program_id=program_id)
    if db_program is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="program not found")
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_program}


@program_router.put("/{program_id}", response_model=ResponseProgram)
def update_program(program_id: int = Path(...), program: RequestProgram = None, db: Session = Depends(get_db)):
    db_program = lc.get_program_by_id(db, program_id=program_id)
    if db_program is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="program not found")
    lc.update_program(db, program_id=program_id, program=program)
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_program}


@program_router.delete("/{program_id}", response_model=ResponseProgram)
def delete_program(program_id: int = Path(...), db: Session = Depends(get_db)):
    db_program = lc.get_program_by_id(db, program_id=program_id)
    if db_program is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="program not found")
    lc.delete_program(db, program_id=program_id)
    return {"code": "success", "status": status.HTTP_204_NO_CONTENT, "response": "program deleted"}