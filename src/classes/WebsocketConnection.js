

export default class WebsocketConnection {
    constructor()  {
        this._websocket = null;
        this.port = 0;
        this.ip = "192.168.2.115";
        this.autoReconnect = false;
    }

    _onOpen() {
        console.log("i am open");
    }

    connect (ip, port) {
        this._websocket = new WebSocket("ws://" + ip + ":" + port);
        this._websocket.onopen = this._onOpen;
    }
}