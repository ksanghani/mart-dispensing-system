import { connect } from 'react-redux';
import { requestHelp, toggleHelp } from 'reducers/help';
import HelpPanel from 'components/HelpPanel';

const mapStateToProps = (state) => {
    return {
        isActive: state.help.showHelpPanel
    };
};

export default connect(
    mapStateToProps,
    { requestHelp, toggleHelp }
)(HelpPanel);
