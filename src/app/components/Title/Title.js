import React, { Component, PropTypes } from 'react';
import classes from './Title.scss';

export class Title extends Component {

    static propTypes = {
        children: PropTypes.string.isRequired,
        size: PropTypes.string,
        letterCase: PropTypes.string,
    };

    render () {
        const size = this.props.size || '';
        const letterCase = this.props.letterCase || '';

        return (
            <h1 className={`${classes.layout} ${classes[size]} ${classes[letterCase]}`}>
                {this.props.children}
            </h1>
        );
    }
}

export default Title;
