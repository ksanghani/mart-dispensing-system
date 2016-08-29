import React, { Component, PropTypes } from 'react';
import classes from './TextBlock.scss';
import Title from 'components/Title';

export class TextBlock extends Component {
    static propTypes = {
        headline: PropTypes.string.isRequired,
        children: PropTypes.node
    };

    render () {
        return (
            <div className={classes.layout}>
                <div className={classes['title-container']}>
                    <Title size="large" letterCase="uppercase">{this.props.headline}</Title>
                </div>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default TextBlock;
