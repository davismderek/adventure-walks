from pydantic import BaseModel

class User(BaseModel):
    email: str
    password: str


class Profile(BaseModel):
    email: str
    display_name: str

class Colors(BaseModel):
    user_id: str
    color: str
    userFound: str


    
class Abcs(BaseModel):
    user_id: str
    userFound: str
    letter: str
    