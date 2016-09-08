import React, { Component } from 'react';
import classes from './Map.scss';
import PlaceholderMap from 'assets/placeholder-map.jpg';

export class Map extends Component {
    render () {
        return (
            <img
                className={classes.layout}
                src={PlaceholderMap} />
        );
    }
}

export default Map;
