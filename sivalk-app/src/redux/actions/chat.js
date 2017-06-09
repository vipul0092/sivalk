const sendMessageAction = 'SEND_MESSAGE';

const sendMessage = (message) => {
    return {
        type: sendMessageAction,
        payload: message
    }
}

export default {
    actionTypes: {
        sendMessageAction
    },
    actionMethods: {
        sendMessage: sendMessage
    }
};