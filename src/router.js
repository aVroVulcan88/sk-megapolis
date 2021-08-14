import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About.vue'),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('./views/Services.vue'),
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('./views/Portfolio.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('./views/Contacts.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
