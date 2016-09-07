import { scanBarcode, dispenseItem } from 'reducers/peripherals';

export default {
    'peripherals:barcode:data': (event, barcode) => scanBarcode(barcode),
    'sds:dispense:success': () => dispenseItem(true),
    'sds:dispense:failure': () => dispenseItem(false)
};
