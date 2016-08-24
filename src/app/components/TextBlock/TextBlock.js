import React, { Component, PropTypes } from 'react';
import classes from './TextBlock.scss';

export class TextBlock extends Component {
    static propTypes = {
        headline: PropTypes.string.isRequired,
        children: PropTypes.node
    };

    render () {
        return (
            <div className={classes.layout}>
                <div className={classes.headline}>{this.props.headline}</div>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default TextBlock;
