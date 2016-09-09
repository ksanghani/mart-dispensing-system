import React, { Component, PropTypes } from 'react';
import classes from './OrderFulfilledView.scss';
import HelpButton from 'containers/HelpButton';
import TextBlock from 'components/TextBlock';


export default class OrderFulfilledView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <TextBlock textSpacing="large" headline="Order Fulfilled">
                    Our system shows that have picked up all items on this order. <br /> Please make sure you scan the correct receipt.
                </TextBlock>
                <HelpButton label="Help" style={{ marginTop: '174px' }} />
            </div>
        );
    }
}
