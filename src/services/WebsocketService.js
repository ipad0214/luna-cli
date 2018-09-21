
import Vue from 'vue';
import WebSocketConnection from '@/classes/WebsocketConnection'

const WebsocketService = new Vue({
    data: {
        websocket: new WebSocketConnection,
        ip: "",
        port: 0,
        autoReconnect: false,
        connected: false
    },
    created: function () {
        let connectionCredentials = JSON.parse(localStorage.getItem("loginCredentials"));
        this.ip = connectionCredentials.ip;
        this.port = connectionCredentials.port;
        this.autoReconnect = connectionCredentials.autoReconnect;

        if(this.autoReconnect) {
            this.websocket("ws://" + this.ip + ":" + this.port);
        }

        console.log("executed");
    },  
    methods: {
        setIp(ip) {
            this.ip = ip;
        },    
        setPort(port) {
            this.port = port;
        },    
        setAutoReconnect(autoReconnect) {
            this.autoReconnect = autoReconnect;
        },    
        saveLoginInformations() {
            localStorage.setItem("loginCredentials", JSON.stringify({
                port: this.port,
                ip: this.ip,
                autoReconnect: this.autoReconnect
            }));
    
            console.log({
                port: this.port,
                ip: this.ip,
                autoReconnect: this.autoReconnect
            });
        },
        connectAndSave() {
            this.websocket = new WebSocket("ws://" + this.ip + ":" + this.port);
        }
    }
});

export default WebsocketService;