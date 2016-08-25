import { push } from 'react-router-redux';
import { reset } from 'timeout';

export const OBJECT_DETECTED = 'OBJECT_DETECTED';
export const BARCODE_SCANNED = 'BARCODE_SCANNED';

export function senseProximity (isObjectInRange) {
    return (dispatch, getState)  => {
        if (isObjectInRange)
            dispatch(reset());

        if (getState().routing.locationBeforeTransitions.pathname === '/')
            dispatch(push('/welcome'));

        dispatch({
            type: OBJECT_DETECTED,
            isObjectInRange
        });
    };
}

export function scanBarcode (scannedBarcode) {
    return (dispatch) => {
        dispatch(reset());

        if (scannedBarcode === '12341234') {
            dispatch(push('/receipt-not-found'));
        }

        dispatch({
            type: BARCODE_SCANNED,
            scannedBarcode
        });

        // dispatch(push('/pinpad'));
    };
}

export function dispenseItem (wasDispensed) {
    return (dispatch) => {
        dispatch(reset());

        if (wasDispensed) {
            dispatch(push('/thanks'));
        } else {
            dispatch(push('/dispensing-error'));
        }
    };
}

const ACTION_HANDLERS = {
    [OBJECT_DETECTED]: (state, action) => {
        return {
            ...state,
            isObjectInRange: action.isObjectInRange
        };
    },
    [BARCODE_SCANNED]: (state, action) => {
        return {
            ...state,
            scannedBarcode: action.scannedBarcode
        };
    }
};

const initialState = {
    isObjectInRange: null,
    scannedBarcode: null
};

export default function reducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
