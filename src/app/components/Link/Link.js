import React, { Component, PropTypes } from 'react';
import classes from './Link.scss';

export class Link extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        size: PropTypes.string
    };

    render () {
        const size = this.props.size || '';

        return (
            <button
                onClick={this.props.onClick}
                className={`${classes.layout} ${size}`}>
                {this.props.label}
            </button>
        );
    }
}

export default Link;
