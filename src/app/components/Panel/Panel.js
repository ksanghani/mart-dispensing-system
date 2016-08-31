import React, { Component, PropTypes } from 'react';
import classes from './Panel.scss';

export class Panel extends Component {
    static propTypes = {
        children: PropTypes.node,
        isActive: PropTypes.bool
    };

    render () {
        const { isActive, children } = this.props;
        return (
            <div className={`${isActive ? classes.active : ''} ${classes.layout}`}>
                <p>
                    If you have questions <br /> or encounter any technical <br /> issues,
                    please proceed to our <br /> service lounge for assistance.
                </p>
                {children}
            </div>
        );
    }
}

export default Panel;
