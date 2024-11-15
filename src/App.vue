<!-- App.vue -->
<script setup>
import { ref, provide } from 'vue';

const itens = ref([]); // Lista global de itens

function adicionarItem(item) {
  itens.value.push(item);
}

function removerItem(id) {
  itens.value = itens.value.filter((item) => item.id !== id);
}

// Prover os métodos e a lista de itens para outros componentes
provide('itens', itens);
provide('adicionarItem', adicionarItem);
provide('removerItem', removerItem);
</script>

<template>
  <router-view />
</template>
