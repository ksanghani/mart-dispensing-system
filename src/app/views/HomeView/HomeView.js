import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classes from './HomeView.scss';
import { senseProximity } from 'reducers/peripherals';

export class HomeView extends Component {
    static propTypes = {
        senseProximity: PropTypes.func.isRequired
    };

    render () {
        return (
            <div
                className={classes.view}
                onClick={() => this.props.senseProximity(true)}
            >
                <h1>Hello</h1>
            </div>
        );
    }
}

export default connect(null, { senseProximity })(HomeView);
