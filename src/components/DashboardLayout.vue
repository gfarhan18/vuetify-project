<template>
  <v-app :theme="theme">
    <sidebar></sidebar>

    <v-app-bar app>
      <v-toolbar-title>Mydd Dashboard</v-toolbar-title>
      <v-btn @click="toggleTheme">Toggle Theme</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="h-100">
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from './SidebarView.vue';
import { ref, watch } from 'vue';
import { useTheme } from 'vuetify';

const mini = ref(true);
const theme = useTheme();

const toggleTheme = () => {
  // Assuming you have a Vuex store module for theme management

  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

// Watch for changes in 'mini' and update 'miniVariant'
watch(mini, (newVal) => {
  theme.refs.app.miniVariant = newVal;
});

</script>


<style>
/* Add any custom styles for your dashboard layout */
</style>
