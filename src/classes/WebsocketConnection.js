import * as connectionStates from './ConnectionStatus';

import Vue from 'vue';

export default class WebsocketConnection {
    constructor(connectionCredentials={
        ip: "",
        port: "",
        autoReconnect: false
    }, store)  {
        this._store = store;
        this._listeners = [];
        this._websocket = null;
        this.ip = connectionCredentials.ip;
        this.port = connectionCredentials.port;
        this.connectionStatus = connectionStates.OFFLINE;       

        if(connectionCredentials.autoReconnect !== "false") {
            this.connect();
        }

        // window.testError = () => {
        //     console.log(this._errorListener);
        //     this._errorListener.forEach((listener) => {
        //         listener('this is a test');
        //     })
        // }
    }

    registerMessageListener(func) {
        this._listeners.push(func);
    }

    _onOpen = () => {
        this.connectionStatus = connectionStates.ONLINE;
    }

    _onMessage = (data) => {
        _listeners.forEach((func) => {
            func(data);
        });
    }
    
    _onClose = () => {
        this.connectionStatus = connectionStates.OFFLINE;
        if (event.code === 1006) {
            
        }
    }

    _onError = (event) => {
        this.connectionStatus = connectionStates.ERROR;
        if (event.currentTarget.readyState !== 3) {
            
        }
    }

    send = (msg) => {
        if(this._websocket === undefined || this._websocket === null || this._websocket.readyState === this._websocket.CLOSED) {
            
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

        setTimeout(() => {
            if(this.readyState !== 1) {
                this._store.commit('addNotification', {
                    type: 'error',
                    group: 'standard',
                    title: "Websocket isn't connected", 
                    msg: "Can't connect to server. Check if the server is available."
                });
            }
        }, 1000);
    }
}