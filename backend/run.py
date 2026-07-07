import uvicorn
from app.main import app

import multiprocessing

if __name__ == "__main__":
    multiprocessing.freeze_support()
    # Arrancamos en el puerto 8001 para Studio Pro Suite
    uvicorn.run(app, host="127.0.0.1", port=8001)
