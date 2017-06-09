class Message {
    constructor(id, text, isOwn, from, to, dateSent) {
        [this.id, this.text, this.isOwn, this.from, this.to, this.dateSent] = arguments;
    }
}

export default Message;