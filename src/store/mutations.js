/* eslint no-param-reassign: ["error", { "props": false }] */

export default {
  STAFF_CHANGE(state, val) {
    state.staff = val;
  },
  FONTRATE_CHANGE(state, val){
    state.fontRate = val
  },
  MOBILE_CHANGE(state, val) {
    state.mobile = val
  }
};
