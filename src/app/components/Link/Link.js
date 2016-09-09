import React, { Component, PropTypes } from 'react';
import classes from './Link.scss';

export class Link extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        size: PropTypes.string,
        style: PropTypes.object
    };

    render () {
        const size = this.props.size || '';
        const style = this.props.style;

        return (
            <button
                onClick={this.props.onClick}
                style={ style }
                className={`${classes.layout} ${classes[this.props.size]}`}>
                {this.props.label}
            </button>
        );
    }
}

export default Link;
