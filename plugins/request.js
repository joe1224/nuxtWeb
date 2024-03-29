import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: process.env.baseURL, // url = base url + request url
  // baseURL: 'http://api-eadmin-test.haioupai.com', // test
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
    //   config.headers['Authorization'] = 'Bearer ' + getToken()
    // }
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
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      const normalCode = [4002, 4003, 5006]
      if (!normalCode.includes(res.code)) {
        Message.closeAll()
        setTimeout(() => {
          Message({
            message: res.message || 'Error',
            type: 'error',
            duration: 5 * 1000
          })
        }, 0)
      }

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 4002 || res.code === 4003) {
        Message.closeAll()
        Message({
          message: '登录失效,请重新登录',
          type: 'error',
          duration: 5 * 1000
        })
        store.dispatch('user/resetToken').then(() => {
          router.push('/login')
        })
        // })
      }
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message.closeAll()
    setTimeout(() => {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    }, 0)
    return Promise.reject(error)
  }
)

export default service
