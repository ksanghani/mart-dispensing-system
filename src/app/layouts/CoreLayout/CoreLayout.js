import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { remote } from 'electron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { reset } from 'timeout';
import { requestHelp } from 'reducers/help';
import BackgroundVideo from 'components/BackgroundVideo';
import HelpIcon from 'components/HelpIcon';
import Shelf from 'containers/Shelf';
import Video from 'assets/background.mp4';

import classes from './CoreLayout.scss';
import 'wm-fixture-styles/dist/main.css';
import 'global.scss';

const dirname = remote.getGlobal('dirname') || '';

export class CoreLayout extends Component {
    static propTypes = {
        children: PropTypes.node,
        location: PropTypes.object,
        reset: PropTypes.func.isRequired,
        helpActive: PropTypes.bool.isRequired,
        requestHelp: PropTypes.func.isRequired
    };

    render () {
        const { helpActive } = this.props;
        return (
            <div onClick={this.props.reset} className={classes.layout}>
                <div className={classes.background}>
                    <ReactCSSTransitionGroup
                        className={classes.transition}
                        component="div"
                        transitionName="page-transition"
                        transitionEnterTimeout={200}
                        transitionLeaveTimeout={200}
                    >
                        {React.cloneElement(this.props.children, {
                            key: this.props.location.pathname
                        })}
                    </ReactCSSTransitionGroup>
                </div>

                <div onClick={this.props.requestHelp} className={classes['help-icon-container']}>
                    <HelpIcon box={true} size="4x"/>
                </div>

                <BackgroundVideo src={`${dirname && `${dirname}/app`}/${Video}`} />
                <Shelf />
                <div className={`${helpActive ? classes['overlay-active'] : ''} ${classes.overlay}`} />
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        helpActive: state.help.helpActive
    };
};

export default connect(mapStateToProps, { reset, requestHelp })(CoreLayout);
