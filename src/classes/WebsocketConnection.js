import * as connectionStates from './ConnectionStatus';

export default class WebsocketConnection {
    constructor(connectionCredentials={
        ip: "",
        port: "",
        autoReconnect: false
    }, notificationModel)  {
        this._notifcationModel = notificationModel;
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

    _onOpen = () => {
        this.connectionStatus = connectionStates.ONLINE;
        this._notifcationModel.addNotification({
            name: 'Websocket connected',
            status: 'success',
            icon: 'test'
        })
    }

    _onMessage = (data) => {
        _listeners.forEach((func) => {
            func(data);
        });
    }
    
    _onClose = () => {
        this.connectionStatus = connectionStates.OFFLINE;
        this._notifcationModel.addNotification({
            name: 'Websocket disconnected',
            status: 'warning',
            icon: 'test'
        })
    }

    _onError = () => {
        this.connectionStatus = connectionStates.ERROR;
        this._notifcationModel.addNotification({
            name: 'Websocket disconnected unexpected',
            status: 'error',
            icon: 'test'
        })
    }

    send = (msg) => {
        if(this._websocket === undefined || this._websocket === null || this._websocket.readyState === this._websocket.CLOSED) {
            console.log("the websocket ist not connected cant send messages");
            return;
        } 

        this._websocket.send(msg);
    }

    connect() {
        this._websocket = new WebSocket("ws://" + this.ip + ":" + this.port);
        this._websocket.onopen = this._onOpen;
        this._websocket.onmessage = this._onMessage;
        this._websocket.onerror = this._onError;
        this._websocket.onclose = this._onClose;
    }
}