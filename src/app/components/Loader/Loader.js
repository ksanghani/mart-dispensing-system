import React, { Component, PropTypes } from 'react';
import classes from './Loader.scss';

export class Loader extends Component {

    static propTypes = {
        style: PropTypes.object
    }
    render () {
        const { style } = this.props;
        const loaderContainerClasses = `${classes['loader-container']} ${classes['loader-container-fade-in']}`;
        return (
            <div className={loaderContainerClasses}>
                <svg style={style} width="149" height="93" viewBox="0 0 883 638">
                    <path d="M0 622 129 622 129 17 232 17 232 622 336 622 336 17 440 17 440 622 545 622 545 17 650 17 650 622 750 622 750 17 883 17" fill="none" stroke="#f4f4f4" strokeMiterlimit="10" strokeWidth="34"></path>
                    <path d="M0 622 129 622 129 17 232 17 232 622 336 622 336 17 440 17 440 622 545 622 545 17 650 17 650 622 750 622 750 17 883 17" fill="none" stroke='#000' strokeMiterlimit="10" strokeWidth="34" className={classes['loader-body']}></path>
                </svg>
            </div>
        );
    }
}

export default Loader;
