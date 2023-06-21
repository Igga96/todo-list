import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    REMOVE_NOTE: (state, idx) => {
      state.notes.splice(idx, 1)
    }
  },
  actions: {
    REMOVE_NOTE ({ commit }, idx) {
      commit('REMOVE_NOTE', idx)
    }
  },
  getters: {
    NOTES (state) {
      return state.notes
    }
  }
})
