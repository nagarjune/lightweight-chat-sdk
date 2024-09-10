class ChatSDK {
    constructor(url) {
        this.socket = new WebSocket(url);
        this.socket.onmessage = (event) => {
            if (this.onMessage) {
                this.onMessage(event.data);
            }
        };
    }

    sendMessage(message) {
        this.socket.send(message);
    }

    onMessage(callback) {
        this.onMessage = callback;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChatSDK;
} else {
    window.ChatSDK = ChatSDK;
}

