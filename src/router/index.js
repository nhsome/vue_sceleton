import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
	  { 
	    path: '/404',
	    name: '404',
	    component: NotFound,
	  },
	  { 
	    path: '*', 
	    redirect: '/404' 
	  }
  ]
})
