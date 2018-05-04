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

  if (configs.url.indexOf('http') !== 0) {
    configs.url = `${HOST}${configs.url}`
  }
  
  const config = {
    url: configs.url,
    method: configs.method.toLocaleUpperCase() || 'GET',
  }
  if (formSubmit) {
    config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    config.transformRequest = [(data) => Object.entries(data).map(kv => `${kv[0]}=${kv[1]}`).join('&')]
  }
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
    // console.log('config',config)
    axios(config)
      .then(res => {
        resovle(res.data);
      })
      .catch(err => {
        console.log(err)
        reject(err && err.response && err.response.data && err.response.data.error) 
          // error = err.response.data.error;
      });
  });
};

export default fetch;
