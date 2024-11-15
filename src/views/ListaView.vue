<template>
  <div class="lista-itens">
    <h2>Santos Adicionados</h2>

    <div v-if="itens.length === 0" class="mensagem-vazia">
      <p>Nenhum santo foi adicionado ainda.</p>
    </div>

    <ul v-else>
      <ListaItem
        v-for="item in itens"
        :key="item.id"
        :item="item"
        :removerItem="removerItem"
      />
    </ul>
  </div>
</template>

<script>
import ListaItem from '@/components/ListaItem.vue';

export default {
  components: {
    ListaItem
  },
  props: {
    itens: {
      type: Array,
      required: true
    }
  },
  methods: {
    removerItem(id) {
      this.$emit('remover-item', id);
    }
  }
};
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
