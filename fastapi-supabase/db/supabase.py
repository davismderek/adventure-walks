from supabase import Client, create_client
from dotenv import load_dotenv
# from config import api, url
import os

load_dotenv()

# api_url: str = os.getenv("url")
api_url: str = 'https://ivrkttlvgtjqrxppnrvt.supabase.co'
key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2cmt0dGx2Z3RqcXJ4cHBucnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxNjUzNzksImV4cCI6MjAyNTc0MTM3OX0.oQEi9eJZVNkdTwl4QvdTxkCg1ij4fwP7dShFntfvTYc"



def create_supabase_client():
    supabase: Client = create_client(api_url, key)
    return supabase
