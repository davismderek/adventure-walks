from supabase import Client, create_client
from dotenv import load_dotenv
# from config import api, url
import os

load_dotenv()

# api_url: str = os.getenv("url")
api_url: str = 'https://ivrkttlvgtjqrxppnrvt.supabase.co'
key: str = os.getenv("api")


def create_supabase_client():
    supabase: Client = create_client(api_url, key)
    return supabase
