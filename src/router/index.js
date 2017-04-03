import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import DashHome from '@/components/DashHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/user/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta:{requireAuth: true},
      children: [
        {
          path: '/',
          component: DashHome
        },
      ]
    },
    {
      path: '*',
      redirect: '/user/dashboard'
    },
  ]
})
