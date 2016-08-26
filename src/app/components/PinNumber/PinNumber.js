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
        return (
            <input type="password" readOnly className={`${this.props.error ? classes.shake : ''} ${classes.pin}`} value={this.props.pin} />
        );
    }
}

export default PinNumber;
