import Vue from 'vue'
import App from './App.vue'
import RouterFactory from './router'
import BootstrapVue from 'bootstrap-vue'
import Notifications from 'vue-notification'

import store from './models/NotificationModel';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faOilCan, faCogs, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import WebsocketConnection from '@/classes/WebsocketConnection'
import Messages from '@/classes/Messages'

let connectionCredentials = localStorage.getItem("credentials");
if (connectionCredentials) {
  connectionCredentials = JSON.parse(connectionCredentials);
}

library.add(faCoffee, faOilCan, faCogs, faHome);

Vue.use(BootstrapVue);
Vue.use(Notifications);

Vue.component('font-awesome-icon', FontAwesomeIcon);

const websocketConnection = new WebsocketConnection(connectionCredentials);
const messageService = new Messages(websocketConnection);
const routerFactory = new RouterFactory(websocketConnection, messageService);
const router = routerFactory.createRouter();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
