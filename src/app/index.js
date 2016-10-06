import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux';
import 'setup'; // see file for why this is necessary
import logger from 'redux-logger';
import createIpc from 'redux-electron-ipc';
import { render } from 'react-dom';
import reducers from 'reducers';
import routes from './routes';
import { timeoutMiddleware } from './timeout';
import ipcEvents from 'actions/ipc';
import { scanBarcode, dispenseItem } from 'reducers/peripherals';
import { orderFound, orderNotFound, orderAlreadyFulfilled } from 'reducers/session';
import createSagaMiddleware from 'redux-saga';
import rootSagas from 'sagas';

const router         = routerMiddleware(browserHistory);
const ipc            = createIpc(ipcEvents);
const sagaMiddleware = createSagaMiddleware();

let middleware = [timeoutMiddleware, router, thunk, sagaMiddleware, ipc];

if (process.env.NODE_ENV !== 'production')
    middleware = [...middleware, logger()];

const store = createStore(reducers, applyMiddleware(...middleware));
const history = syncHistoryWithStore(browserHistory, store);

rootSagas.forEach(saga => sagaMiddleware.run(saga));

if (process.env.NODE_ENV !== 'production') {
    window.scanBarcode = (barcode) => store.dispatch(scanBarcode(barcode));
    window.orderFound = (order) => store.dispatch(orderFound(order));
    window.orderNotFound = () => store.dispatch(orderNotFound());
    window.orderAlreadyFulfilled = () => store.dispatch(orderAlreadyFulfilled());
    window.dispenseItem = (wasDispensed) => store.dispatch(dispenseItem(wasDispensed));
}

store.dispatch(push('/'));

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
