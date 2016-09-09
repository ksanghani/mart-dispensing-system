import React, { Component, PropTypes } from 'react';
import classes from './OrderNotFoundView.scss';
import HelpButton from 'containers/HelpButton';
import TextBlock from 'components/TextBlock';


export default class OrderNotFoundView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <TextBlock textSpacing="large" headline="Order Not Found">
                    Sorry we can&rsquo;t find your order. Please make sure <br /> you&rsquo;re scanning a WithMe receipt for express pickup at this location.
                </TextBlock>
                <HelpButton label="Help" style={{ marginTop: '174px' }}/>
            </div>
        );
    }
}
