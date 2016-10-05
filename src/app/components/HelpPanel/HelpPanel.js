import React, { Component, PropTypes } from 'react';
import classes from './HelpPanel.scss';
import Button from 'components/Button';
import Link from 'components/Link';

export class HelpPanel extends Component {
    static propTypes = {
        children: PropTypes.node,
        isActive: PropTypes.bool.isRequired,
        cancelHelp: PropTypes.func.isRequired
    };

    render () {
        const { isActive, cancelHelp } = this.props;

        return (
            <div className={`${isActive ? classes.active : ''} ${classes.layout}`}>
                <p className={classes.info}>
                    After you purchase items from <br />
                    our kiosks, you can retrieve them here at <br />
                    this Smart Dispensing System.
                </p>

                <div className={classes.divider} />

                <p className={classes.cta}>
                    For assistance, please tap <br />
                    the button below.
                </p>

                <div>
                    <Button
                        label="Request Help"
                        style={{ marginBottom: 92 }}
                        onClick={() => {}}
                    />
                </div>

                <Link onClick={cancelHelp} size="large" label="Close" />
            </div>
        );
    }
}

export default HelpPanel;
