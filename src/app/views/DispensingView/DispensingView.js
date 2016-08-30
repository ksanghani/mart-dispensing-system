import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classes from './DispensingView.scss';
import Button from 'components/Button';
import Loader from 'components/Loader';


export default class DispensingView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <Loader />
                <button onClick={()=> { browserHistory.push('/retrieve-item'); }} style={{ opacity: 0, width: '150px', marginRight: '30px' }}></button>
                <button onClick={()=> { browserHistory.push('/unable-to-dispense'); }} style={{ opacity: 0, width: '150px' }}></button>
            </div>
        );
    }
}
