import { senseProximity, scanBarcode, dispenseItem } from 'reducers/peripherals';

export default {
    'sensors:proximity:in-range': (event, inRange) => senseProximity(inRange),
    'sensors:barcode:data': (event, barcode) => scanBarcode(barcode),
    'sds:dispense:success': () => dispenseItem(true),
    'sds:dispense:failure': () => dispenseItem(false)
};
