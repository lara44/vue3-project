
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/Home.vue';
import login from '../views/Login.vue';
import dashboard from '../components/Dashboard.vue';
import { useLoginStore } from '../stores/loginStore';

const requiredAuth = async() =>{
    const loginStore = useLoginStore();
    const authToken = await localStorage.getItem('spa_token')
    if(authToken) {
        loginStore.token = authToken
        const auth = await loginStore.getAuth(loginStore.token)
        console.log("entró", auth, loginStore.token)
    } else {
        router.push('/login');
    }
}

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
        component: home,
        beforeEnter: requiredAuth
        // beforeEnter: (to, from, next) => {
        //     // const loginS = loginStore();
        //     console.log(localStorage.getItem('spa_token'), "entró");
        //     if(!localStorage.getItem('spa_token')){
        //         router.push('/login');
        //     }
        //     next();
        // }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
