from sqlalchemy.orm import Session
from models.users import User
from schemas.users import UserSchema


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(User).offset(skip).limit(limit).all()


def get_users_by_id(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()


def create_user(db: Session, user: UserSchema):
    db_user = User(email=user.email, password=user.password, username=user.username 
                , first_name=user.first_name , last_name=user.last_name, is_system_admin=user.admin
                , is_fte=user.fte, is_business_steward=user.steward, is_resource=user.resource, is_onshore=user.onshore)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def delete_user(db: Session, user_id: int):
    db_user = db.query(User).filter(User.id == user_id).first()
    db.delete(db_user)
    db.commit()


def update_user(db: Session, user_id: int, user: UserSchema):
    db_user= db.query(User).filter(User.id == user_id).first()
    db_user.email = user.email
    db_user.password = user.password
    db_user.username = user.username
    db_user.first_name = user.first_name
    db_user.last_name = user.last_name
    db_user.is_system_admin = user.admin
    db_user.is_fte = user.fte
    db_user.is_business_steward = user.steward 
    db_user.is_resource = user.resource
    db_user.is_onshore = user.onshore
    db.commit()
    db.refresh(db_user)
    return db_user

