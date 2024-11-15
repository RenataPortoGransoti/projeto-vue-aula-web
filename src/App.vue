<script setup>
import CadastroView from './views/CadastroView.vue';
import { ref } from 'vue';

// Estado que controla a tela ativa
const currentView = ref('cadastro');

// // Função para alternar entre as telas
// function changeView(view) {
//   currentView.value = view;
// }
</script>

<template>
  <main>
    <CadastroView v-if="currentView === 'cadastro'" />
  </main>
</template>

<style scoped>


main {
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
}
</style>
