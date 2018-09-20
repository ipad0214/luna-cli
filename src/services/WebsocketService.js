
import Vue from 'vue';

const WebsocketService = new Vue({
    data: {
        ip: "",
        port: 0,
        autoReconnect: false
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
        }
    }
});
 export default WebsocketService;