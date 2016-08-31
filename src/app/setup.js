// This file is necessary for webpack to set the correct public path at runtime
// as fixture setup is an electron dependency to fixture itself. What happens
// here? We read the __dirname off the main process and set the webpack
// publicPath to match the app folder (for assets such as images and fonts).
// Without it, webpack is unable to locate the assets after compile.

import { remote } from 'electron';
const __dirname = remote.getGlobal('__dirname');

if (__dirname) __webpack_public_path__ = `${__dirname}/app/`; // eslint-disable-line no-undef
