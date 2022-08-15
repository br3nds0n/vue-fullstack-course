import Vuex from 'vuex'

import { store as products } from './../pages/products'
import { store as categories } from './../pages/categories'

const store = new Vuex.Store({
  modules: {
    categories,
    products
  }
})

export default store
