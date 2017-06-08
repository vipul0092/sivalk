import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions/user-actions';
import PropTypes from 'prop-types';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleLoginClick() {
        this.props.doUserLogin(this.userIdInput.value);
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.props.doUserLogin(this.userIdInput.value);
        }
    }

    render() {
        return (
            <div className='container'>
                <h2 className="form-signin-heading">Please sign in</h2>
                <label htmlFor="inputUserId" className="sr-only">Password</label>
                <input type="text" id="inputUserId" className="form-control" placeholder="Your User Id" required=""
                    ref={node => this.userIdInput = node}
                    onKeyPress={this.handleKeyPress} />
                <button className="btn btn-lg btn-primary btn-block" type="submit"
                    onClick={this.handleLoginClick}>
                    Sign in
                </button>
            </div>
        );
    }
}

LoginComponent.propTypes = {
    doUserLogin: PropTypes.func.isRequired
};

LoginComponent = connect(
    (state) => {
        return {};
    },
    (dispatcher) => {
        return {
            doUserLogin: (userId) => dispatcher((dispatcher) => dispatcher(actions.actionMethods.doUserLogin(userId)))
        };
    }
)(LoginComponent);

export default LoginComponent;
