import actions from '../actions/chat';

const initialChatState = {
    messages: []
};

const sendMessage = (state = initialChatState, action) => {
    let { payload } = action;
    let { messages } = state;

    switch (action.type) {
        case actions.actionTypes.sendMessageAction:
            return Object.assign({}, state, {
                messages: [...messages, payload]
            })
        default:
            return state;
    }
}

export default {
    sendMessage
};