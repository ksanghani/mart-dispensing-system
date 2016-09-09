import React, { Component, PropTypes } from 'react';
import classes from './Button.scss';

export class Button extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        size: PropTypes.string,
        hidden: PropTypes.bool,
        style: PropTypes.object
    };

    render () {
        const size = this.props.size || '';
        const style = this.props.style;

        return (
            <button
                onClick={this.props.onClick}
                style={ style }
                className={`${classes.layout} ${size}`}>
                {this.props.label}
            </button>
        );
    }
}

export default Button;
