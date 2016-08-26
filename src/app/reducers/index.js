import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import peripherals from './peripherals';
import pinpad from './pinpad';

export default combineReducers({
    peripherals,
    pinpad,
    routing
});
