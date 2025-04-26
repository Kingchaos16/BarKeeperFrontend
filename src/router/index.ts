import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YourBarView from "@/views/YourBarView.vue";
import LoginView from "@/views/LoginView.vue";
import ProfileView from "@/views/ProfileView.vue";
import YourShoppingListView from "@/views/YourShoppingListView.vue";
import AddDrinks from "@/components/AddDrinks.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import EditShoppingList from "@/components/EditShoppingList.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/your-bar',
      name: 'Your Bar',
      component: YourBarView,
    },
    {
      path: '/your-shopping-list',
      name: 'Your Shopping List',
      component: YourShoppingListView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView,
    },
    {
      path: '/add-drinks',
      name: 'Add Drinks',
      component: AddDrinks
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/edit-shopping-list',
      name: 'Edit Shopping List',
      component: EditShoppingList
    },

  ],
})

export default router
