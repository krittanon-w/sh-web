import Vue from 'vue'
import App from './App'
import router from './router'

// jquery for support semantic-ui
import jquery from 'jquery'
window.jQuery = jquery
window.$ = jquery

// semantic-ui-css
require('semantic-ui-css/semantic.min.js')
import 'semantic-ui-css/semantic.min.css'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

// setup vue-nprogress
import NProgress from 'vue-nprogress'
const options = {
  latencyThreshold: 200,
  router: true,
  http: true,
  showSpinner: false
}
const nprogress = new NProgress(options)
Vue.use(NProgress)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  nprogress,
  el: '#app',
  router,
  render: h => h(App)
})
