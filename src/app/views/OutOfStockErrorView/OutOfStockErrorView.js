import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classes from './OutOfStockErrorView.scss';
import Button from 'components/Button';
import Link from 'components/Link';
import TextBlock from 'components/TextBlock';


export default class OutOfStockErrorView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <div className={classes.view}>
                    <TextBlock headline="2 Items are out of stock">
                        Sorry for the inconvenience, please proceed <br /> to the service lounge for assistance.
                    </TextBlock>
                    <div className={classes['button-container']}>
                        <Button label="View Direction" onClick={() => { browserHistory.push('/pinpad'); }} />
                    </div>
                    <div className={classes['link-container']}>
                        <Link label="Done" onClick={() => {}}/>
                    </div>
                </div>
            </div>
        );
    }
}
