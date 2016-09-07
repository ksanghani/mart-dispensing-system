import React, { Component } from 'react';
import classes from './Logo.scss';
import ZapposLogo from 'assets/zappos-logo.png';

export class Logo extends Component {
    render () {
        return (
            <img
                className={classes.layout}
                src={ZapposLogo} />
        );
    }
}

export default Logo;
