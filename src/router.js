import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Settings from './views/Settings.vue'
import WebsocketConnection from '@/classes/WebsocketConnection'
import Messages from '@/classes/Messages'

Vue.use(Router)

const WebSocketConnection = new WebsocketConnection();
const MessageService = new Messages(WebSocketConnection);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      props: (route) => ({
        messageService: MessageService, 
        ...route.params
      })
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      props: (route) => ({
        websocketService: WebSocketConnection,
        ...route.params
      })
    }
  ]
})
