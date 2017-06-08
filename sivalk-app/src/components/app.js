import React from 'react';
import Login from './login';
import ChatCanvas from './chat/canvas';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let markup = this.props.isUserLoggedIn ? <ChatCanvas /> : <Login />;
        return (
            markup
        );
    }
}

App.propTypes = {
    isUserLoggedIn: PropTypes.bool.isRequired
};

App = connect(
    (state) => {
        return {
            isUserLoggedIn: state.userLogin.isLoggedIn
        };
    },
    (dispatcher) => {
        return {};
    }
)(App);

export default App;