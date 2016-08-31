import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classes from './DispensingView.scss';
import Button from 'components/Button';
import Loader from 'components/Loader';
import ItemCount from 'components/ItemCount';
import Title from 'components/Title';


export default class DispensingView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <Title letterCase="uppercase">Dispensing</Title>
                <div className={classes['item-count-container']}>
                    <ItemCount />
                </div>
                <Loader />
                <button onClick={()=> { browserHistory.push('/retrieve-item'); }} style={{ opacity: 0, width: '150px', marginRight: '30px' }}></button>
                <button onClick={()=> { browserHistory.push('/door-error'); }} style={{ opacity: 0, width: '150px' }}></button>
            </div>
        );
    }
}
