<!-- LoginPage.vue -->
<template>
    <v-container fluid>
      <v-row align="center" justify="center" style="height: 100vh;">
        <v-col>
          <v-card class="login-card">
            <v-card-title class="title-with-line">Wooza Data Dashboard</v-card-title>
  
            <!-- Login Form -->
            <v-form @submit.prevent="login">
              <v-text-field v-model="id" label="ID" outlined></v-text-field>
              <v-text-field v-model="password" label="Password" type="password" outlined></v-text-field>
              <v-btn type="submit" color="primary" class="text-h5">Login</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        id: "",
        password: "",
      };
    },
    methods: {
      login() {
        // Simulate login logic for demonstration purposes
        const isValidUser = true; // Replace with your actual login logic
  
        if (isValidUser) {
          // Redirect to the dashboard page after successful login
          this.$router.push('/'); // Assuming your dashboard route is '/'
        } else {
          // Handle unsuccessful login (show error message, etc.)
          console.error("Invalid login credentials");
        }
      },
    },
  };
  </script>
<style scoped>
.login-card {
  max-width: 400px;
  padding: 20px;
  text-align: center;
  margin: auto;
}

.title-with-line {
  font-size: 40px;
  position: relative;
  text-wrap: wrap;
  text-align: left;
  line-height: 1.1em;
  margin-bottom: 20px;
  font-weight: 700;
}

.title-with-line::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-left: 2px solid black; /* Adjust the color and size as needed */
}
</style>
  