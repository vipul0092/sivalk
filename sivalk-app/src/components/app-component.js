import React from 'react';
import LoginComponent from './login-component';
import ChatCanvasComponent from './chat-canvas-component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let markup = this.props.isUserLoggedIn ? <ChatCanvasComponent /> : <LoginComponent />;
        return (
            markup
        );
    }
}

AppComponent.propTypes = {
    isUserLoggedIn: PropTypes.bool.isRequired
};

AppComponent = connect(
    (state) => {
        return {
            isUserLoggedIn: state.userLogin.isLoggedIn
        };
    },
    (dispatcher) => {
        return {};
    }
)(AppComponent);

export default AppComponent;