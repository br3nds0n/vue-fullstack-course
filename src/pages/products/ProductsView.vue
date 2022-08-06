<template>
  <div class="principal">
    <div class="principal">
      <h1>Products</h1>
      <div v-for="dado in dados" :key="dado.id">
        <ul>
          <li>
            <div class="dados" id="id">{{ dado.id }}</div>
            <div class="dados" id="name">{{ dado.name }} </div>
            <div class="dados" id="amount">{{ dado.amount }}</div>
            <div class="dados" id="price">{{ dado.price }}</div>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import dados from '../../data/data.json'
export default {
  data () {
    return {
      dados: dados
    }
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
