import axios from 'axios'

export default {

  state: {
    categories: []
  },

  mutations: {
    getCategoriesM (state, payload) {
      state.categories = payload
    }
  },

  actions: {
    getCategories ({ commit }) {
      axios.get('http://localhost:5000/api/categories').then(res => {
        commit('getCategoriesM', res.data)
      })
    }
  }

}
