import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classes from './DispenseView.scss';
import Button from 'components/Button';
import ItemCount from 'components/ItemCount';
import Title from 'components/Title';


export default class DispenseView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <div className={classes.view}>
                    <Title>Each item dispenses separately</Title>
                    <div className={classes['item-count-container']}>
                        <ItemCount />
                    </div>
                    <div className={classes['button-container']}>
                        <Button label="Dispense Item" onClick={() => { browserHistory.push('/dispensing'); }} />
                    </div>
                </div>
            </div>
        );
    }
}
