import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/entrar',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/cadastrar',
      name: 'register',
      component: () => import('@/views/Register.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
      meta: {
        requiresAuth: true,
      }
    },
  ]
})

export default routes;
