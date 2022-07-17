import axios from 'axios'
// import Message from 'element-ui's
import store from '@/store'
const request = axios.create({
  baseURL: 'http://liufusong.top:8899/api/private/v1/',
  timeout: 8000
})
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = store.state.token

  if (token) {
    config.headers.Authorization = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
export default request
