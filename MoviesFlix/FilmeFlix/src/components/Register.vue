<template>
    <div>
      <h1>Registrar</h1>
      <form @submit.prevent="register">
        <input v-model="name" type="text" placeholder="Nome" required>
        <input v-model="email" type="email" placeholder="Email" required>
        <input v-model="password" type="password" placeholder="Senha" required>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      ...mapActions(['register']),
      async register() {
        try {
          await this.register({
            name: this.name,
            email: this.email,
            password: this.password
          });
          this.$router.push('/');
        } catch (err) {
          console.error("Registration failed:", err);
        }
      }
    }
  };
  </script>
  