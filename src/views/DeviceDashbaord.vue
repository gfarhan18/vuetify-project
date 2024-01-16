<!-- dataDashboard.vue -->
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
          <!-- Device Form -->
          <v-col cols="12" md="6">
            <device-form></device-form>
            <v-img
              src="https://i.pinimg.com/originals/39/39/ca/3939ca273c56ede516ab5817fed3315a.png"
              alt="Map Image"
              height="500"
              class="ma-3"
            ></v-img>
          </v-col>
  
          <!-- Device Table -->
          <v-col cols="12" md="6">
            <device-table></device-table>
          </v-col>
        </v-row>
      </v-card>
    </dashboard-layout>
  </template>
  
  <script>
  import DashboardLayout from "@/components/DashboardLayout.vue";
  import DeviceForm from "@/components/DeviceForm.vue";
  import DeviceTable from "@/components/DeviceTable.vue";
  
  export default {
    components: {
      DashboardLayout,
      DeviceForm,
      DeviceTable,
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
  