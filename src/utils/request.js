import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000 // request timeout
})

// request interceptor 请求过滤器
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token --['X-Token'] as a custom key.
      // please modify it according to the actual situation.
      config.headers[process.env.VUE_APP_TOKEN_KEY] = getToken()
    }
    // console.log(config)
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code.
   */
  response => {
    const res = response.data
    return res
    // 导出
    // const headers = response.headers
    // if (headers['content-type'] === 'application/vnd.ms-excel;charset=UTF-8' ||
    //   headers['content-type'] === 'application/vnd.ms-word;charset=UTF-8') {
    //   return res
    // }
    // const refreshToken = response.headers['refresh-token']
    // if (refreshToken !== undefined && refreshToken !== '') {
    //   Cookies.set('accessToken', refreshToken)
    // }
    // // if the custom code is not 200, it is judged as an error.
    // if (res.code !== 200) {
    //   // 50008: Illegal token 非法令牌; 50012: Other clients logged in 其他登录的方式; 50014: Token expired 令牌过期;
    //   if (res.code === 50008 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm('登录已过期，您可以重新登录，也可以继续留在本页面', '系统提示', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload()
    //       })
    //     })
    //   } else if (res.code === 50012) {
    //     // to re-login
    //     MessageBox.confirm('您的账号在其他地方登陆，您可以重新登录，也可以继续留在本页面', '系统提示', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload()
    //       })
    //     })
    //   } else {
    //     Message({
    //       message: res.message || 'error',
    //       type: 'error',
    //       duration: 10 * 1000
    //     })
    //   }
    //   // return Promise.reject(res.message || 'error')
    //   return res
    // } else {
    //   return res
    // }
  },
  error => {
    console.log('请求失败,' + error) // for debug
    if (error && error.response) {
      console.log(error)
      console.log(error.code)
      console.log(error.message)
      //  1.判断请求超时
      if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        console.log('根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案')
        error.message = '服务器君开小差了，请稍后再试！'
        Message({
          message: error,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(error)
      }
      console.log(error.response)
      switch (error.response.status) {
        case 400: error.message = '请求错误'; break
        case 401: error.message = '未授权，请登录'; break
        case 403: error.message = '拒绝访问'; break
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
        case 408: error.message = '请求超时'; break
        case 500: error.message = '服务器内部错误'; break
        case 501: error.message = '服务未实现'; break
        case 502: error.message = '网关错误'; break
        case 503: error.message = '服务不可用'; break
        case 504: error.message = '网关超时'; break
        case 505: error.message = 'HTTP版本不受支持'; break
        default: break
      }
    }
    Message({
      message: error,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)


export default service
