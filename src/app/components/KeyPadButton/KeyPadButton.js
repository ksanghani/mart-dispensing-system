import React, { Component, PropTypes } from 'react';
import classes from './KeyPadButton.scss';

export class KeyPadButton extends Component {
    static propTypes = {
        pinButtonNumber: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired
    }

    render () {
        const { pinButtonNumber, onClick } = this.props;

        return (
            <button
                onClick={onClick}
                className={classes.button}>
                {pinButtonNumber}
            </button>
        );
    }

}

export default KeyPadButton;
