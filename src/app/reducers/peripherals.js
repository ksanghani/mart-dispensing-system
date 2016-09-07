import { push } from 'react-router-redux';
import { reset } from 'timeout';

export const OBJECT_DETECTED = 'OBJECT_DETECTED';
export const BARCODE_SCANNED = 'BARCODE_SCANNED';

export function scanBarcode (scannedBarcode) {
    return (dispatch) => {
        dispatch(reset());

        switch (scannedBarcode) {
            case '11111111':
                dispatch(push('order-not-found'));
                break;
            case '22222222':
                dispatch(push('order-fulfilled'));
                break;
            default:
                dispatch(push('/pinpad'));
                break;
        }

        dispatch({
            type: BARCODE_SCANNED,
            scannedBarcode
        });
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
