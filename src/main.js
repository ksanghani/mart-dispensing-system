process.env.NODE_CONFIG_DIR = `${__dirname}/config`;
process.env.NODE_ENV        = require('./package.json').env || '';

const debug   = require('debug')('fixture:sds');
const config  = require('config');
const Fixture = require('wm-fixture');

debug(`Environment: ${process.env.NODE_ENV}`);

new Fixture(config);
