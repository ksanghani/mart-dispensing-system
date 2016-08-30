import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classes from './UnableToDispenseView.scss';
import Button from 'components/Button';
import Link from 'components/Link';
import TextBlock from 'components/TextBlock';


export default class UnableToDispenseView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <div className={classes.view}>
                    <TextBlock headline="Unable To Dispense">
                        Sorry we&rsquo;re having an issue dispensing the item. <br /> Please proceed to the service lounge for assistance.
                    </TextBlock>
                    <div className={classes['link-container']}>
                        <Link label="View Direction" onClick={() => {}}/>
                    </div>
                    <div className={classes['button-container']}>
                        <Button label="Done" onClick={() => { browserHistory.push('/pinpad'); }} />
                    </div>
                </div>
            </div>
        );
    }
}
