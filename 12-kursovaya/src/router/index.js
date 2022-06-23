import { createRouter, createWebHistory } from 'vue-router'
import Tasks from "@/views/Tasks";
import New from "@/views/New";
import Task from "@/views/Task";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Tasks
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/task',
      name: 'task',
      component: Task
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
