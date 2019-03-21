
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

const status = (connectionStatus=false) => {
    return {
        remoteBatterySOC: 1,
        droneBatterySOC: 1,
        connection: connectionStatus
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
            Gyroscope: new gyroscope(),
            status: new status()
        }

        this.websocket.registerMessageListener((data) => {
            this.data = data;
        });
    }

    update() {
        this.websocket.send(JSON.stringify(this.data));
    }
}