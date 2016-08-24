import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classes from './HomeView.scss';
import { senseProximity } from 'reducers/peripherals';
import ArrowIcon from 'components/ArrowIcon';
import Logo from 'components/Logo';
import TextBlock from 'components/TextBlock';


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
                <div className={classes.logo}>
                    <Logo />
                </div>
                <TextBlock headline="Scan Your Receipt">
                    to start the express pickup
                </TextBlock>
                <div className={classes.arrow}>
                    <ArrowIcon box={true} size="4x"/>
                </div>
            </div>
        );
    }
}

export default connect(null, { senseProximity })(HomeView);
