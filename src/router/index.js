import { createRouter, createWebHistory } from 'vue-router';
import CadastroView from '@/views/CadastroView.vue';
import ListaView from '@/views/ListaView.vue';

const routes = [
  {
    path: '/',
    component: CadastroView
  },
  {
    path: '/lista-santos',
    component: ListaView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
