import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { reset } from 'timeout';
import { toggleHelp } from 'reducers/help';
import BackgroundVideo from 'components/BackgroundVideo';
import HelpIcon from 'components/HelpIcon';
import HelpPanelContainer from 'containers/HelpPanelContainer';

import classes from './CoreLayout.scss';
import 'wm-fixture-styles/dist/main.css';
import 'global.scss';

export class CoreLayout extends Component {
    static propTypes = {
        children: PropTypes.node,
        location: PropTypes.object,
        reset: PropTypes.func.isRequired,
        showHelpPanel: PropTypes.bool.isRequired,
        toggleHelp: PropTypes.func.isRequired
    };

    render () {
        const { showHelpPanel } = this.props;
        return (
            <div onClick={this.props.reset} className={classes.layout}>
                <BackgroundVideo />

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

                <div onClick={this.props.toggleHelp} className={classes['help-icon-container']}>
                    <HelpIcon box={true} size="4x" />
                </div>

                <HelpPanelContainer />

                <div className={`${showHelpPanel && classes['overlay-active']} ${classes.overlay}`} />
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        showHelpPanel: state.help.showHelpPanel
    };
};

export default connect(mapStateToProps, { reset, toggleHelp })(CoreLayout);
