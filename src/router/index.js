import { createRouter, createWebHistory } from 'vue-router';
import CadastroView from '@/views/CadastroView.vue';

const routes = [
  {
    path: '/',
    component: CadastroView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
