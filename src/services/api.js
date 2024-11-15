import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://raw.githubusercontent.com/erickouassi/openPrayers/main/basic_prayers.json',
  timeout: 5000,
});

export default {
  getOracaoDoDia() {
    return apiClient.get('/prayers/daily');
  },
  getSantos() {
    return apiClient.get('/saints');
  },
};
