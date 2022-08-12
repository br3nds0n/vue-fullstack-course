<template>
  <div>
    <div class="categories">
      <h1>Categories</h1>
      <div class="list" v-for="category in categories" :key="category.id">
        <div class="dados">{{category.id}}</div>
        <div class="dados">{{category.name}}</div>
      </div>
    </div>
    <div class="produtos">
      {{ products }}
      <input v-model="produtos" type="text">
      <button v-on:click="addProdutos(produtos)" class="btn btn-primary mt-4">+</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      categories: {},
      produtos: ''
    }
  },
  created () {
    this.getCategories()
  },
  computed: {
    ...mapState(['categories', 'products'])
  },
  methods: {
    getCategories () {
      axios.get('http://localhost:5000/api/categories').then(response => {
        this.categories = response.data
      })
    },
    ...mapActions(['addProdutos'])
  }
}
</script>

<style lang="scss" scoped>

.categories{
  align-items: center;
  text-align: center;
  .list{
    width: 50%;
    margin-left: 22.5%;
    align-items: center;
    padding: 1%;
    display: flex;
    justify-content: center;
    border: 0.1px solid grey;
    .dados{
      padding: 0.7%;
    }
  }
}

</style>
