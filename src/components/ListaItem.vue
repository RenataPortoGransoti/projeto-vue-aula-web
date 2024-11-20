<template>
  <li class="item">
    <div class="item-header">
      <h3>{{ item.nome }}</h3>
      <button @click="removerItem(item.id)" class="botao-remover">Remover</button>
    </div>
    <p>{{ item.descricao }}</p>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    removerItem: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>
.item {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: box-shadow 0.3s;
}

.item:hover {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center; 
}

h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 0;
}

p {
  color: #555;
  margin-top: 0.5rem;
}

.botao-remover {
  background-color: #e53e3e;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.botao-remover:hover {
  background-color: #c53030;
}
</style>
