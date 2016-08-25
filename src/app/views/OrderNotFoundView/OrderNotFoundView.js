import React, { Component, PropTypes } from 'react';
import classes from './OrderNotFoundView.scss';
import Button from 'components/Button';
import TextBlock from 'components/TextBlock';


export default class OrderNotFoundView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <div className={classes.view}>
                    <TextBlock headline="Order Not Found">
                        Sorry we can&rsquo;t find your order. Please make sure <br /> you&rsquo;re scanning a WithMe receipt for express pickup at this location.
                    </TextBlock>
                    <div className={classes['button-container']}>
                        <Button label="Help" onClick={() => {}} />
                    </div>
                </div>
            </div>
        );
    }
}
