import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from './pages/ProductsList.vue';
import UserCart from './pages/UserCart.vue';
import ShopAdmin from './pages/ShopAdmin.vue';

import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'main', path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
    {
      path: '/admin',
      meta: { needsAuth: true },
      component: ShopAdmin,
      beforeEnter(to, next) {
        if (store.getters.isUserAuthenticated === false) {
          next({ name: 'main' });
        }
      },
    },
  ],
});

export default router;
