from sqlalchemy.orm import Session
from models.programs import Program
from schemas.programs import ProgramSchema


def get_programs(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Program).offset(skip).limit(limit).all()


def get_program_by_id(db: Session, program_id: int):
    return db.query(Program).filter(Program.id == program_id).first()


def create_program(db: Session, program: ProgramSchema):
    db_program = Program(name=program.name,
                   description=program.description
                   , StartDate=program.StartDate, EndDate=program.EndDate)
    db.add(db_program)
    db.commit()
    db.refresh(db_program)
    return db_program


def delete_program(db: Session, program_id: int):
    db_program = db.query(Program).filter(Program.id == program_id).first()
    db.delete(db_program)
    db.commit()


def update_program(db: Session, program_id: int, program: ProgramSchema):
    db_program = db.query(Program).filter(Program.id == program_id).first()
    db_program.name = program.name
    db_program.description = program.description
    db_program.StartDate = program.StartDate
    db_program.EndDate = program.EndDate
    db.commit()
    db.refresh(db_program)
    return db_program

