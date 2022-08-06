<template>
  <div>
    <div class="categories">
      <h1>Categories</h1>
      <div class="list">
        {{categories}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      categories: {}
    }
  },
  created () {
    this.getCategories()
  },
  methods: {
    getCategories () {
      axios.get('http://localhost:5000/api/categories').then(response => {
        this.categories = response.data
      })
    }
  }
}
</script>

<style></style>
