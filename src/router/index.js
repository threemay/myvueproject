import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '@/components/tabbar/HomeContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcartContainer from '@/components/tabbar/ShopcartContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      redirect:'/home'
    },
    {
      path: '/home',
      // name: 'HelloWorld',
      component: HomeContainer
    },
    {
      path: '/search',
      // name: 'HelloWorld',
      component: SearchContainer
    },
    {
      path: '/member',
      // name: 'HelloWorld',
      component: MemberContainer
    },
    {
      path: '/shopcart',
      // name: 'HelloWorld',
      component: ShopcartContainer
    }
  ],
  linkActiveClass:'mui-active'
})
