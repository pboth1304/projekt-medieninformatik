import { createRouter, createWebHistory } from 'vue-router';
import HistoryPage from '@/views/HistoryPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HistoryPage
    }
  ]
});

export default router;
