import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Second from '../components/Second.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/second', component: Second }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
