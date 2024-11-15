<template>
  <div class="cadastro-container">
    <h2>Catolicismo - Cadastre um santo</h2>
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
      console.log('Santos cadastrados:', item);
    }
  }
};
</script>

<style scoped>
.cadastro-container {
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group{
  text-align: left;
}
</style>
