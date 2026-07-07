import uvicorn
from app.main import app

if __name__ == "__main__":
    # Arrancamos en el puerto 8001 para Studio Pro Suite
    uvicorn.run(app, host="127.0.0.1", port=8001)
