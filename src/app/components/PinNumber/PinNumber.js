import React, { Component, PropTypes } from 'react';
import classes from './PinNumber.scss';

export class PinNumber extends Component {

    constructor (props) {
        super(props);
    }

    static propTypes = {
        pin: PropTypes.string.isRequired,
        error: PropTypes.bool
    }

    render () {
        const { pin, error } = this.props;

        return (
            <div className={`${error ? classes.shake : ''} ${classes.layout}`}>
                <span className={`${(pin.length > 0) ? classes.filled : ''}`}></span>
                <span className={`${(pin.length > 1) ? classes.filled : ''}`}></span>
                <span className={`${(pin.length > 2) ? classes.filled : ''}`}></span>
                <span className={`${(pin.length > 3) ? classes.filled : ''}`}></span>
            </div>
        );
    }
}

export default PinNumber;
