import { push } from 'react-router-redux';
import { reset } from 'timeout';
import { send } from 'redux-electron-ipc';
import validator from 'validator';

export const BARCODE_SCANNED = 'BARCODE_SCANNED';

export function scanBarcode (scannedBarcode) {
    return (dispatch) => {
        dispatch(reset());

        if (validator.isUUID(scannedBarcode, 4)) {
            dispatch(send('order:scan', scannedBarcode));

            dispatch({
                type: BARCODE_SCANNED,
                scannedBarcode
            });
        }
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
