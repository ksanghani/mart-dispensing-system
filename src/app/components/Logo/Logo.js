import React, { Component, PropTypes } from 'react';
import classes from './Logo.scss';
import ZapposLogo from 'assets/zappos-logo.png';

export class Logo extends Component {
    static propTypes = {
        style: PropTypes.object
    }

    render () {
        const { style } = this.props;
        return (
            <img
                className={classes.layout}
                style={style}
                src={ZapposLogo} />
        );
    }
}

export default Logo;
