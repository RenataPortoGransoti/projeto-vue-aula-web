<template>
  <div>
    <h2>Cadastro de Item</h2>
    <form @submit.prevent="adicionarItem">
      <div>
        <label for="nome">Nome do Item:</label>
        <input type="text" v-model="nome" id="nome" required />
      </div>

      <div>
        <label for="descricao">Descrição:</label>
        <textarea v-model="descricao" id="descricao" required></textarea>
      </div>

      <button type="submit">Adicionar Item</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      descricao: ''
    };
  },
  methods: {
    adicionarItem() {
      const novoItem = {
        id: Date.now(),
        nome: this.nome,
        descricao: this.descricao
      };

      this.$emit('item-adicionado', novoItem);

      // Limpa os campos do formulário
      this.nome = '';
      this.descricao = '';
    }
  }
};
</script>
