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

const itens = inject('itens'); // Lista global de itens
const removerItem = inject('removerItem'); // Função global para remover itens
</script>


<style scoped>
.lista-itens {
  margin-top: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.mensagem-vazia {
  color: #777;
  font-style: italic;
  text-align: center;
  margin-top: 1rem;
}
</style>
