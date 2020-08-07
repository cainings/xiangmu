import Vue from 'vue'
import VueRouter from 'vue-router'
import toutiao from '@/views/toutiao.vue'
import login from '@/views/login.vue'
import registe from '@/views/registe.vue'
import shipin from '@/views/shipin.vue'
import shipin1 from '@/views/shipin1.vue'
import pinglunList from '@/views/pinglunList.vue'
import zhibojian from '@/views/zhibojian.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'toutiao',
    component: toutiao
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/registe',
    name:'registe',
    component:registe
  },
  {
    path: '/shipin',
    name: 'shipin',
    component: shipin   
  },
  {
    path:'/shipin1',
    name:'shipin1',
    component:shipin1
  },
  {
    path:'/pinglunList',
    name:'pinglunList',
    component:pinglunList
  },
  {
    path:'/zhibojian',
    name:'zhibojian',
    component:zhibojian
  }

]

const router = new VueRouter({
  routes
})

export default router
