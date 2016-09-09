import React, { Component, PropTypes } from 'react';
import classes from './DoorErrorView.scss';
import DoorError from 'containers/DoorError';
import HelpButton from 'containers/HelpButton';



export default class DoorErrorView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <DoorError />
                <HelpButton link={true} label="View Direction" style={{ margin: '40px 0 0 0' }} />
            </div>
        );
    }
}
