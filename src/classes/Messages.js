
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

        this.websocket.registerMessageListener((data) => {
            this.data = data;
        });

        Object.observe(this.data, () => {
            this.send();
        });
    }

    send() {
        this.websocket.send(JSON.stringify(this.data));
    }
}