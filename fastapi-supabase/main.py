
# from fastapi.security import OAuth2PasswordBearer
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from models import User, Abcs, Colors
from db.supabase import create_supabase_client

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",

]



app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Initialize supabase client
supabase = create_supabase_client()



@app.post("/register")
def register_user(request: User):
    response = supabase.auth.sign_up({
        "email": request.email, 
        "password": request.password, 
    })
    return response

@app.post("/login")
def login_user(request: User ):
    response = supabase.auth.sign_in_with_password({
        "email": request.email, 
        "password": request.password, 
    })
    return response

@app.get("/logout")
def logout_user():
    response = supabase.auth.sign_out()
    return response

@app.get("/email")
def get_email():
    response = supabase.table('profile').select('email').execute()
    return response

@app.get('/letterinput/getLetterFound')
def get_letterFound():
    response = supabase.table('abcs').select('userFound', 'letter').order('created_at', desc=True).execute()
    return response

@app.get('/colors/getColorFound')
def get_colorFound():
    response = supabase.table('colors').select('userFound', 'color').order('created_at', desc=True).execute()
    return response


@app.post("/letterinput")
async def insert_data(data: Abcs):
    print("data:", data)
    try:
        table_name = "abcs"
        response = supabase.table(table_name).insert([
            {"user_id": data.user_id, "userFound": data.userFound, "letter":data.letter}
        ]).execute()
        print(response)
        # if response.error:
        #     raise HTTPException(status_code=500, detail="Failed to insert data into Supabase table")

        return {"message": "Data inserted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@app.post("/colorsinput")
async def insert_data(data: Colors):
    print("data:", data)
    try:
        table_name = "colors"
        
        response = supabase.table(table_name).insert([{"user_id": data.user_id, "userFound": data.userFound, "color": data.color}]).execute()
        print(response)

        return {"message": "Data inserted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# @app.post("/colorsinput")
# async def insert_data(data: Colors):
#     print("data:", data)
#     try:
#         table_name = "colors"
#         response = supabase.table(table_name).insert([
#             {"user_id": data.user_id, "red": data.red, "blue": data.blue, "orange": data.orange, "yellow": data.yellow, "green": data.green, "purple": data.purple, "pink": data.pink, "brown": data.brown, "black": data.black, "white": data.white}
#         ]).execute()
#         print(response)
       
#         return {"message": "Data inserted successfully"}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))


# @app.post("/letterinput")
# async def insert_data(data: Abcs):
#     try:
#         # Define the table name
#         table_name = "abcs"

#         # Insert data into the table
#         response = await supabase.table(table_name).insert([
#             {"B": data}
#         ]).select()

#         if response.error:
#             raise HTTPException(status_code=500, detail="Failed to insert data into Supabase table")

#         return {"message": "Data inserted successfully"}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))




# @app.put("/abcs/add")
# def add_letter():
#     response = 
#     tableabc = "abcs"
#     column_name = "a"
#     input_entry = entry
#     response = await supabase.table(tableabc).update({column_name: input_entry})





# @app.get("/email")
# def get_email(request: User):
#     response = supabase.table('profile').select('email').execute({
#         "email": request.email
#     })
#     return response



# THE REST IS GARBAGE!

