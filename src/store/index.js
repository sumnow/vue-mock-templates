import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './action';

Vue.use(Vuex);

const state = {
  p: '',
  mobile: '',
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  // plugins: [storeState],
});
