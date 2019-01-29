import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Settings from './views/Settings.vue'

Vue.use(Router)

export default class RouterFactory {
  constructor(notificationModel, websocketConnection, messageService) {
    this._notifcationModel = notificationModel;
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
            notificationModel: this._notifcationModel,
            ...route.params
          })
        },
        {
          path: '/settings',
          name: 'settings',
          component: Settings,
          props: (route) => ({
            websocketService: this._websocketConnection,
            notificationModel: this._notifcationModel,
            ...route.params
          })
        }
      ]
    })
  }
}
