import React, { Component, PropTypes } from 'react';
import classes from './DispensingView.scss';
import Loader from 'components/Loader';
import ItemTotal from 'containers/ItemTotal';
import Title from 'components/Title';


export default class DispensingView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <Title letterCase="uppercase">Dispensing</Title>
                <div className={classes['item-total-container']}>
                    <ItemTotal />
                </div>
                <p>Each item dispenses separately</p>
                <Loader style={{ marginTop: '130px' }}/>
            </div>
        );
    }
}
