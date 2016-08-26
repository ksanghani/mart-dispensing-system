import React, { Component, PropTypes } from 'react';
import classes from './PinPadView.scss';
import PinPad from 'containers/PinPad';

export class PinPadView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <div className={classes['pinpad-message-container']}>
                    <h1>Enter last 4 digits <br /> of your mobile number</h1>
                </div>
                <div className={classes['pinpad-container']}>
                    <PinPad />
                </div>
            </div>
        );
    }
}

export default PinPadView;
