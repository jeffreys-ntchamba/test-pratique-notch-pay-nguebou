import { createRouter, createWebHistory } from 'vue-router';
import PaymentForm from '../components/PaymentForm.vue';

const routes = [
  { path: '/', component: PaymentForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
