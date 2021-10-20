import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 属性相关的放在对应页面的computed中 
import state from './state'  //数据  mapState
import getters from './getters'  //计算属性  mapGetters
import mutations from './mutations'  //同步方法  mapMutations
import actions from './action'  //异步方法  mapActions

const moduleA = {
  state: () => ({ str: '这是vuex moduleA的数据str', }),
  mutations: {
    setStr(state, obj) {
      console.log('这是vuex moduleA的数据str mutations.js', obj)
      state.str = obj.str
    }
  },
  actions: {
    setStr_actions({ state, commit, rootState }) {
      console.log('这是vuex moduleA的数据actions', state, commit, rootState)
      setTimeout(() => {
        commit('setStr', rootState)
      }, 1000);
    },
  },
  getters: {
    getStrA(state, getters, rootState) {
      console.log('这是vuex moduleA的数据getters', state, getters, rootState)
      return state.str + '这是vuex moduleA拿到了吗'
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    a: moduleA
  }
}); 