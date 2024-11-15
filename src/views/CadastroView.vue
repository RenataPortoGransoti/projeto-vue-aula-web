<template>
  <div class="cadastro-container">
    <h2>Cadastro de Itens</h2>
    <CadastroItem @item-adicionado="adicionarItemNaLista" />
  </div>
</template>

<script>
import CadastroItem from '@/components/CadastroItem.vue';

export default {
  components: {
    CadastroItem
  },
  methods: {
    adicionarItemNaLista(item) {
      console.log('Item cadastrado:', item);
    }
  }
};
</script>

<style scoped>
.cadastro-container {
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}
</style>
