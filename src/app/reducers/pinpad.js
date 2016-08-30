import { push } from 'react-router-redux';
import { send } from 'redux-electron-ipc';

export const NUMBER_PRESSED = 'NUMBER_PRESSED';
export const RESET_PIN_NUMBER = 'RESET_PIN_NUMBER';
export const CORRECT_PIN = 'CORRECT_PIN';
export const INCORRECT_PIN = 'INCORRECT_PIN';

const validPins = [
    '0333', '0332', '0331',
    '0353', '0352', '0351',
    '0363', '0362', '0361',
    '0373', '0372', '0371',
    '0213', '0212', '0211',
    '0233', '0232', '0231',
    '0253', '0252', '0251',
    '0263', '0262', '0261',
    '0273', '0272', '0271'
];

export function pressNumber (number) {
    return (dispatch, getState)  => {
        dispatch({
            type: NUMBER_PRESSED,
            number
        });

        const pin = getState().pinpad.pin;

        if (pin.length === 4) {
            if (validPins.includes(pin)) {
                dispatch({
                    type: CORRECT_PIN
                });

                dispatch(push('/dispense'));

                dispatch(send('sds:dispense:item', pin[1], pin[2], pin[3]));
            } else {
                dispatch({
                    type: INCORRECT_PIN
                });
            }

            dispatch({
                type: RESET_PIN_NUMBER
            });
        }
    };
}

const ACTION_HANDLERS = {
    [NUMBER_PRESSED]: (state, action) => {
        return {
            ...state,
            pin: state.pin + action.number,
            error: ''
        };
    },
    [RESET_PIN_NUMBER]: (state) => {
        return {
            ...state,
            pin: ''
        };
    },
    [CORRECT_PIN]: (state) => {
        return {
            ...state,
            error: ''
        };
    },
    [INCORRECT_PIN]: (state) => {
        return {
            ...state,
            error: state.pin
        };
    }
};

const initialState = {
    pin: '',
    error: ''
};

export default function reducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
