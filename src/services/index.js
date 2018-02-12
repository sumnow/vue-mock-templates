import fetch from '../utils/fetch';
import API_test_list from './testAPI'

// mock 地址
const API_test_HOST = 'http://138.128.192.220:9000'

// 接口
const obj = {
  apiIn: {url: '/wechat', method: 'post'},
  apiNot: {url: '/wechat/config', method:'post'},
}

const filterAPIinTest =  (obj) => {
  const outobj = {}

  Object.keys(obj).filter((e)=> API_test_list.includes(e)).map(e=>{
    obj[e].url= `${API_test_HOST}${obj[e].url}`;
    obj[e].message = `$m.rint(1,3)`;
    obj[e].method = 'GET';
  })

  Object.keys(obj).map(e=>{
    let c = obj[e]
    outobj[e] = params => {
      // let {{url, params, method}} = {{url: c.url, params, method: c.method}}
      const configs = {
        url:c.url,
        params: params,
        method:c.method
      }
      configs.params.message = c.message
      fetch(configs)
    }
  })
  return outobj
}


export default filterAPIinTest(obj)
