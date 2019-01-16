
const engine = () => {
    return {
        Status: 0,
        Value: 50
    }
}

const gyroscope = () => {
    return {
        Pitch: 0,
        Yaw: 0,
        Roll: 0
    }
}

export default class Messages {
    constructor(websocket) {
        this.websocket = websocket;
        this.data = {
            November: new engine(),
            Echo: new engine(),
            Sierra: new engine(),
            Whisky: new engine(),
            Gyroscope: new gyroscope()
        }

        this.websocket.registerMessageListener((data) => {
            this.data = data;
        });
    }

    send() {
        this.websocket.send(JSON.stringify(this.data));
    }
}