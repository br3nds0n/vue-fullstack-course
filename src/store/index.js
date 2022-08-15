import Vuex from 'vuex'
import Axios from 'axios'

const categories = {
  state: {
    categories: []
  }
}

const products = {
  state: {
    products: []
  },

  mutations: {
    getProductsM (state, payload) {
      state.products = payload
    }
  },

  actions: {
    getProducts ({ commit }) {
      Axios.get('http://localhost:5000/api/produtos').then(res => {
        console.log(res.data)
        commit('getProductsM', res.data)
      })
    }
  }
}

const store = new Vuex.Store({
  modules: {
    categories,
    products
  }
})

export default store
