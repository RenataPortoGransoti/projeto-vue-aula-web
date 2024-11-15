<template>
  <div class="basic-prayers">
    <h2>Orações Básicas</h2>
    <p v-if="loading">Carregando orações...</p>
    <p v-if="erro">{{ erro }}</p>
    <ul v-if="!loading && prayers.length">
      <li v-for="(prayer, index) in prayers" :key="index">
        <h3>{{ prayer.tilte }}</h3>
        <p>{{ prayer.prayerText }}</p>
      </li>
    </ul>
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
  async mounted() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/erickouassi/openPrayers/main/basic_prayers.json"
      );
      if (!response.ok) throw new Error("Erro ao carregar os dados.");
      this.prayers = await response.json();
      // eslint-disable-next-line no-unused-vars
    } catch (erro) {
      this.error = "Erro ao carregar as orações.";
    } finally {
      this.loading = false;
    }
  },
};


</script>
