import * as connectionStates from './ConnectionStatus';

export default class WebsocketConnection {
    constructor(connectionCredentials={
        ip: "",
        port: "",
        autoReconnect: false
    })  {
        this._listeners = [];
        this._websocket = null;
        this.ip = connectionCredentials.ip;
        this.port = connectionCredentials.port;
        this.connectionStatus = connectionStates.OFFLINE;       

        if(connectionCredentials.autoReconnect !== "false") {
            this.connect();
        }
    }

    registerMessageListener(func) {
        this._listeners.push(func);
    }

    _onOpen() {
        console.log(this);
        connectionStatus = connectionStates.ONLINE;
    }

    _onMessage(data) {
        _listeners.forEach((func) => {
            func(data);
        });
    }

    _onClose() {
        connectionStatus = connectionStates.OFFLINE;
    }

    _onError() {
        connectionStatus = connectionStates.ERROR;
    }

    send(msg) {
        if(_websocket === undefined || _websocket === null || _websocket.readyState === _websocket.CLOSED) {
            console.log("the websocket ist not connected cant send messages");
            return;
        } 

        this._websocket.send(msg);
    }

    connect () {
        this._websocket = new WebSocket("ws://" + this.ip + ":" + this.port);
        this._websocket.onopen = this._onOpen;
        this._websocket.onmessage = this._onMessage;
        this._websocket.onerror = this._onError;
        this._websocket.onclose = this._onClose;
    }
}