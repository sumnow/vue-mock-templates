import filterAPIinTest from './handledatas'

// interfaces
const obj = {
  apiIn: {url: '/wechat', method: 'post'},
  apiNot: {url: '/wechat/config', method:'post'},
}

export default filterAPIinTest(obj)
