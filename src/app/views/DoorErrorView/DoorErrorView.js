import React, { Component, PropTypes } from 'react';
import classes from './DoorErrorView.scss';
import DoorError from 'containers/DoorError';
import HelpLink from 'containers/HelpLink';



export default class DoorErrorView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <DoorError />
                <HelpLink />
            </div>
        );
    }
}
