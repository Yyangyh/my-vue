import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Case from '@/components/Case'
import Book from '@/components/Book'
import Aboutus from '@/components/Aboutus'
import Detail from '@/components/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/case',
      name: 'Case',
      component: Case,
      meta: {
        title: '案例'
      }
    },
    {
      path: '/book',
      name: 'Book',
      component: Book,
      meta: {
        title: '留言'
      }
    },
    {
      path: '/aboutus',
      name: 'Aboutus',
      component: Aboutus,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      meta: {
        title: '详细内容'
      }
    }
  ]
})
