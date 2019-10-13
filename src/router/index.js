import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '@/components/tabbar/HomeContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcartContainer from '@/components/tabbar/ShopcartContainer'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'
import PhotoList from '@/components/photo/PhotoList'

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
    },
    {
      path: '/home/newslist',
      // name: 'HelloWorld',
      component: NewsList
    },
    {
      path: '/home/newslist/:id',
      // name: 'HelloWorld',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      // name: 'HelloWorld',
      component: PhotoList
    },
  ],
  linkActiveClass:'mui-active'
})
