const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

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

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
