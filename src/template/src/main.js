// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import rem from './utils/rem';
import Log from 'console_colorpoint'

Vue.config.productionTip = false

window.log = new Log ()

log.green ([12,3,4])
log.blue([1,23,21],function asr(){return 1})

store.dispatch('changeFont',1/rem());

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
