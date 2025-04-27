<script setup lang="ts">

</script>

<template>
  <div class="login-container">
    <form class="login-form">
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.login-form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
