import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import '@/classes/object-watch'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faOilCan, faCogs, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faOilCan, faCogs, faHome
  );

Vue.use(BootstrapVue);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
