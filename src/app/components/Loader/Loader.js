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
                <svg style={style} width="119" height="74" viewBox="0 0 672 318">
                    <defs>
                        <linearGradient id="loaderBodyGradient" x1="100%" y1="100%">
                            <stop className={classes.loaderBodyGradientStop1} offset="0%"/>
                            <stop className={classes.loaderBodyGradientStop2} offset="100%"/>
                        </linearGradient>
                    </defs>
                    <path d="M0 302 129 302 129 17 232 17 232 302 336 302 336 17 440 17 440 302 545 302 545 17 772 17" fill="none" stroke="#f4f4f4" strokeMiterlimit="10" strokeWidth="34"></path>
                    <path d="M0 302 129 302 129 17 232 17 232 302 336 302 336 17 440 17 440 302 545 302 545 17 772 17" fill="none" stroke='url(#loaderBodyGradient)' strokeMiterlimit="10" strokeWidth="34" className={classes['loader-body']}></path>
                </svg>
            </div>
        );
    }
}

export default Loader;
