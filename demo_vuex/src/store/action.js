export default {
  add_actions({ commit }, obj) {
    setTimeout(() => {
      commit('ADD_MUTATION', obj)
    }, 1000);
  },
  re_actions({ commit }, obj) {
    setTimeout(() => {
      commit('RE_MUTATION', obj)
    }, 2000); 
  }
}