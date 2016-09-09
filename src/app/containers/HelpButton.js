import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestHelp } from 'reducers/help';
import Button from 'components/Button';
import Link from 'components/Link';

export class HelpButton extends Component {
    static propTypes = {
        requestHelp: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired,
        style: PropTypes.object,
        link: PropTypes.bool
    };

    render () {
        const { requestHelp, label, style, link } = this.props;
        return (
            <div>
                {
                    link
                    ?
                    <Link label={label} style={style} onClick={requestHelp} />
                    :
                    <Button label={label} style={style} onClick={requestHelp} />
                }
            </div>
        );
    }
}

export default connect(null, { requestHelp })(HelpButton);
