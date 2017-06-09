import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../less/chat.less';

class MessageDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let message = this.props.message;
        return (
            <div className="list-group-item">
                <p className={message.isOwn ? 'selfMessage' : 'otherMessage'}>{message.text}</p>
            </div>
        );
    }

}

MessageDisplay.propTypes = {
    message: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        isOwn: PropTypes.bool,
        from: PropTypes.string,
        to: PropTypes.string,
        dateSent: PropTypes.object
    })
};

export default MessageDisplay;
