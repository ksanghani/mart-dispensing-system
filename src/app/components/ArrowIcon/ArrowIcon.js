import React, { Component, PropTypes } from 'react';
import classes from './ArrowIcon.scss';

export class ArrowIcon extends Component {
    static propTypes = {
        size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']).isRequired,
        box: PropTypes.bool
    };

    render () {
        return (
            <div className={`${this.props.box ? classes.box : null}`}>
                <i className={`${classes.layout} ${classes.snap} zmdi zmdi-arrow-right zmdi-hc-${this.props.size}`} />
            </div>
        );
    }
}

export default ArrowIcon;
