import * as types from './mutation-types'
import Axios from 'axios'

export const getProducts = ({ commit }) => {
  Axios.get('http://localhost:5000/api/produtos').then((res) => {
    commit(types.GET_PRODUCTS, res.data)
  })
}

export const addProducts = ({ commit }, add) => {
  Axios.post('http://localhost:5000/api/produtos', add).then((res) => {
    commit(types.ADD_PRODUCTS, res.data)
  })
}
