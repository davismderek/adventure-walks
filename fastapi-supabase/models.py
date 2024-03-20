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

    

# class Abc(BaseModel):
#     letter: str
#     letterInput: str
    
class Abcs(BaseModel):
    user_id: str
    userFound: str
    # B: str
    # c: str
    # d: str
    # e: str
    # f: str
    # g: str
    # h: str
    # i: str
    # i: str
    # k: str
    # l: str
    # m: str
    # n: str
    # o: str
    # p: str
    # q: str
    # r: str
    # s: str
    # t: str
    # u: str
    # v: str
    # w: str
    # x: str
    # y: str
    # z: str
    
