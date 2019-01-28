import Vue from 'vue'
import App from './App.vue'
import RouterFactory from './router'
import BootstrapVue from 'bootstrap-vue'

import NotificationModel from '@/models/NotificationModel'
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

const notifications = new NotificationModel();
const websocketConnection = new WebsocketConnection(connectionCredentials, notifications);
const messageService = new Messages(websocketConnection);
const routerFactory = new RouterFactory(notifications, websocketConnection, messageService);
const router = routerFactory.createRouter();

Vue.use(BootstrapVue);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App, {
    props: {
      notifications: notifications
    }
  })
}).$mount('#app')
