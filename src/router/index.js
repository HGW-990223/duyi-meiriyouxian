import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

Vue.use(VueRouter)

const Home = () => import('@/views/Home')
const Login = () => import('@/views/Login')

const routes = [
  {
    path: '/',
    redirect: {name: 'Home'},
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path !== '/login') {
    if(store.state.user.username && store.state.user.role && store.state.user.appkey) {
      return next()
    }else{
      return next({name: 'Login'})
    }
  }
  return next();
})

export default router
