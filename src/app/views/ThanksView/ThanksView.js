import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classes from './ThanksView.scss';
import Button from 'components/Button';
import Logo from 'components/Logo';
import TextBlock from 'components/TextBlock';


export default class ThanksView extends Component {
    static propTypes = {

    };

    render () {
        return (
            <div className={classes.container}>
                <Logo style={{ margin: '60px 0 90px 0' }}/>
                <TextBlock headline="Thank You For Shopping">
                    If you have any quick questions or comments, contact us at CS@with.me <br /> or give us a call at 1-800-927-7671
                </TextBlock>
                <Button label="Done" style={{ marginTop: '60px' }} onClick={() => { browserHistory.push('/'); }} />
            </div>
        );
    }
}
