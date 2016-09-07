import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import help from './help';
import peripherals from './peripherals';
import pinpad from './pinpad';
import session from './session';

export default combineReducers({
    help,
    peripherals,
    pinpad,
    routing,
    session
});
