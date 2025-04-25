<script setup lang="ts">
import YourBar  from "@/components/YourBar.vue";
import AddDrinks  from "@/components/AddDrinks.vue";
import CocktailSuggestions  from "@/components/CocktailSuggestions.vue";
import DrinkDetail from "@/components/DrinkDetail.vue";

import {ref} from "vue";
const isLoggedIn = ref(true);
function toggleLogin() {
  isLoggedIn.value = !isLoggedIn.value;
}
</script>

<template>
  <main>

    <p v-if="isLoggedIn">Welcome back!</p>
    <p v-else>Please log in.</p>
    <button @click="toggleLogin">Toggle Login</button>

  </main>
</template>




```
