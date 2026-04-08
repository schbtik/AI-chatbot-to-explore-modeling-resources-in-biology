from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {
        "project": "VCell AI Assistant",
        "status": "Online",
        "author": "Olena Skakun"
    }

@app.get("/health")
def health_check():
    return {"status": "ok"}