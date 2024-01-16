<template>
  <v-navigation-drawer :theme="theme" expand-on-hover rail :mini-variant="mini" permanent>
    <v-list height="67">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
        class="d-none"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list-item
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        link
      >
      <v-list-item-content class="d-flex align-center">
        <v-list-item-icon class="mr-1">
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      mini: false,
      drawer: null,
      links: [
        { title: 'User Dashboard', to: '/', icon: 'mdi-view-dashboard' },
        { title: 'Device Page', to: '/device-dashboard', icon: 'mdi-account' },
        { title: 'data Page', to: '/data-dashboard', icon: 'mdi-page-next-outline' },

      ],
    };
  },
  computed: {
    
  },
  // ... rest of the component ...
};
</script>

<style>
.v-list-item:hover, .v-list-item--active {
  background-color: blue !important;
  color: white !important;
}
/* Add any custom styles for your sidebar */
</style>
