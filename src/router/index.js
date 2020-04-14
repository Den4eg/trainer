import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Donations from '../views/Donations.vue';
import Trainer from '../views/Trainer.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/trainer',
        name: 'trainer',
        component: Trainer,
    },

    {
        path: '/donate',
        name: 'Donations',
        component: Donations,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
