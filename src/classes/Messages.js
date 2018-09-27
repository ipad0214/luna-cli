
const engine = () => {
    return {
        status: 0,
        value: 0,
        name: ''
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
}