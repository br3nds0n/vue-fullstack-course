<template>
  <div class="principal">
    <div class="principal">
      <div class="topo">
        <h1>Products</h1>
        <button class="btn btn-success">
          <router-link class="link" to="/register">Add Produto</router-link>
        </button>
      </div>
      <div>
        <ul>
          <li>
            <div class="dados" id="id"><strong>id</strong></div>
            <div class="dados" id="descricao"><strong>Nome</strong></div>
            <div class="dados" id="amount"><strong>Quantidade</strong></div>
            <div class="dados" id="price"><strong>Preço</strong></div>
            <div class="dados" id="action"><strong>Ação</strong></div>
          </li>
        </ul>
      </div>
      <div v-if="products.products.length > 0">
         <div v-for="dado in products.products" :key="dado.id">
        <ul>
          <li>
            <div class="dados" id="id">{{ dado.id }}</div>
            <div class="dados" id="name">{{ dado.name }}</div>
            <div class="dados" id="amount">{{ dado.amount }}</div>
            <div class="dados" id="price">{{ valor(dado.price) }}</div>
            <div class="dados" id="action">
              <router-link
                v-bind:to="{ name: 'productsUpdate', params: { id: dado.id } }"
              >
              <button class="btn btn-primary">Atualizar</button>
              </router-link>
              <button v-on:click="excluirProduto(dado.id)" class="btn btn-danger ml-2">Deletar</button>
            </div>
          </li>
        </ul>
      </div>
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
    ...mapActions('products', ['getProducts', 'deleteProducts']),
    valor (valor) {
      return 'R$ ' + valor.toFixed(2)
    },

    async excluirProduto (id) {
      try {
        await this.deleteProducts(id)
        this.$router.go()
      } catch (e) {
        alert('Não foi possível excluir ' + e)
      }
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
    #category{
       min-width: 35%;
    }
  }
}
</style>
