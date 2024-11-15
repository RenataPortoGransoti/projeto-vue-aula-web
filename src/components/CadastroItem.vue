<template>
  <form @submit.prevent="adicionarItem" class="formulario">
    <div class="form-group">
      <label for="nome">Nome do Item:</label>
      <input type="text" v-model="nome" id="nome" required class="input-campo" />
    </div>

    <div class="form-group">
      <label for="descricao">Descrição:</label>
      <textarea v-model="descricao" id="descricao" required class="input-campo textarea"></textarea>
    </div>

    <button type="submit" class="botao">Adicionar</button>
  </form>
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

      this.nome = '';
      this.descricao = '';
    }
  }
};
</script>

<style scoped>
.formulario {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
  color: #555;
  margin-bottom: 0.5rem;
  display: block;
}

.input-campo {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.input-campo:focus {
  border-color: #2a8b83;
  outline: none;
}

.textarea {
  min-height: 100px;
  resize: vertical;
}

.botao {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  background-color: #43bdbd;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.botao:hover {
  background-color: #26838d;
}
</style>
