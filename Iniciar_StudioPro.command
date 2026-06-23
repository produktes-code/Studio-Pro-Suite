#!/bin/bash
cd "$(dirname "$0")"
clear
echo "=========================================================="
echo "                 INICIANDO STUDIO PRO 3.0                 "
echo "=========================================================="
echo ""
echo "[1/2] Arrancando motor de Inteligencia Artificial..."

# Usamos npx vite --port 5175 para garantizar el puerto exacto
npm run dev -- --port 5175 > /dev/null 2>&1 &
SERVER_PID=$!

# Asegurar que el servidor local se detenga al salir del script
trap "kill $SERVER_PID; exit" INT TERM EXIT

# Esperar unos segundos a que Vite arranque
sleep 2

echo "[2/2] Abriendo la Suite en tu navegador principal..."
open "http://localhost:5175"

echo ""
echo "=========================================================="
echo "¡Listo! La Suite Creativa está activa en tu Mac."
echo "Mantén esta ventana del Terminal abierta mientras trabajes."
echo "Para cerrar el estudio, simplemente cierra esta ventana negra."
echo "=========================================================="

while true; do
  sleep 1
done
