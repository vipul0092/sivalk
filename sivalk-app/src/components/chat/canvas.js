import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/user';
import PropTypes from 'prop-types';

import Footer from './footer';
import Header from './header';

class ChatCanvas extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header userId={this.props.userId} logOutUser={this.props.logOutUser} />
                <Footer />
            </div>
        );
    }
}

ChatCanvas.propTypes = {
    userId: PropTypes.string.isRequired,
    logOutUser: PropTypes.func.isRequired
};

ChatCanvas = connect(
    (state) => {
        return {
            userId: state.userLogin.userId
        };
    },
    (dispatcher) => {
        return {
            logOutUser: () => dispatcher((dispatcher) => dispatcher(actions.actionMethods.logOutUser()))
        };
    }
)(ChatCanvas);

export default ChatCanvas;
