import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classes from './DoorErrorView.scss';
import Button from 'components/Button';
import Link from 'components/Link';
import Title from 'components/Title';


export default class ChuteDoorErrorView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <div className={classes.view}>
                    <Title size="medium">You haven&rsquo;t taken out the item</Title>
                    <div className={classes['button-container']}>
                        <Button label="Re-open door" onClick={() => { browserHistory.push('/pinpad'); }} />
                    </div>
                    <Title size="small">If this is not your item, please proceed to the service lounge for assistance.</Title>

                    <div className={classes['link-container']}>
                        <Link label="View Direction" onClick={() => {}}/>
                    </div>
                </div>
            </div>
        );
    }
}
