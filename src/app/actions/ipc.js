import { scanBarcode, dispenseItem } from 'reducers/peripherals';

export default {
    'sensors:barcode:data': (event, barcode) => scanBarcode(barcode),
    'sds:dispense:success': () => dispenseItem(true),
    'sds:dispense:failure': () => dispenseItem(false)
};
