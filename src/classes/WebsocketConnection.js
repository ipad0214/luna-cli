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
        this._notifcationModel.createSuccessNotification({
            title: 'Websocket connected',
            text: 'Connection to drone established'
        })
    }

    _onMessage = (data) => {
        _listeners.forEach((func) => {
            func(data);
        });
    }
    
    _onClose = () => {
        this.connectionStatus = connectionStates.OFFLINE;
        this._notifcationModel.createWarningNotification({
            title: 'Websocket disconnected',
            text: 'Connection to drone terminated'
        });
    }

    _onError = () => {
        this.connectionStatus = connectionStates.ERROR;
        this._notifcationModel.createErrorNotification({
            title: 'Websocket disconnected unexpected',
            text: 'Websocket connection failure. Drone out of control'
        });
    }

    send = (msg) => {
        if(this._websocket === undefined || this._websocket === null || this._websocket.readyState === this._websocket.CLOSED) {
            this._notifcationModel.createWarningNotification({
                title: 'Websocket is not connected',
                text: 'Create a conneciton to start again'
            })
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

        this._notifcationModel.createErrorNotification({
            name: 'Websocket cant connect',
            text: 'Make sure that your drone and the remote control is booted correctly'
        });
    }
}