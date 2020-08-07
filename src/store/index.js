import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index:'',
    zan:22
  },
  mutations: {
    add:function(state){
      state.index = state.index+1;
    }
  },
  actions: {
  },
  modules: {
  }
})
