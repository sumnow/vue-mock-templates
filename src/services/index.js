import fetch from '../utils/fetch';
import API_test from './testAPI'


// 接口
const obj = {
  apiIn: {url: '/wechat', method: 'post'},
  apiNot: {url: '/wechat/config', method:'post'},
}



const filterAPIinTest =  (obj) => {

  // mock 地址
  const API_test_HOST = 'http://138.128.192.220:9000'

  const API_test_list = Object.keys(API_test)

  const outobj = {}

  const _initParam  = obj => {
    Object.keys(obj).filter((e)=> API_test_list.includes(e)).map(e=>{
      obj[e].url= `${API_test_HOST}${obj[e].url}`;
      obj[e].message = API_test[e];
      obj[e].method = 'GET';
    })
  }


  _initParam(obj)

  Object.keys(obj).map(e=>{
    const c = obj[e]
    outobj[e] = param => {
      const {config, config:{url, params, method}} = {config:{url: c.url, params:param, method: c.method}}
      const configs = config
      configs.params.message = c.message
      fetch(configs)
    }
  })

  return outobj
}


export default filterAPIinTest(obj)
