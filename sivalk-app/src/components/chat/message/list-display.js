import React from 'react';
import MessageDisplay from './display';
import ReactDOM from 'react-dom';
import Styles from '../less/chat.less';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../../redux/actions/chat';


class MessageListDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    render() {
        return (
            <div ref={node => this.chatMessageEncloser = node} className="list-group floatBottom canvasScrollBar">
                {
                    this.props.messages.map((message) => {
                        return (<div key={message.id}>
                            <MessageDisplay message={message} />
                        </div>);
                    })
                }
            </div>
        );
    }

    scrollToBottom() {
        const messagesContainer = ReactDOM.findDOMNode(this.chatMessageEncloser);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
}

MessageListDisplay.propTypes = {
    messages: PropTypes.array.isRequired,
    sendMessage: PropTypes.func.isRequired
};

MessageListDisplay = connect(
    (state) => {
        return {
            messages: state.sendMessage.messages
        };
    },
    (dispatcher) => {
        return {
            sendMessage: (message) => dispatcher((dispatcher) => dispatcher(actions.actionMethods.sendMessage(message)))
        };
    }
)(MessageListDisplay);


export default MessageListDisplay;
