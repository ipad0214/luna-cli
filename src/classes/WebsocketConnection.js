
const connectionStatus = {
    ONLINE: 2,
    OFFLINE: 0,
    ERROR: 1
}

export default class WebsocketConnection {
    constructor()  {
        this._listeners = [];
        this._websocket = null;
        this.connectionStatus = { status: connectionStatus.OFFLINE };
        this.port = 0;
        this.ip = "192.168.2.115";
        this.autoReconnect = false;
    }

    registerMessageListener(func) {
        this._listeners.push(func);
    }

    _onOpen() {
        this.connectionStatus.status = connectionStatus.ONLINE;
        console.log("i am open");
    }

    _onMessage(data) {
        this._listeners.forEach((func) => {
            func(data);
        });
    }

    _onClose() {
        this.connectionStatus.status = connectionStatus.OFFLINE;
    }

    _onError() {
        this.connectionStatus.status = connectionStatus.ERROR;
    }

    send(msg) {
        if(this._websocket !== undefined || this._websocket.readyState !== this._websocket.OPEN) {
            console.log(msg);
        } 
    }

    connect (ip, port) {
        this._websocket = new WebSocket("ws://" + ip + ":" + port);
        this._websocket.onopen = this._onOpen;
        this._websocket.onmessage = this._onMessage;
        this._websocket.onerror = this._onError;
        this._websocket.onclose = this._onClose;
    }
}