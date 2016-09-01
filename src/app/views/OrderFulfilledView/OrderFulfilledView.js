import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classes from './OrderFulfilledView.scss';
import Button from 'components/Button';
import TextBlock from 'components/TextBlock';


export default class OrderFulfilledView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <div className={classes.view}>
                    <TextBlock textSpacing="large" headline="Order Fulfilled">
                        Our system shows that have picked up all items on this order. <br /> Please make sure you scan the correct receipt.
                    </TextBlock>
                    <div className={classes['button-container']}>
                        <Button label="Help" onClick={() => { browserHistory.push('/'); }} />
                    </div>
                </div>
            </div>
        );
    }
}
