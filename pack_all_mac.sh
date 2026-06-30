#!/bin/bash
set -e

echo "============================================="
echo "   Studio Pro Suite 3.0 - macOS Packager"
echo "============================================="

# 1. Frontend dependencies
echo "[1/4] Installing Node dependencies..."
npm install

# 2. Compile Python Backend
echo "[2/4] Compiling Python Backend..."
cd backend
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi
source venv/bin/activate
pip install pyinstaller
echo "Running PyInstaller..."
# We use hidden-imports for Uvicorn/FastAPI dynamically loaded modules
pyinstaller --name studio_pro_backend \
            --onefile \
            --hidden-import uvicorn \
            --hidden-import fastapi \
            --hidden-import sounddevice \
            --hidden-import librosa \
            app/main.py

cd ..

# 3. Move Backend Binary to Resources
echo "[3/4] Preparing Backend Resources..."
mkdir -p backend-dist
rm -f backend-dist/studio_pro_backend
cp backend/dist/studio_pro_backend backend-dist/
chmod +x backend-dist/studio_pro_backend

# 4. Build Vite & Pack Electron DMG
echo "[4/4] Building Vite Frontend and Packaging DMG..."
# This runs 'vite build' and then 'electron-builder --mac'
npm run pack:all

echo "============================================="
echo " Packaging Complete!"
echo " The .dmg installer is located in dist-electron/"
echo "============================================="
