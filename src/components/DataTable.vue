<template>
    <v-card>
  
      <v-table dense>
          <thead>
            <tr>
              <th class="text-left bold text-h6">Branch Number</th>
              <th class="text-left bold text-h6">Address</th>
              <th class="text-left bold text-h6">Value</th>
            </tr>
          </thead>
          
          <tbody>
              <tr v-for="item in paginatedData" :key="item.branchNumber">
                <td class="blue-grey-lighten-5">{{ item.branchNumber }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.value }}</td>
            </tr>
        </tbody>
      </v-table>
  
      <v-pagination
        v-if="totalPages > 1"
        v-model="currentPage"
        :length="totalPages"
      ></v-pagination>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: [
          { branchNumber: '001', address: '123 Main St', value: '$1000' },
          { branchNumber: '002', address: '456 Oak St', value: '$1500' },
          { branchNumber: '003', address: '789 Pine St', value: '$1200' },
          // Add more dummy data as needed
        ],
        itemsPerPage: 2,
        currentPage: 1,
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.data.length / this.itemsPerPage);
      },
      paginatedData() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.data.slice(startIndex, endIndex);
      },
    },
  };
  </script>
  