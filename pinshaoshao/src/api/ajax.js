import axios from 'axios'
axios.defaults.baseURL = process.env.BASE_URL

// 封装axios 并设置了默认值
export default function ajax(url = '', params = {}, type = 'GET') {
  let promise;
  return new Promise((resolve, reject) => {
    // get 方法拼接请求字符串 key=value&key=value
    if (type === 'GET') {
      let paramsStr = '';
      Object.keys(params).forEach(key => {
        paramsStr += key + '=' + params[key] + '&'
      })
      if (paramsStr !== '') {
        paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
      }
      // 这里写的url 是 完整路径， 待定
      url += '?' + paramsStr;
      promise = axios.get(url)

    } else if (type === 'POST') {
      promise = axios.post(url, params)
    }
    // 返回结果
    promise.then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error)
    })
  })
}
