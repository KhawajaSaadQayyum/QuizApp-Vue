import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import QuizesView from "../views/QuizesView.vue"
import Quiz from "../views/QuizView.vue"
// import App from "../"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quizes',
      component: QuizesView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    },
  ]
})

export default router
