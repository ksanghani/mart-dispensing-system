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

    static defaultProps = {
        style: {}
    }

    render () {
        const size = this.props.size || '';

        return (
            <button style={this.props.style}
                onClick={this.props.onClick}
                className={`${classes.layout} ${size}`}>
                {this.props.label}
            </button>
        );
    }
}

export default Button;
