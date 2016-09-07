import { push } from 'react-router-redux';

export const ORDER_FOUND   = 'ORDER_FOUND';
export const ORDER_FAILURE = 'ORDER_FAILURE';

export const orderFound = (order) => dispatch => {
    dispatch(push('/pinpad'));

    dispatch({
        type: ORDER_FOUND,
        order
    });
};

export const orderNotFound = () => dispatch => {
    dispatch(push('/order-not-found'));

    dispatch({
        type: ORDER_FAILURE
    });
};

export const orderAlreadyFulfilled = () => dispatch => {
    dispatch(push('/order-already-fulfilled'));

    dispatch({
        type: ORDER_FAILURE
    });
};

const ACTION_HANDLERS = {
    [ORDER_FOUND]: (state, action) => ({
        ...state,
        order: action.order
    }),
    [ORDER_FAILURE]: (state) => ({
        ...state,
        order: {}
    })
};

const initialState = {
    order: {}
};

export default function reducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
