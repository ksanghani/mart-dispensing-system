import React, { Component, PropTypes } from 'react';
import classes from './PinNumber.scss';

export class PinNumber extends Component {

    constructor (props) {
        super(props);
    }

    static propTypes = {
        pin: PropTypes.string.isRequired,
        error: PropTypes.string
    }

    render () {
        const { pin, error } = this.props;

        return (
            <div className={`${error ? classes.shake : ''} ${classes.layout}`}>
                <span className={`${(pin.length > 0 && !error) ? classes.filled : ''}`}></span>
                <span className={`${(pin.length > 1 && !error) ? classes.filled : ''}`}></span>
                <span className={`${(pin.length > 2 && !error) ? classes.filled : ''}`}></span>
                <span className={`${(pin.length > 3 && !error) ? classes.filled : ''}`}></span>
            </div>
        );
    }
}

export default PinNumber;
