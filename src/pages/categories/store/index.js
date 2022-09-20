import axios from 'axios'
import headers from '../../../auth'

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
      axios.get('http://localhost:5000/api/categories', { headers }).then(res => {
        commit('getCategoriesM', res.data)
      })
    }
  }

}
