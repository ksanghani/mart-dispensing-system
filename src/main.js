process.env.NODE_CONFIG_DIR = `${__dirname}/config`;
process.env.NODE_ENV        = require('./package.json').env || '';

const debug       = require('debug')('fixture:sds');
const config      = require('config');
const Fixture     = require('wm-fixture');
const { ipcMain } = require('electron');

debug(`Environment: ${process.env.NODE_ENV}`);

const fixture = new Fixture(config);

fixture.on('ready', () => {
    ipcMain.on('order:scan', (event, orderId) => {
        fixture.cloud.request('get', ['orders', orderId])
            .then((order) => {
                event.sender.send('order:found', order);
            })
            .catch(err => {
                switch (err.statusCode) {
                    case 404:
                        event.sender.send('order:not-found');
                        break;
                    default:
                        debug(err);
                }
            });
    });
});
