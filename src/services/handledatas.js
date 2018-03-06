import fetch from '../utils/fetch';
import API_test from './testAPI'


// update datas by mock datas
const _initParam = (obj, e) => {

  // mock address
  // const API_test_HOST = 'http://138.128.192.220:9000'
  const API_test_HOST = 'http://localhost:9000'

  obj[e].url = `${API_test_HOST}${obj[e].url}`;
  obj[e].$m_message = API_test[e].replace(/[\r\n]/g, "").replace(/\ +/g, "");
  obj[e].method = 'GET';

  return obj
}

const _handleParams = obj => {

  const API_test_list = Object.keys(API_test)

  const outobj = {}

  Object.keys(obj).filter((e) => API_test_list.includes(e)).map(e => {
    outobj[e] = (param, ...args) => {
      if (typeof obj[e] === 'function') {
        obj[e] = obj[e](...args)
        console.log(obj[e])
      }
      _initParam(obj, e)
      const c = obj[e]
      const { config, config: { url, params, method } } = { config: { url: c.url, params: param, method: c.method } }
      const configs = config
      configs.params.$m_message = c.$m_message
      return fetch(configs)
    }
  })

  return outobj
}



// const _handleParams = obj => {
//   const outobj = {}

//   Object.keys(obj).map(e => {
//     outobj[e] = (param, ...args) => {
//       obj[e] = obj[e](...args)
//       const c = _initParam(obj)[e]
//       const { config, config: { url, params, method } } = { config: { url: c.url, params: param, method: c.method } }
//       const configs = config
//       configs.params.$m_message = c.$m_message
//       fetch(configs)
//     }
//   })

//   return outobj
// }




// change interface datas to mock datas we need
export default obj => _handleParams(obj)



