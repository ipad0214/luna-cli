

export default class WebsocketConnection {
    constructor()  {
        this._websocket = null;
    }

    connect (ip, port) {
        this._websocket = new WebSocket("ws://" + ip + ":" + port);
    }
}