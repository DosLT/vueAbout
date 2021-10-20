import { ADD_MUTATION, RE_MUTATION, TOTAL_MUTATION } from "./mutation-types"

export default {
  setListName(state, obj) { 
    console.log('setListName_____ obj from mutations.js', obj)
    state.listName = obj.listName
  },
  setAddList(state, obj) {
    console.log('setAddListName_____ obj from mutations.js', obj)
    state.list = obj
  },
  [ADD_MUTATION](state, obj) {
    console.log('ADD_MUTATION obj from mutations.js', obj)
    state.count = obj.count
    this.commit('TOTAL_MUTATION')
  },
  [RE_MUTATION](state, obj) {
    state.count = obj.count
    this.commit('TOTAL_MUTATION')
  },
  [TOTAL_MUTATION](state) {
    console.log(state)
    state.totalMoney = state.count * 10
  }
}