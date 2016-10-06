import { send } from 'redux-electron-ipc';

export const request = () => send('help');

export default {
    request
};
