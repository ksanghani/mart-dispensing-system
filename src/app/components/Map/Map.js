import React, { Component } from 'react';
import classes from './Map.scss';
import PlaceholderMap from 'assets/placeholder-map.jpg';
import { remote } from 'electron';

const dirname = remote.getGlobal('dirname') || '';

export class Map extends Component {
    render () {
        return (
            <img
                className={classes.layout}
                src={`${dirname && `${dirname}/app`}/${PlaceholderMap}`} />
        );
    }
}

export default Map;
