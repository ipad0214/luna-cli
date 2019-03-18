import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Settings from './views/Settings.vue'
import Battery from './views/Battery.vue'

Vue.use(Router)

export default class RouterFactory {
  constructor(websocketConnection, messageService) {
    this._messageService = messageService;
    this._websocketConnection = websocketConnection;
  }

  createRouter () {
    return new Router({
      routes: [
        {
          path: '/',
          name: 'dashboard',
          component: Dashboard,
          props: (route) => ({
            messageService: this._messageService,
            ...route.params
          })
        },
        {
          path: '/battery',
          name: 'battery',
          component: Battery,
          props: (route) => ({
            websocketService: this._websocketConnection,
            ...route.params
          })
        },
        {
          path: '/settings',
          name: 'settings',
          component: Settings,
          props: (route) => ({
            websocketService: this._websocketConnection,
            ...route.params
          })
        }
      ]
    })
  }
}
