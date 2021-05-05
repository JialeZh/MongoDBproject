import Vue from 'vue'
import Router from 'vue-router'
import Pantry from '@/components/pantry'
import Home from '@/components/home.vue';
import About from '@/components/about.vue';
import Help from '@/components/help.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
        meta:{
          auth: true,
          title: 'Home Page'
        }
    },
    {
      path: '/pantry',
      name: 'Pantry',
      component: Pantry,
      meta:{
        auth: true,
        title: 'Pantry'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta:{
        auth: true,
        title: 'About'
      }
    },
    {
      path: '/help',
      name: 'Help',
      component: Help,
      meta:{
        auth: true,
        title: 'Help'
      }
    },
  ]
})
