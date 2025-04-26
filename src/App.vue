<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>


      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/your-bar">Your Bar</RouterLink>
        <RouterLink to="/your-shopping-list">Your Shopping List</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/Profile">Profile</RouterLink>
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
  position: fixed; /* Fix the header at the top */
  top: 0;
  left: 0;
  width: 100%; /* Make it span the full width */
  z-index: 1000; /* Ensure it stays above other elements */
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; /* Space between links */
  background-color: #f8f9fa; /* Optional: Add a background color */
  padding: 0.5rem; /* Reduce padding to make it smaller */
  font-size: 1rem;
}

nav a {
  text-decoration: none;
  color: #007bff; /* Default link color */
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #e9ecef;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #0056b3;
}
</style>
