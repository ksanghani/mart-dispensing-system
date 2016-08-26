import React, { Component, PropTypes } from 'react';
import classes from './Error.scss';

export class Error extends Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        show: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string]).isRequired
    }

    render () {
        const { show, message } = this.props;

        return (
            <div className={classes.container}>
                <p className={`${show && classes.show} ${classes.message}`}>
                    {message}
                </p>
            </div>
        );
    }
}

export default Error;
