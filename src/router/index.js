import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/m',
  routes: [
    {
      path: '/orderDishes',
      name: 'orderDishes',
      component: resolve => require(['./orderDishes'], resolve)
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: resolve => require(['./recommend'], resolve)
    },
  ]
})
