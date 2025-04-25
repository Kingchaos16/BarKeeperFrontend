import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Your Bar',
      name: 'Your Bar',
      component: () => import('../views/YourBarView.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/CocktailSuggestions',
      name: 'Cocktail Suggestions',
      component: () => import('../views/CocktailSuggestionsView.vue'),
    }
  ],
})

export default router
