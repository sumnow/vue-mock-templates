import filterAPIinTest from './handledatas'

// interfaces
const obj = {
  apiIn: id => {
    return {url: `/wechat/${id}`, method: 'post'}
  },
  apiIn2: {url: '/wechat/asd', method:'post'},
  apiIn3: {url: '/wechat/es', method:'post'},
  apiNot: {url: '/wechat/config', method:'post'},
}

export default filterAPIinTest(obj)
