<template>
  <div id="app">
    <!-- Use the Dashboard component as the main layout -->
    <!-- <Dashboard></Dashboard> -->
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
// import Dashboard from "@/components/DashboardLayout.vue";

export default {
  components: {
    // Dashboard,
  },
};
</script>

<style>
/* Add any global styles here */
</style>
