
const engine = () => {
    return {
        status: 0,
        value: 50
    }
}

const gyroscope = () => {
    return {
        pitch: 0,
        yaw: 0,
        roll: 0
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
            Gyroscope: new Gyroscope()
        }

        this.websocket.registerMessageListener((data) => {
            this.data = data;
        });
    }

    send() {
        this.websocket.send(JSON.stringify(this.data));
    }
}