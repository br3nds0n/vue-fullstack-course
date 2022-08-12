import { createStore } from 'vuex'

export default createStore({
  state: {
    products: []
  },
  mutations: {
    addProducts (state, payload) {
      state.products.push(payload)
    }
  },
  actions: {
    addProdutos ({ commit }, payload) {
      commit('addProducts', payload)
    }
  },
  modules: {
  }
})
