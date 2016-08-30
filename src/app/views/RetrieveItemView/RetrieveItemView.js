import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classes from './RetrieveItemView.scss';
import ArrowIcon from 'components/ArrowIcon';


export default class ReceiptNotFoundView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <h1>Retrieve item below</h1>
                <div className={classes.arrow}>
                    <ArrowIcon box={true} size="4x"/>
                </div>
                <button onClick={()=> { browserHistory.push('/thanks'); }} style={{ opacity: 0 }}></button>
            </div>
        );
    }
}
