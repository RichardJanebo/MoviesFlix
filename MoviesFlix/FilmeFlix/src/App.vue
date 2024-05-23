<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Registrar</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Estilos básicos para sua aplicação */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background-color: #343a40;
  color: #fff;
  padding: 10px 0;
}

nav {
  display: flex;
  justify-content: space-around;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 10px;
}

nav a:hover {
  text-decoration: underline;
}

main {
  margin-top: 20px;
}
</style>
