import React, { Component } from 'react';
import classes from './Logo.scss';
import ZapposLogo from 'assets/zappos-logo.png';
import { remote } from 'electron';

const dirname = remote.getGlobal('dirname') || '';

export class Logo extends Component {
    render () {
        return (
            <img
                className={classes.layout}
                src={`${dirname && `${dirname}/app`}/${ZapposLogo}`} />
        );
    }
}

export default Logo;
