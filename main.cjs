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
            nodeIntegration: true,
            contextIsolation: false
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
    if (app.isPackaged) {
        backendPath = path.join(process.resourcesPath, 'backend-dist', 'studio_pro_backend');
    } else {
        backendPath = path.join(__dirname, 'backend-dist', 'studio_pro_backend');
    }
    
    console.log("Starting backend at:", backendPath);
    try {
        backendProcess = spawn(backendPath, { stdio: 'pipe' });
        backendProcess.stdout.on('data', (data) => console.log(`Backend: ${data}`));
        backendProcess.stderr.on('data', (data) => console.error(`Backend Error: ${data}`));
    } catch (err) {
        console.error("Failed to start backend:", err);
    }

    createWindow();
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
