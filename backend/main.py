from fastapi import FastAPI, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from auth import register_user, authenticate_user, verify_token

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

@app.post("/auth/register")
def register(data: dict):
    return register_user(data["email"], data["password"])

@app.post("/auth/login")
def login(data: dict):
    token = authenticate_user(data["email"], data["password"])
    return {"access_token": token, "token_type": "bearer"}

@app.get("/users/me")
def get_me(token: str = Depends(oauth2_scheme)):
    email = verify_token(token)
    return {"email": email}
