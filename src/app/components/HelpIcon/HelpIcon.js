import React, { Component, PropTypes } from 'react';
import classes from './HelpIcon.scss';

export class HelpIcon extends Component {
    static propTypes = {
        size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']).isRequired,
        box: PropTypes.bool
    };

    render () {
        return (
            <i className={`${this.props.box && classes.box} zmdi zmdi-help-outline zmdi-hc-${this.props.size}`} />
        );
    }
}

export default HelpIcon;
