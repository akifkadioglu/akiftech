
import Home from '../pages/home.vue'
import Post from '../pages/post.vue'
import HomeLayout from '../layouts/home.vue'
import PostLayout from '../layouts/post.vue'

import { createRouter, createWebHistory } from 'vue-router'
export const names = {
    HOME: "home",
    POST: "post",
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
        path: '/post',
        meta: { layout: PostLayout },
        redirect: {
            name: names.HOME
        },
        children: [
            {
                path: ':id',
                name: names.POST,
                component: Post,
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