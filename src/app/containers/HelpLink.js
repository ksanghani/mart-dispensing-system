import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Link from 'components/Link';

export class HelpLink extends Component {
    static propTypes = {
    };

    render () {

        return (
            <div>
                <Link label="View Direction" style={{ margin: '40px 0 0 0' }} onClick={() => {}} />
            </div>
        );
    }
}

export default connect(
    null,
    null
)(HelpLink);
