<template>
  <v-card class="my-8">
    <v-card-title class="bg-black">Device Table</v-card-title>

    <v-table dense>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Device Type</th>
          <th class="text-left">Branch Number</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="device in devices" :key="device.id">
          <td>{{ device.id }}</td>
          <td>{{ device.instrumentType }}</td>
          <td>{{ device.branchNumber }}</td>
          <td>
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="black"
              @click="openDeleteModal(device.id)"
            >
              Delete
            </v-btn>
          </td>
        </tr>
      </tbody>

      <!-- Modal for Delete Confirmation -->
      <v-dialog v-model="deleteModal" max-width="400">
        <v-card class="custom-modal-card">
          <v-card-title class="text-h6 text-white">Confirm Delete</v-card-title>
          <v-card-text class="text-white">
            Are you sure you want to delete this device?
          </v-card-text>
          <v-card-actions>
            <v-btn color="error" text @click="cancelDelete" class="white--text"
              >Cancel</v-btn
            >
            <v-btn color="success" @click="confirmDelete" class="white--text"
              >Delete</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      deleteModal: false,
      deviceToDelete: null,
    };
  },
  computed: {
    devices() {
      return this.$store.state.devices;
    },
  },
  methods: {
    deleteDevice(deviceId) {
      // Dispatch deleteDevice mutation with the device ID
      this.$store.commit("deleteDevice", deviceId);
      console.log(`Device with ID ${deviceId} deleted successfully!`);
    },
    openDeleteModal(deviceId) {
      // Set the device to be deleted in the modal data
      this.deviceToDelete = deviceId;
      // Open the delete confirmation modal
      this.deleteModal = true;
    },
    cancelDelete() {
      // Close the delete confirmation modal
      this.deleteModal = false;
      // Reset the device to be deleted in the modal data
      this.deviceToDelete = null;
    },
    confirmDelete() {
      if (this.deviceToDelete) {
        // Delete the device from the store by passing the device ID
        this.$store.commit("deleteDevice", this.deviceToDelete);
        console.log(
          `Device with ID ${this.deviceToDelete} deleted successfully!`
        );
        // Close the delete confirmation modal
        this.deleteModal = false;
        // Reset the device to be deleted in the modal data
        this.deviceToDelete = null;
      }
    },
  },
};
</script>
<style scoped>
.custom-modal-card {
  background-color: black;
}

.text-white {
  color: white;
}
</style>
