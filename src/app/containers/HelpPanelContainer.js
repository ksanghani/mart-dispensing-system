import { connect } from 'react-redux';
import { cancelHelp } from 'reducers/help';
import HelpPanel from 'components/HelpPanel';

const mapStateToProps = (state) => {
    return {
        isActive: state.help.helpActive
    };
};

export default connect(
    mapStateToProps,
    { cancelHelp }
)(HelpPanel);
