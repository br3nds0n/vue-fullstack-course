import Vuex from 'vuex'
import { store as products } from './../pages/products'

const categories = {
  state: {
    categories: []
  }
}

const store = new Vuex.Store({
  modules: {
    categories,
    products
  }
})

export default store
