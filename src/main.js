import Vue from 'vue'
import App from './App'
import router from './router'


// setup element-ui env
// full import components
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
