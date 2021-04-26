import Vue from  'vue'
import vueX from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from './getters'
Vue.use(vueX);
const state = {
  cartList : []
}

const store = new vueX.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
