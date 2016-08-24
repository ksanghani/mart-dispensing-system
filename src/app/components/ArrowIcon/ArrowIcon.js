import React, { Component, PropTypes } from 'react';
import classes from './ArrowIcon.scss';

export class ArrowIcon extends Component {
    static propTypes = {
        size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']).isRequired,
        box: PropTypes.bool
    };

    render () {
        return (
            <i className={`${this.props.box ? classes.box : null} ${classes.layout} zmdi zmdi-arrow-right zmdi-hc-${this.props.size}`} />
        );
    }
}

export default ArrowIcon;
