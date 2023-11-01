
import Home from '../pages/home.vue'
import HomeLayout from '../layouts/home.vue'

import { createRouter, createWebHistory } from 'vue-router'
const names = {
    HOME: "home",
}
const routes = [
    {
        path: '/',
        meta: { layout: HomeLayout },
        redirect: {
            name: names.HOME
        },
        children: [
            {
                path: '/home',
                name: names.HOME,
                component: Home,
            },
        ]
    },


    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})