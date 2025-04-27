<script setup lang="ts">
import { ref } from "vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

const currentView = ref("Login");
const loginRef = ref(null);


function showRegister() {
  currentView.value = "Register";
}

function triggerLoginAction() {
  if (loginRef.value) {
    loginRef.value.loginAction();
  }
}
const isLoggedIn = ref(true);
function toggleLogin() {
  isLoggedIn.value = !isLoggedIn.value;
}
</script>

<template>
  <main>
    <Login v-show="currentView === 'Login'" ref="loginRef" />
    <Register v-show="currentView === 'Register'" />

    <button @click="triggerLoginAction">Login</button>






  </main>
</template>

<style scoped>
button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
