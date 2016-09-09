import React, { Component, PropTypes } from 'react';
import classes from './ItemCount.scss';

export class ItemCount extends Component {
    static propTypes = {
        itemClassName: PropTypes.oneOf(['current', 'total']).isRequired,
        amount: PropTypes.string.isRequired
    };

    render () {
        const { itemClassName, amount } = this.props;
        return (
            <span className={`${classes[itemClassName]}`}>{amount}</span>
        );
    }
}

export default ItemCount;
