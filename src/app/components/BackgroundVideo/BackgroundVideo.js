import React, { Component, PropTypes } from 'react';
import classes from './BackgroundVideo.scss';

export class BackgroundVideo extends Component {

    static propTypes = {
        src: PropTypes.string.isRequired,
        borderVideo: PropTypes.bool
    };

    render () {
        return (
            <video loop autoPlay className={`${this.props.borderVideo ? classes.borderView : null} ${classes.layout}`}>
                <source src={this.props.src}  type="video/mp4" />
            </video>
        );
    }
}

export default BackgroundVideo;
