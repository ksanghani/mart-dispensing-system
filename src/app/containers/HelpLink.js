import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestHelp } from 'reducers/help';
import Link from 'components/Link';

export class HelpLink extends Component {
    static propTypes = {
        requestHelp: PropTypes.func.isRequired
    };

    render () {
        const { requestHelp } = this.props;
        return (
            <div>
                <Link label="View Direction" style={{ margin: '40px 0 0 0' }} onClick={requestHelp} />
            </div>
        );
    }
}

export default connect(null, { requestHelp })(HelpLink);
