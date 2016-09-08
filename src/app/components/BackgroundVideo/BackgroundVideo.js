import React, { Component } from 'react';
import classes from './BackgroundVideo.scss';
import Video from 'assets/background.mp4';

export class BackgroundVideo extends Component {
    render () {
        return (
            <video loop autoPlay className={classes.layout}>
                <source src={Video} type="video/mp4" />
            </video>
        );
    }
}

export default BackgroundVideo;
