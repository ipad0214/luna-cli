import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import WebsocketService from '@/services/WebsocketService'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      props: (route) => ({
        websocketService: WebsocketService,
        ...route.params
      })
    },
    {
      path: '/engines',
      name: 'engines',
      props: (route) => ({
        websocketService: WebsocketService,
        ...route.params
      }),
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Engines.vue')
    }
  ]
})
