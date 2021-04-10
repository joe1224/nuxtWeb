import axios from 'axios'
import {
  Message,
  Loading
} from 'element-ui'

import store from "@/store/index.js";

const http = axios.create({
  baseURL: '',
  timeout: 15000,
  withCredentials: true
})
/**
 * 请求拦截
 */
http.interceptors.request.use(config => {

  config.headers['Authorization'] = 'Basic ' + 'c2FiZXI6c2FiZXJfc2VjcmV0'; // 请求头带上token

  let udata = store().getters.userData
  if(udata && udata.access_token && udata.access_token.length > 0) {
    let token = udata.access_token
    let tid = udata.tenant_id

    config.headers['Blade-Auth'] = 'bearer ' + token
    config.headers['Tenant-Id'] = tid
  } else {
    config.headers['Blade-Auth'] = ''
    config.headers['Tenant-Id'] = ''
  }
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  if(response.data.error_code == 401) { // 401, token失效
    Message({
      message: response.data.error_description,
      type: 'error',
      duration: 1000,
      onClose: function(e) {
        if(window.location.pathname != '/') {
          window.location.href = "/";
        }
      }
    });
  }
  return response
}, error => {
  // 401 在error中返回
  if(error.response.status == 401) { // 401, token失效
    Message({
      message: error.response.data.msg,
      type: 'error',
      duration: 1000,
      onClose: function(e) {
        if(window.location.pathname != '/') {
          store().commit('clearUserData')
          store().commit('setNavbarIndex',0)
          window.location.href = "/";
        }
      }
    });
  }
  return Promise.reject(error)
});

/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = (actionName) => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/api/]前缀做代理拦截!
  return(process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/web/' : window.SITE_CONFIG.baseUrl) +
    actionName
}

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}) => {
  var defaults = {
    't': new Date().getTime()
  };
  return params
};

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, contentType = 'json') => {
  var defaults = {
    't': new Date().getTime()
  };
  return contentType === 'json' ? JSON.stringify(data) : JSON.stringify(data)
};

export default http