import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Styles from './less/chat.less';
import Message from '../../models/message';
import actions from '../../redux/actions/chat';
const uuidV1 = require('uuid/v1');

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event) {
        if (event.key === 'Enter' && this.messageInput.value !== '') {
            let message = new Message(uuidV1(), this.messageInput.value, true, this.props.userId, '', new Date());
            this.props.sendMessage(message);

            this.messageInput.value = '';
        }
    }

    render() {
        return (
            <footer className="customFooter">
                <div className="container">
                    <input type="text" id="inputMessage" className="form-control twentyMargin" placeholder="Enter message..." required=""
                        ref={node => this.messageInput = node} 
                        onKeyPress={this.handleKeyPress} />
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    userId: PropTypes.string.isRequired,
    sendMessage: PropTypes.func.isRequired
};

Footer = connect(
    (state) => {
        return {};
    },
    (dispatcher) => {
        return {
            sendMessage: (message) => dispatcher((dispatcher) => dispatcher(actions.actionMethods.sendMessage(message)))
        };
    }
)(Footer);

export default Footer;
