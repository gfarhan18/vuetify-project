<template>
  <v-card>
    <v-card-title class="bg-black">Table</v-card-title>

    <v-table dense>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Authority</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user) in displayedUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.password }}</td>
          <td>
            <v-btn class="mx-2" fab dark small color="black" @click="openDeleteModal(user.id)">
              Delete
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <v-pagination v-model="page" :length="Math.ceil(users.length / itemsPerPage)"></v-pagination>

    <!-- Modal for Delete Confirmation -->
    <v-dialog v-model="deleteModal" max-width="400">
      <v-card>
        <v-card-title class="text-h6">Confirm Delete</v-card-title>
        <v-card-text>
          Are you sure you want to delete this user?
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" text @click="cancelDelete">Cancel</v-btn>
          <v-btn color="success" @click="confirmDelete">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      deleteModal: false,
      userToDelete: null,
      page: 1,
      itemsPerPage: 2, // Number of items per page
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    displayedUsers() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.users.slice(startIndex, endIndex);
    },
  },
  methods: {
    deleteUser(userId) {
      this.$store.commit('deleteUser', userId);
      console.log(`User with ID ${userId} deleted successfully!`);
    },
    openDeleteModal(userId) {
      this.userToDelete = userId;
      this.deleteModal = true;
    },
    cancelDelete() {
      this.deleteModal = false;
      this.userToDelete = null;
    },
    confirmDelete() {
      if (this.userToDelete) {
        this.$store.commit('deleteUser', this.userToDelete);
        console.log(`User with ID ${this.userToDelete} deleted successfully!`);
        this.deleteModal = false;
        this.userToDelete = null;
      }
    },
  },
};
</script>
