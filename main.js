console.log("Main process working");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");



function createWindow() {
    let win;
    win = new BrowserWindow({
        height: 150,
        width: 500,
        maxHeight: 150,
        maxWidth: 500,
        minHeight: 150,
        minHeight: 500,
        fullscreenable: false,
        frame: false,
        show: false,
        focusable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile(path.join(__dirname, 'index.html'));
    //win.webContents.openDevTools();

    win.once('ready-to-show', () => {
        win.show();
    })

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);