import React from 'react';
import { Route, IndexRoute } from 'react-router';
import DoorErrorView from 'views/DoorErrorView';
import CoreLayout from 'layouts/CoreLayout';
import DispensingView from 'views/DispensingView';
import HomeView from 'views/HomeView';
import MechanicalErrorView from 'views/MechanicalErrorView';
import OutOfStockErrorView from 'views/OutOfStockErrorView';
import OrderFulfilledView from 'views/OrderFulfilledView';
import OrderNotFoundView from 'views/OrderNotFoundView';
import PinPadView from 'views/PinPadView';
import RetrieveItemView from 'views/RetrieveItemView';
import ThanksView from 'views/ThanksView';
import UnableToDispenseView from 'views/UnableToDispenseView';

export default (
    <Route path="/" component={CoreLayout}>
        <IndexRoute component={HomeView} />
        <Route path="order-not-found" component={OrderNotFoundView} />
        <Route path="order-fulfilled" component={OrderFulfilledView} />
        <Route path="thanks" component={ThanksView} />
        <Route path="unable-to-dispense" component={UnableToDispenseView} />
        <Route path="pinpad" component={PinPadView} />
        <Route path="dispensing" component={DispensingView} />
        <Route path="retrieve-item" component={RetrieveItemView} />
        <Route path="order-not-found" component={OrderNotFoundView} />
        <Route path="door-error" component={DoorErrorView} />
        <Route path="out-of-stock" component={OutOfStockErrorView} />
        <Route path="mechanical-error" component={MechanicalErrorView} />
    </Route>
);
