import * as types from './mutation-types'
import Axios from 'axios'
import headers from '../../../auth'

export const getProducts = ({ commit }) => {
  Axios.get('http://localhost:5000/api/produtos', { headers }).then((res) => {
    commit(types.GET_PRODUCTS, res.data)
  })
}

export const addProducts = ({ commit }, add) => {
  Axios.post('http://localhost:5000/api/produtos', add, { headers }).then((res) => {
    commit(types.ADD_PRODUCTS, res.data)
  })
}

export const findProductById = ({ commit }, id) => {
  Axios.get('http://localhost:5000/api/produtos/' + id, { headers }).then(res => {
    commit(types.FIND_PRODUCTS, res.data)
  })
}

export const updateProducts = ({ commit }, add) => {
  Axios.put('http://localhost:5000/api/produtos/' + add.id, add, { headers }).then(res => {
    commit(types.UPDATE_PRODUCTS, res.data)
  })
}

export const deleteProducts = ({ commit }, id) => {
  Axios.delete('http://localhost:5000/api/produtos/' + id, { headers }).then(res => {
    commit(types.DELETE_PRODUCTS, res.data)
  })
}
