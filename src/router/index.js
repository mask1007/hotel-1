import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/m',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['./home'], resolve)
    },
    {
      path: '/orderDishes',
      name: 'orderDishes',
      component: resolve => require(['./orderDishes'], resolve)
    },
  ]
})
