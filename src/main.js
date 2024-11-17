import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import MyList from './components/MyList'

import Global from './Global'

import Axios from 'axios'

import MyMenu from './components/MyMenu'
Vue.prototype.$axios = Axios

Vue.use(Global)

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.component(MyList.name, MyList)
Vue.component(MyMenu.name, MyMenu)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
