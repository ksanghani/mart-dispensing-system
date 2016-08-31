import React from 'react';
import { Route, IndexRoute } from 'react-router';
import DoorErrorView from 'views/DoorErrorView';
import CoreLayout from 'layouts/CoreLayout';
import DispenseView from 'views/DispenseView';
import DispensingView from 'views/DispensingView';
import HomeView from 'views/HomeView';
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
        <Route path="dispense" component={DispenseView} />
        <Route path="dispensing" component={DispensingView} />
        <Route path="retrieve-item" component={RetrieveItemView} />
        <Route path="order-not-found" component={OrderNotFoundView} />
        <Route path="door-error" component={DoorErrorView} />
    </Route>
);
