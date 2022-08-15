<template>
  <h4>Atualizar Produto</h4>
  <h3>{{ id }}</h3>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .row {
      padding: 1.4%;
      display: flex;
      align-items: center;
      input {
        border: none;
        border-bottom: 1px solid grey;
      }
      input:focus {
        outline: none;
      }
    }
  }
}
</style>
