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
                <div className={classes['logo-container']}>
                    <Logo />
                </div>
                <div className={classes.view}>
                    <TextBlock headline="Thank You For Shopping">
                        If you have any quick questions or comments, contact us at CS@with.me <br /> or give us a call at 1-800-927-7671
                    </TextBlock>
                    <div className={classes['button-container']}>
                        <Button label="Done" onClick={() => { browserHistory.push('/'); }} />
                    </div>
                </div>
            </div>
        );
    }
}
