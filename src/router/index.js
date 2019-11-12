import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index/Index.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Personal from '../pages/Personal/Personal.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        showFooter: true
      }
    }
    , {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        showFooter: true
      }
    }
    , {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter: true
      }
    }
    , {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        showFooter: true
      }
    }
    , {
      path: '/',
      redirect: '/index',
      name: 'Index',
      component: Index,
      meta: {
        showFooter: true
      }
    }
    , {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
