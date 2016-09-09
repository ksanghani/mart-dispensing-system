import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ItemCount from 'components/ItemCount';

export class ItemTotal extends Component {
    static propTypes = {
    };

    render () {

        return (
            <div>
                <ItemCount itemClassName="current" amount="1"/>
                <ItemCount itemClassName="total" amount="2"/>
            </div>
        );
    }
}

export default connect(
    null,
    null
)(ItemTotal);
