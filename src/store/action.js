
export default {
  changeFont (context,...args){
    context.commit('FONTRATE_CHANGE',...args)
  },
  getMobile(context, ...args) {
    context.commit('MOBILE_CHANGE',...args)
  }
}
