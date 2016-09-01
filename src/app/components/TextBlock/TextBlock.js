import React, { Component, PropTypes } from 'react';
import classes from './TextBlock.scss';
import Title from 'components/Title';

export class TextBlock extends Component {
    static propTypes = {
        headline: PropTypes.string.isRequired,
        containerSpacing: PropTypes.string,
        children: PropTypes.node
    };

    render () {
        return (
            <div className={classes.layout}>
                <Title size="large" letterCase="uppercase">{this.props.headline}</Title>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default TextBlock;
