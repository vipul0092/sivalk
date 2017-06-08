import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions/user-actions';
import PropTypes from 'prop-types';

class ChatCanvasComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Hey {this.props.userId}, Welcome to Sivalk</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#" onClick={this.props.logOutUser}>Logout!</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

ChatCanvasComponent.propTypes = {
    userId: PropTypes.string.isRequired,
    logOutUser: PropTypes.func.isRequired
};

ChatCanvasComponent = connect(
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
)(ChatCanvasComponent);

export default ChatCanvasComponent;
