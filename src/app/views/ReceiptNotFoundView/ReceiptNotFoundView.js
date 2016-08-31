import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classes from './ReceiptNotFoundView.scss';
import Button from 'components/Button';
import TextBlock from 'components/TextBlock';


export default class ReceiptNotFoundView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <div className={classes.view}>
                    <TextBlock headline="Receipt Not Found">
                        Sorry we don&rsquo;t recognize this receipt. Please make sure <br /> you&rsquo;re scanning a WithMe receipt for express pickup at this location.
                    </TextBlock>
                    <div className={classes['button-container']}>
                        <Button label="Help" onClick={() => { browserHistory.push('/'); }} />
                    </div>
                </div>
            </div>
        );
    }
}
