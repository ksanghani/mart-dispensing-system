process.env.NODE_CONFIG_DIR = `${__dirname}/config`;
process.env.NODE_ENV = require('./package.json').env || '';

const debug                           = require('debug')('fixture:sds');
const { app, BrowserWindow, ipcMain } = require('electron');

let win = null;

app.commandLine.appendSwitch('touch-events', 'enabled');

app.on('ready', () => {
    win = new BrowserWindow({
        kiosk: !process.env.DEV
    });

    if (process.env.DEV) {
        win.loadURL('http://localhost:8080');
        win.toggleDevTools();
    } else {
        win.loadURL(`file://${__dirname}/app/index.html`);
        global.__dirname = __dirname;
    }

    win.on('closed', () => {
        win = null;
        app.quit();
    });
});
