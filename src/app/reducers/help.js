export const REQUEST_HELP = 'REQUEST_HELP';
export const CANCEL_HELP = 'CANCEL_HELP';

export function requestHelp () {
    return {
        type: REQUEST_HELP
    };
}

export function cancelHelp () {
    return {
        type: CANCEL_HELP
    };
}

const ACTION_HANDLERS = {
    [REQUEST_HELP]: (state) => {
        return {
            ...state,
            helpActive: true
        };
    },
    [CANCEL_HELP]: (state) => {
        return {
            ...state,
            helpActive: false
        };
    },
};

const initialState = {
    helpActive: false
};

export default function reducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
