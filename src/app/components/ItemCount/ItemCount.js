import React, { Component, PropTypes } from 'react';
import classes from './ItemCount.scss';

export class ItemCount extends Component {
    static propTypes = {
    };

    render () {

        return (
            <div className={classes.layout}>
                <span>1</span>
                <span>of</span>
                <span>1</span>
            </div>
        );
    }
}

export default ItemCount;
