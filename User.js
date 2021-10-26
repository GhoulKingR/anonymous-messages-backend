

function User() {
    const messages = [];
    this.saveMessage = message => {
        messages.push(message);
    }
    this.messages = () => messages;
}

module.exports = User;