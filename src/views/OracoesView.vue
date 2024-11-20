<template>
  <div class="basic-prayers">
    <h2>Orações Básicas</h2>
    <p v-if="loading">Carregando orações...</p>
    <p v-if="error">{{ error }}</p>
    <ul v-if="!loading && prayers.length">
      <li v-for="(prayer, index) in prayers" :key="index">
        <h3>{{ prayer.title }}</h3>
        <p>{{ prayer.prayerText }}</p>
      </li>
    </ul>
    <router-link to="/" class="voltar-btn">Voltar para Cadastro</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prayers: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    try {
      this.prayers = [
        {
          title: "Pai Nosso",
          prayerText:
            "Pai nosso que estais no céu, santificado seja o vosso nome. Venha a nós o vosso Reino. Seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje. Perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido. E não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
        },
        {
          title: "Ave Maria",
          prayerText:
            "Ave Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.",
        },
        {
          title: "Glória ao Pai",
          prayerText:
            "Glória ao Pai, ao Filho e ao Espírito Santo, como era no princípio, agora e sempre. Amém.",
        },
      ];
    } catch (error) {
      this.error = "Erro ao carregar as orações.";
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.basic-prayers {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 2rem;
  color: #2a8b83;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h3 {
  font-size: 1.5rem;
  color: #333;
}

p {
  font-size: 1rem;
  color: #555;
}

.voltar-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #2a8b83;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s, transform 0.3s;
}

.voltar-btn:hover {
  background-color: #237568;
  transform: scale(1.05);
}
</style>
