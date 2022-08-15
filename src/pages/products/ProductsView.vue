<template>
  <div class="principal">
    <div class="principal">
      <h1>Products</h1>
      <div>
        <ul>
          <li>
            <div class="dados" id="id"><strong>id</strong></div>
            <div class="dados" id="descricao"><strong>Nome</strong></div>
            <div class="dados" id="amount"><strong>Quantidade</strong></div>
            <div class="dados" id="price"><strong>Preço</strong></div>
          </li>
        </ul>
      </div>
      <div v-for="dado in products.products" :key="dado.id">
        <ul>
          <li>
            <div class="dados" id="id">{{ dado.id }}</div>
            <div class="dados" id="name">{{ dado.name }}</div>
            <div class="dados" id="amount">{{ dado.amount }}</div>
            <div class="dados" id="price">{{ valor(dado.price) }}</div>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {}
  },
  methods: {
    ...mapActions('products', ['getProducts']),
    valor (valor) {
      return 'R$ ' + valor.toFixed(2)
    }
  },
  computed: {
    ...mapState(['products'])
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.principal {
  padding: 1%;
  padding-top: 0.1%;
  margin-top: -1%;
  .topo {
    display: flex;
    justify-content: space-around;
    padding: 2.1%;
    .btn {
      max-height: 50px;
      .link {
        text-decoration: none;
        color: white;
      }
    }
  }
  ul {
    list-style: none;
    li {
      display: flex;
      justify-content: space-around;
      border: solid 1px grey;
      padding: 1%;
    }
    .dados {
      padding: 0.7%;
      border-right: solid 1px grey;
      border-left: solid 1px grey;
    }
    #id {
      min-width: 10%;
    }
    #name {
      min-width: 35%;
      color: blue;
    }
    #descricao {
      min-width: 35%;
    }
    #amount {
      min-width: 10%;
    }
    #price {
      min-width: 14%;
    }
  }
}
</style>
