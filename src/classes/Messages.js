
const engine = () => {
    return {
        status: 0,
        value: 0
    }
}

export default class Messages {
    constructor(websocket) {
        this.websocket = websocket;
        this.data = {
            November: new engine(),
            Echo: new engine(),
            Sierra: new engine(),
            Whisky: new engine()
        }
    }

    send() {
        this.websocket.send(JSON.stringify(this.data));
    }
}