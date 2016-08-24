import { push } from 'react-router-redux';

const TIMEOUT                 = '@@timeout/RESET';
const LOCATION_CHANGE         = '@@router/LOCATION_CHANGE';
const UI_TIMEOUT_MILLISECONDS = 1 * 3000 * 60;

let timeoutId = null;

export const reset = () => ({ type: TIMEOUT });

export const timeoutMiddleware = ({ dispatch }) => next => action => {
    const { type, payload } = action;

    if (type === TIMEOUT || type === LOCATION_CHANGE && payload.pathname !== '/') {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            dispatch(push('/'));
        }, UI_TIMEOUT_MILLISECONDS);
    }

    return next(action);
};
