import axios from 'axios'
import iView from 'iview';

axios.defaults.baseURL = 'http://localhost:8080/api'
// 请求拦截器
axios.interceptors.request.use(config => {
  // 如果有token 那么我们要带上token请求
  if (localStorage.token) {
    config.headers.accessToken = localStorage.accessToken;
  }

  iView.LoadingBar.start();
  return config;
}, error => Promise.reject(error));

// 响应拦截器

axios.interceptors.response.use(
  response => {
    if (response.data.code !== 100){
      // 提示错误的loading
      return iView.Notice.error({
        title: response.data.msg
      });
    }

    iView.LoadingBar.finish();
    return response.data
  },
  error => Promise.reject(error)
)

// axios.post 请求

/* eslint-disable */
export const $post = async (path, data = {}) => await axios.post(path, data);

// axios.get 请求

/* eslint-disable */
export const $get = async (path, params = {}) => await axios.get(path, {params});


/**
 * 
 *  当然你也可以用 Promise 
 *  export const $get = (path, params = {}) => {
 *      new Promise((resolve, reject) => {
 *          axios.get(path, params)
 *            .then(res => resolve(res))
 *            .catch(err => reject(err))
 *      })
 *  }
 * 
 */ 