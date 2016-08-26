import React, { Component, PropTypes } from 'react';
import classes from './KeyPad.scss';
import KeyPadButton from 'components/KeyPadButton';

export class KeyPad extends Component {
    static propTypes = {
        press: PropTypes.func.isRequired
    };

    render () {
        return (
            <div className={classes.layout}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number =>
                    <KeyPadButton
                        key={number}
                        onClick={() => this.props.press(number)}
                        pinButtonNumber={number} />)}
            </div>
        );
    }
}

export default KeyPad;
