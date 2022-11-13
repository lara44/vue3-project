
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/Home.vue';
import login from '../views/Login.vue';
import dashboard from '../components/Dashboard.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: 'login',
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
];

const router = createRouter({
    history: createWebHistory(), 
    routes
});

export default router
