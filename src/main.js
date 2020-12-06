import Vue from 'vue'
import App from './App.vue'
import SmartTable from 'vuejs-smart-table'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(SmartTable)
Vue.use(VueMeta)

new Vue({
  render: h => h(App)
}).$mount('#app')

