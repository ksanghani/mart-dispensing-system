import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import peripherals from './peripherals';

export default combineReducers({
    peripherals,
    routing
});
