from fastapi import APIRouter, Depends, HTTPException, status, Path
from config import get_db
from sqlalchemy.orm import Session
from schemas.users import RequestUser, ResponseUser, ListResponseUser
import database.users as uc

user_router = APIRouter(
    prefix="/users",
)


@user_router.get("/", response_model=ListResponseUser)
def get_users(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    users = uc.get_users(db, skip=skip, limit=limit)
    return {"code": "success", "status": status.HTTP_200_OK, "response": users}


@user_router.post("/", response_model=ResponseUser, status_code=status.HTTP_201_CREATED)
def create_user(user: RequestUser, db: Session = Depends(get_db)):
    uc.create_user(db, user)
    return {"code": "success", "status": status.HTTP_201_CREATED, "response": user}


@user_router.get("/{user_id}", response_model=ResponseUser)
def retrieve_user(user_id: int = Path(...), db: Session = Depends(get_db)):
    db_user = uc.get_user_by_id(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="User not found")
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_user}


@user_router.put("/{user_id}", response_model=ResponseUser)
def update_user(user_id: int = Path(...), user: RequestUser = None, db: Session = Depends(get_db)):
    db_user = uc.get_user_by_id(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="User not found")
    uc.update_user(db, user_id=user_id, user=user)
    return {"code": "success", "status": status.HTTP_200_OK, "response": db_user}


@user_router.delete("/{user_id}", response_model=ResponseUser)
def delete_user(user_id: int = Path(...), db: Session = Depends(get_db)):
    db_user = uc.get_user_by_id(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="User not found")
    uc.delete_user(db, user_id=user_id)
    return {"code": "success", "status": status.HTTP_204_NO_CONTENT, "response": "user deleted"}