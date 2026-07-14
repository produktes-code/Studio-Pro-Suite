const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const os = require('os');

let backendProcess = null;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1440,
        height: 900,
        backgroundColor: '#09090b', // Studio Pro Suite bg color
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        },
        title: 'Studio Pro AI Suite 3.0',
    });

    const startUrl = process.env.DEV_SERVER_URL || `file://${path.join(__dirname, 'dist', 'index.html')}`;
    mainWindow.loadURL(startUrl);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    // Start Python Backend
    let backendPath;
    const backendExecutableName = process.platform === 'win32' ? 'studio_pro_backend.exe' : 'studio_pro_backend';
    if (app.isPackaged) {
        backendPath = path.join(process.resourcesPath, 'backend-dist', backendExecutableName);
    } else {
        backendPath = path.join(__dirname, 'backend-dist', backendExecutableName);
    }
    
    console.log("Starting backend at:", backendPath);
    try {
        backendProcess = spawn(backendPath, { stdio: 'pipe' });
        backendProcess.stdout.on('data', (data) => console.log(`Backend: ${data}`));
        backendProcess.stderr.on('data', (data) => console.error(`Backend Error: ${data}`));
        backendProcess.on('error', (err) => {
            const { dialog } = require('electron');
            dialog.showErrorBox('Servicio backend no disponible', `El backend falló al iniciar: ${err.message}`);
        });
    } catch (err) {
        console.error("Failed to start backend:", err);
    }

    createWindow();

    const checkHealth = async (retries = 10) => {
        try {
            const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)).catch(() => require('http').get(...args)); // Using http or fetch
            // Basic http get for health check to avoid fetch dependency issues in CommonJS
            return new Promise((resolve, reject) => {
                const http = require('http');
                const req = http.get('http://127.0.0.1:8001/health', (res) => {
                    if (res.statusCode === 200) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
                req.on('error', () => resolve(false));
                req.end();
            });
        } catch (e) {
            return false;
        }
    };

    const waitForBackend = async () => {
        let isHealthy = false;
        for (let i = 0; i < 15; i++) {
            isHealthy = await checkHealth();
            if (isHealthy) break;
            await new Promise(res => setTimeout(res, 1000));
        }
        if (!isHealthy) {
            if (mainWindow) {
                mainWindow.loadURL('data:text/html;charset=utf-8,<html><body style="background-color:#09090b;color:white;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;"><h1>Servicio backend no disponible</h1><p>No se pudo conectar al motor de Python.</p></body></html>');
            }
        }
    };
    
    waitForBackend();
});

app.on('window-all-closed', () => {
    if (backendProcess) {
        backendProcess.kill();
    }
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('quit', () => {
    if (backendProcess) {
        backendProcess.kill();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
