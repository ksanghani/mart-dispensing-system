import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pressNumber } from 'reducers/pinpad';
import Error from 'components/Error';
import KeyPad from 'components/KeyPad';
import PinNumber from 'components/PinNumber';

export class PinPad extends Component {
    static propTypes = {
        pressNumber: PropTypes.func.isRequired,
        pin: PropTypes.string.isRequired,
        error: PropTypes.bool.isRequired
    };

    render () {
        const { pin, error } = this.props;

        return (
            <div>
                <PinNumber pin={pin} error={error} />

                <Error
                    show={error}
                    message="You entered an incorrect PIN number. Please try again."/>

                <KeyPad press={this.props.pressNumber} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pin: state.pinpad.pin,
        error: state.pinpad.error
    };
};

export default connect(
    mapStateToProps,
    { pressNumber }
)(PinPad);
