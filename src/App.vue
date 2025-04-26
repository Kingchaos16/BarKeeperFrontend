<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const showProfileDropdown = ref(false);
const showLoginDropdown = ref(false);

function toggleProfileDropdown() {
  showProfileDropdown.value = !showProfileDropdown.value;
}

function toggleLoginDropdown() {
  showLoginDropdown.value = !showLoginDropdown.value;
}

function logout() {
  console.log('User logged out');
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/your-bar">Your Bar</RouterLink>
      <RouterLink to="/your-shopping-list">Your Shopping List</RouterLink>
      <div class="dropdown">
        <button @click="toggleLoginDropdown">Login</button>
        <div v-if="showLoginDropdown" class="dropdown-menu">
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/register">Register</RouterLink>
        </div>
      </div>
      <div class="dropdown">
        <button @click="toggleProfileDropdown">Profile</button>
        <div v-if="showProfileDropdown" class="dropdown-menu">
          <RouterLink to="/profile">View Profile</RouterLink>
          <button @click="logout">Logout</button>
          <RouterLink to="/settings">Settings</RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}

header {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #f8f9fa;
  padding: 0.5rem;
  font-size: 1rem;
}

nav a, nav button {
  text-decoration: none;
  color: #007bff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

nav a:hover, nav button:hover {
  background-color: #e9ecef;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #0056b3;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dropdown-menu a, .dropdown-menu button {
  text-decoration: none;
  color: #007bff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  background: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-menu a:hover, .dropdown-menu button:hover {
  background-color: #e9ecef;
}
</style>
