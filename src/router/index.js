
import Home from '../pages/home.vue'
import Groups from '../pages/groups.vue'
import Post from '../pages/post.vue'
import HomeLayout from '../layouts/home.vue'
import PostLayout from '../layouts/post.vue'

import { createRouter, createWebHistory } from 'vue-router'
export const names = {
    HOME: "home",
    POST: "post",
    GROUPS: "groups",
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
        path: '/',
        meta: { layout: PostLayout },
        redirect: {
            name: names.HOME
        },
        children: [
            {
                path: 'group/:id',
                name: names.GROUPS,
                component: Groups,
            },
            {
                path: 'post/:id',
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