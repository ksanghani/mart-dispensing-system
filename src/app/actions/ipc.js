import { scanBarcode, dispenseItem } from 'reducers/peripherals';
import { orderFound, orderNotFound, orderAlreadyFulfilled } from 'reducers/session';

export default {
    'peripherals:barcode:data': (event, barcode) => scanBarcode(barcode),
    'order:found': (event, order) => orderFound(order),
    'order:not-found': () => orderNotFound(),
    'order:already-fulfilled': () => orderAlreadyFulfilled(),
    'sds:dispense:success': () => dispenseItem(true),
    'sds:dispense:failure': () => dispenseItem(false)
};
