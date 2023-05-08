import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/forums',
      name: 'forums',
      component: () => import("../views/forums/ForumsView.vue"),
    },
    {
      path: '/forums/:id',
      name: 'forum',
      component: () => import("../views/topics/TopicsView.vue"),
    }
  ],
})

export default router
