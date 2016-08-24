process.env.NODE_CONFIG_DIR = `${__dirname}/config`;
process.env.NODE_ENV = require('./package.json').env || '';

const PeripheralClient = require('wm-peripheral-client');
const SdsClient        = require('wm-sds-client');
const debug            = require('debug')('fixture:sds');
const electron         = require('electron');
const app              = electron.app;
const BrowserWindow    = electron.BrowserWindow;
const ipc              = electron.ipcMain;

const peripherals = new PeripheralClient({
    proximity: true,
    barcode: true
});

const sds = new SdsClient({
    connectionString: 'http://localhost:5555/srs'
});

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
        global.dirname = __dirname;
    }

    peripherals.on('proximity:in-range', inRange =>
        win.webContents.send('sensors:proximity:in-range', inRange));

    peripherals.on('barcode:data', barcode =>
        win.webContents.send('sensors:barcode:data', barcode));

    peripherals.connect();

    sds.on('dispense:success', () =>
        win.webContents.send('sds:dispense:success'));

    sds.on('dispense:failure', () =>
        win.webContents.send('sds:dispense:failure'));

    win.on('closed', () => {
        win = null;
        app.quit();
    });
});

ipc.on('sds:dispense:item', (event, door, shelf, divider) => {
    debug('Request to dispense', door, shelf, divider);

    sds.dispense(door, shelf, divider);
});
