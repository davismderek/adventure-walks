from typing import Union
from dotenv import load_dotenv
from uuid import uuid4
# from fastapi.security import OAuth2PasswordBearer
from fastapi.middleware.cors import CORSMiddleware
import bcrypt
from fastapi import FastAPI
from models import User
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

# @app.get("/email")
# def get_email(request: User):
#     response = supabase.table('profile').select('email').execute({
#         "email": request.email
#     })
#     return response



# THE REST IS GARBAGE!

def user_exists(key: str = "email", value: str = None):
    user = supabase.from_("users").select("*").eq(key, value).execute()
    return len(user.data) > 0

# Create a new user
@app.post("/user")
def create_user(user: User):
    try:
        # Convert email to lowercase
        user_email = user.email.lower()
        # Hash password
        hashed_password = bcrypt.hashpw(user.password.encode(), bcrypt.gensalt()).decode()

        # Check if user already exists
        if user_exists(value=user_email):
            return {"message": "User already exists"}

        # Add user to users table
        user = supabase.from_("users")\
            .insert({"name": user.name, "email": user_email, "password": hashed_password})\
            .execute()

        # Check if user was added
        if user:
            return {"message": "User created successfully"}
        else:
            return {"message": "User creation failed"}
    except Exception as e:
        print("Error: ", e)
        return {"message": "User creation failed"}

# Retrieve a user
@app.get("/user")
def get_user(user_id: Union[str, None] = None):
    try:
        if user_id:
            user = supabase.from_("users")\
                .select("id", "name", "email")\
                .eq("id", user_id)\
                .execute()

            if user:
                return user
        else:
            users = supabase.from_("users")\
                .select("id", "email", "name")\
                .execute()
            if users:
                return users
    except Exception as e:
        print(f"Error: {e}")
        return {"message": "User not found"}
    

# Update a user
@app.put("/user")
def update_user(user_id: str, email: str, name: str):
    try:
        user_email = email.lower()

        # Check if user exists
        if user_exists("id", user_id):
            # Check if email already exists
            email_exists = supabase.from_("users")\
                .select("*").eq("email", user_email)\
                .execute()
            if len(email_exists.data) > 0:
                return {"message": "Email already exists"}

            # Update user
            user = supabase.from_("users")\
                .update({"name": name, "email": user_email})\
                .eq("id", user_id).execute()
            if user:
                return {"message": "User updated successfully"}
        else:
            return {"message": "User update failed"}
    except Exception as e:
        print(f"Error: {e}")
        return {"message": "User update failed"}

# Delete a user
@app.delete("/user")
def delete_user(user_id: str):
    try:        
        # Check if user exists
        if user_exists("id", user_id):
            # Delete user
            supabase.from_("users")\
                .delete().eq("id", user_id)\
                .execute()
            return {"message": "User deleted successfully"}

        else:
            return {"message": "User deletion failed"}
    except Exception as e:
        print(f"Error: {e}")
        return {"message": "User deletion failed"}