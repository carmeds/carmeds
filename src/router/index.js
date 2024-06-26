import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'
// import ExperieciaView from "../views/ExperienciaView.vue";
// import SkillsView from '../views/SkillsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: PrincipalView
    },
    {
      path: '/experiencia',
      name: 'experiencia',
      component: () => import('../views/ExperienciaView.vue')
    },
    {
      path: '/estudios',
      name: 'estudios',
      component: () => import('../views/EstudiosView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue')
    },

  ]
})

export default router
