<template>
    <dashboard-layout :mini="mini" @toggle-sidebar="toggleSidebar">
      <v-card>
        <v-row class="mb-2 px-4">
        <v-col>
          <v-btn color="grey darken-1 mr-1">Grey Button</v-btn>
          <v-btn color="black">Black Button</v-btn>
        </v-col>
      </v-row>
      <hr>
        <v-row>
          <v-col cols="12" md="6">
            <data-table></data-table>
            <v-img
              src="https://i.pinimg.com/originals/39/39/ca/3939ca273c56ede516ab5817fed3315a.png"
              alt="Map Image"
              height="500"
              class="ma-3"
            ></v-img>

          </v-col>
  
          <!-- Image Section -->
          <v-col cols="12" md="6">
            <v-img
              src="https://suncatcherstudio.com/uploads/printables/grid-paper/pdf-png/graph-paper-axis-blank-20x20-1-quadrant-010101-4477bb.png"
              alt="graph Image"
              class="ma-3"
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </dashboard-layout>
  </template>
  
  <script>
  import DashboardLayout from "@/components/DashboardLayout.vue";
  import DataTable from "@/components/DataTable.vue";
  
  export default {
    components: {
      DashboardLayout,
      DataTable,
    },
    data() {
      return {
        mini: false, // Set the initial value of mini-variant mode
      };
    },
    methods: {
      toggleSidebar() {
        this.mini = !this.mini; // Toggle mini-variant mode
      },
    },
  };
  </script>
  