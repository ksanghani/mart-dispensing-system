process.env.NODE_CONFIG_DIR = `${__dirname}/config`;
process.env.NODE_ENV        = require('./package.json').env || '';

const debug   = require('debug')('fixture:sds');
const config  = require('config');
const Fixture = require('wm-fixture');

debug(`Environment: ${process.env.NODE_ENV}`);

const fixture = new Fixture(config);

fixture.on('ready', () => {
    if (process.env.DEV) {
        fixture.window.loadURL('http://localhost:8080');
        fixture.window.toggleDevTools();
    } else {
        fixture.window.loadURL(`file://${__dirname}/app/index.html`);
        global.__dirname = __dirname;
    }
});
