import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'components/Button';
import Title from 'components/Title';

export class DoorError extends Component {
    static propTypes = {
    };

    render () {

        return (
            <div>
                <Title size="medium">You haven&rsquo;t taken out the item</Title>
                <Button label="Re-open door" style={{ margin: '65px 0 95px 0' }} onClick={() => {}} />
                <Title size="small">If this is not your item, please proceed to the service lounge for assistance.</Title>
            </div>
        );
    }
}

export default connect(
    null,
    null
)(DoorError);
