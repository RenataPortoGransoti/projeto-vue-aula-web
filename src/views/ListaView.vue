<template>
  <div class="lista-itens">
    <h2>Santos Adicionados</h2>
    <router-link to="/" class="cadastrar-santo">
      Cadastrar santo
    </router-link>
    <div v-if="itens.length === 0" class="mensagem-vazia">
      <p>Nenhum santo foi adicionado ainda.</p>
    </div>

    <ul v-else>
      <ListaItem v-for="item in itens" :key="item.id" :item="item" :removerItem="removerItem" />
    </ul>
  </div>
</template>

<script setup>
import ListaItem from '@/components/ListaItem.vue';
import { inject } from 'vue';

const itens = inject('itens');
const removerItem = inject('removerItem');
</script>


<style scoped>
.lista-itens {
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

h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.cadastrar-santo {
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

.cadastrar-santo:hover {
  background-color: #2a8b83;
  color: #ffffff;
}

.mensagem-vazia {
  color: #777;
  font-style: italic;
  text-align: center;
  margin-top: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

ul > li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

ul > li:last-child {
  border-bottom: none;
}
</style>

