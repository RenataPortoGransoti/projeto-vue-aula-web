<template>
  <div class="lista-itens">
    <h2>Santos Adicionados</h2>
    <ul>
      <li v-for="item in itens" :key="item.id" class="item">
        <h3>{{ item.nome }}</h3>
        <p>{{ item.descricao }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    itens: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.lista-itens {
  margin-top: 2rem;
}

.item {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.2rem;
  color: #333;
}

p {
  color: #555;
}
</style>
