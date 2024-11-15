<template>
  <div class="cadastro-container">
    <h2>Catolicismo - Cadastre um santo</h2>
    <CadastroItem @item-adicionado="adicionarItemNaLista" />
    <router-link to="/lista-santos" class="ver-lista-btn">
      Ver lista
    </router-link>

  </div>
</template>

<script setup>
import CadastroItem from '@/components/CadastroItem.vue';
import { inject } from 'vue';

const adicionarItem = inject('adicionarItem');

function adicionarItemNaLista(item) {
  adicionarItem(item);
  alert('Item adicionado com sucesso!');
}
</script>

<style scoped>
.cadastro-container {
  padding: 2rem;
  width: 50%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-height: 100vh;
}

.ver-lista-btn {
  color: #2a8b83;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 20px;
  margin-top: 20px;
  border: 1px solid #2a8b83;
  border-radius: 8px;
  display: inline-block;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;
}

.ver-lista-btn:hover {
  background-color: #2a8b83;
  color: #ffffff;
}

h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  text-align: left;
}
</style>
