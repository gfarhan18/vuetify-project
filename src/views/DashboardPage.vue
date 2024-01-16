<!-- DashboardPage.vue -->
<template>
  <dashboard-layout>
    <v-card class="h-100">
      <v-row class="mb-2 px-4">
        <v-col>
          <v-row class="mt-2">
            <v-btn color="grey darken-1" class="mr-1 mt-2">Gray Button</v-btn>
            <v-select :items="unitOptions" label="Select Unit" dense class="select"></v-select>
          </v-row>
        </v-col>
      </v-row>
      <hr />
      <!-- Add Vuetify tabs here -->
      <v-card>
        <v-card-text>
          <v-container fluid class="h-100">
            <v-row>
              <v-col>
                <user-form></user-form>
              </v-col>
              <v-col>
                <user-table></user-table>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-card>
  </dashboard-layout>
</template>

<script>
import UserTable from "@/components/UserTable.vue";
import UserForm from "@/components/UserForm.vue";
import DashboardLayout from "@/components/DashboardLayout.vue";

export default {
  components: {
    UserTable,
    UserForm,
    DashboardLayout,
  },
  data() {
    return {
      tab: "first",
      tabs: ["first", "second"],
      unitOptions: [
        "풍향 (deg)",
        "풍속 (m/s)",
        "기온 (c)",
        "습도 (%)",
        "기압 (hPa)",
        "시간 누적 강수량 (mm)",
        "일 누적 강수량 (mm)",

        // Add more color options as needed
      ],
    };
  },
};
</script>

<style>
.select .v-input__control{
  width: 300px;
}


</style>