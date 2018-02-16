import axios from 'axios';

const HOST = process.env.HOST;

/**
 * @param {obj} config
 * @param {*} url
 * @param {*} params
 * @param {*} method
 */

// const fetch = (url, params, method, formSubmit = false) => {
const fetch = configs => {
  let formSubmit = configs.formSubmit || false
  if(configs.url.indexOf('http') < 0) {
    configs.url = `${HOST}${configs.url}`
  }
  const config = {
    url: configs.url,
    method: configs.method.toLocaleUpperCase() || 'GET',
  }
  if (formSubmit) {
    config.headers = {'Content-Type': 'application/x-www-form-urlencoded'},
    config.transformRequest = [(data) => Object.entries(data).map(kv => `${kv[0]}=${kv[1]}`).join('&')]
    if (config.method === 'GET' || config.method === 'DELETE') {
      config.params = configs.params;
    } else {
      config.data = configs.params;
    }
    if (!config.url) {
      return;
    }
    config.data = config.data || {};
    if (config.method === 'DELETE') {
      config.data = {};
    }
    return new Promise((resovle, reject) => {
      axios(config)
        .then((res) => {
          const data = res.data;
          resovle(data);
        })
        .catch((err) => {
          let error = { content: '服务器错误' };
          if (err && err.response && err.response.data && err.response.data.error) {
            error = err.response.data.error;
          }
          reject(error);
        });
    });
  } else {
    if (config.method === 'GET' || config.method === 'DELETE') {
      config.params = configs.params;
    } else {
      config.data = configs.params;
    }
    return new Promise((resovle, reject) => {
      axios(config)
        .then(res => {
          console.log(res.data)
          if (res.data || res.data.result) {
            resovle(res.data);
          } else {
            reject(res.data || 'fetch__err');
          }
        })
        .catch(err => {
          reject((err.response && err.response.data && err.response.data.body) || 'request fail');
        });
    });
  }
};

export default fetch;
