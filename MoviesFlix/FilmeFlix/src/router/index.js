import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue'; // Import the Register component

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register } // Add the register route
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
