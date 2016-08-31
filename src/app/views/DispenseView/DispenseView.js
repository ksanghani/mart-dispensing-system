import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classes from './DispenseView.scss';
import Button from 'components/Button';
import TextBlock from 'components/TextBlock';


export default class DispenseView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <div className={classes.view}>
                    <TextBlock headline="Ready to dispense 1 item">
                        Each item dispenses separately
                    </TextBlock>
                    <div className={classes['button-container']}>
                        <Button label="Dispense" onClick={() => { browserHistory.push('/dispensing'); }} />
                    </div>
                </div>
            </div>
        );
    }
}
