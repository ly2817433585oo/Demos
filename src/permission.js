import router from './router'
import store from './store'
import Nprogress from 'nprogress'
import {
  Message
} from 'element-ui'
import 'nprogress/nprogress.css'
import {
  getToken
} from './utils/auth'
import {
  getPageTitle
} from './utils/get-page-title'

Nprogress.configure({
  showSpinner: false
})

// 无需重定向的白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  Nprogress.start()

  document.title = getPageTitle(to.meta.title) // 设置页面标题

  const hasToken = getToken() // 确定用户是否登录
  if (hasToken) { // 如果已登录
    if (to.path === '/login') { // 且要跳转至的页面为登陆页面
      //则重定向至主页
      next({
        path: '/'
      })
      Nprogress.done()
    } else { // 要跳转至的页面为其他页面
      // 获取用户信息
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) { // 如果已获得用户信息，则继续跳转至目标页面
        next()
      } else {
        try {
          await store.dispatch('user/getInfo') // 再次获取用户信息
          next()
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`) // 跳转至登录页面进行登录后重定向到原定目标页面
          Nprogress.done()
        }
      }
    }
  } else { // 如果未登录
    if(whiteList.indexOf(tp.path) !== -1) { // 如果目标页面在白名单内
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      Nprogress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})