import React, { Component, PropTypes } from 'react';
import classes from './MechanicalErrorView.scss';
import HelpButton from 'containers/HelpButton';
import Link from 'components/Link';
import TextBlock from 'components/TextBlock';


export default class MechanicalErrorView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <TextBlock headline="Out of order">
                    Sorry for the inconvenience, please proceed <br /> to the service lounge for assistance.
                </TextBlock>
                <HelpButton label="View Direction" style={{ margin: '129px 0 118px 0' }} />
                <Link label="Done" style={{ marginTop: '40px' }} onClick={() => {}}/>
            </div>
        );
    }
}
