import React, { Component, PropTypes } from 'react';
import classes from './DispensingView.scss';
import Loader from 'components/Loader';
import ItemTotal from 'containers/ItemTotal';
import Title from 'components/Title';


export default class DispensingView extends Component {
    static propTypes = {

    };

    render () {
        const dispensingFadeClasses = `${classes['dispensing-fade']} ${classes['dispensing-fade-in']}`;
        return (
            <div className={classes.container}>
                <div className={dispensingFadeClasses}>
                    <Title letterCase="uppercase">Dispensing</Title>
                    <div className={classes['item-total-container']}>
                        <ItemTotal />
                    </div>
                    <p>Each item dispenses separately</p>
                </div>
                <Loader style={{ marginTop: '130px' }}/>
            </div>
        );
    }
}
