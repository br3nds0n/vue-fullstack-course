import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import CategoriesView from '../pages/categories/CategoriesView.vue'
import ProductsView from '../pages/products/ProductsView.vue'
import ProductsRegister from '../pages/products/ProductsRegister.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/register',
    name: 'productsRegister',
    component: ProductsRegister
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
