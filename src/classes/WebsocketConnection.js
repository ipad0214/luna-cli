

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

    send(msg) {
        if(this._websocket !== undefined || this._websocket.readyState !== this._websocket.OPEN) {
            console.log(msg);
        } 
    }

    connect (ip, port) {
        this._websocket = new WebSocket("ws://" + ip + ":" + port);
        this._websocket.onopen = this._onOpen;
    }
}