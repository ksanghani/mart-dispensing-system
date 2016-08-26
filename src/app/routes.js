import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import HomeView from 'views/HomeView';
import OrderFulfilledView from 'views/OrderFulfilledView';
import OrderNotFoundView from 'views/OrderNotFoundView';
import PinPadView from 'views/PinPadView';
import ReceiptNotFoundView from 'views/ReceiptNotFoundView';
import ThanksView from 'views/ThanksView';
import UnableToDispenseView from 'views/UnableToDispenseView';

export default (
    <Route path="/" component={CoreLayout}>
        <IndexRoute component={PinPadView} />
        <Route path="receipt-not-found" component={ReceiptNotFoundView} />
        <Route path="order-not-found" component={OrderNotFoundView} />
        <Route path="order-fulfilled" component={OrderFulfilledView} />
        <Route path="thanks" component={ThanksView} />
        <Route path="unable-to-dispense" component={UnableToDispenseView} />
        <Route path="pinpad" component={PinPadView} />
    </Route>
);
