import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { reset } from 'timeout';
import BackgroundVideo from 'components/BackgroundVideo';
import { remote } from 'electron';
import Video from 'assets/background.mp4';

import classes from './CoreLayout.scss';
import 'wm-fixture-styles/dist/main.css';
import 'global.scss';

const dirname = remote.getGlobal('dirname') || '';

export class CoreLayout extends Component {
    static propTypes = {
        children: PropTypes.node,
        location: PropTypes.object,
        reset: PropTypes.func.isRequired
    };

    render () {
        const { location } = this.props;
        return (
            <div onClick={this.props.reset} className={classes.layout}>
                <div className={`${location.pathname === '/welcome' || location.pathname === '/dispensing' ? classes.arrow : null} ${classes.background}`}>
                    <ReactCSSTransitionGroup
                        className={classes.transition}
                        component="div"
                        transitionName="page-transition"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        {React.cloneElement(this.props.children, {
                            key: this.props.location.pathname
                        })}
                    </ReactCSSTransitionGroup>
                </div>

                <BackgroundVideo src={`${dirname && `${dirname}/app`}/${Video}`} />
            </div>

        );
    }
}

export default connect(null, { reset })(CoreLayout);
