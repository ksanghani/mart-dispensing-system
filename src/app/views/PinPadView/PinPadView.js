import React, { Component, PropTypes } from 'react';
import classes from './PinPadView.scss';
import PinPad from 'containers/PinPad';

export class PinPadView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <h1>Enter last 4 digits of your mobile number</h1>
                <PinPad />
            </div>
        );
    }
}

export default PinPadView;
