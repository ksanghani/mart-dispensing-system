export const TOGGLE_HELP  = 'TOGGLE_HELP';
export const REQUEST_HELP = 'REQUEST_HELP';
export const RECEIVE_HELP = 'RECEIVE_HELP';
export const CANCEL_HELP  = 'CANCEL_HELP';

export const toggleHelp = () => ({
    type: TOGGLE_HELP
});

export const requestHelp = () => ({
    type: REQUEST_HELP
});

export const receiveHelp = (helpRequest) => ({
    type: RECEIVE_HELP,
    helpRequest
});

export const cancelHelp = () => ({
    type: CANCEL_HELP
});

const ACTION_HANDLERS = {
    [REQUEST_HELP]: (state) => ({
        ...state,
        isRequestingHelp: true
    }),
    [RECEIVE_HELP]: (state, action) => ({
        ...state,
        isRequestingHelp: false,
        helpRequestId: action.helpRequestId
    }),
    [CANCEL_HELP]: (state) => ({
        ...state,
        isRequestingHelp: false
    }),
    [TOGGLE_HELP]: (state) => ({
        ...state,
        showHelpPanel: !state.showHelpPanel
    })
};

const initialState = {
    helpRequest: {},
    showHelpPanel: false,
    isRequestingHelp: false
};

export default function reducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
