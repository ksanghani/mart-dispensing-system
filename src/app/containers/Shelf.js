import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { cancelHelp } from 'reducers/help';
import Link from 'components/Link';
import Map from 'components/Map';
import Panel from 'components/Panel';

export class Shelf extends Component {
    static propTypes = {
        helpActive: PropTypes.bool.isRequired,
        cancelHelp: PropTypes.func.isRequired
    };

    render () {
        const { helpActive, cancelHelp } = this.props;

        return (
            <div>
                <Panel isActive={helpActive}>
                    <Map />
                    <Link onClick={cancelHelp} size="large" label="Close" />
                </Panel>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        helpActive: state.help.helpActive
    };
};

export default connect(
    mapStateToProps,
    { cancelHelp }
)(Shelf);
