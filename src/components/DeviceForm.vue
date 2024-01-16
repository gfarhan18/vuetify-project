<template>
    <v-container fluid class="my-4">
      <v-row justify="center" align="center">
        <v-col>
          <v-card class="border-0">
            <v-card-title class="mb-4">Device Form</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="onSubmit">
                <!-- Instrument Type Select -->
                <v-row class="">
                  <v-col>
                    <v-select
                      v-model="form.instrumentType"
                      :items="instrumentTypes"
                      label="Instrument Type"
                      @input="setTouched('instrumentType')"
                        class="bg-black"
                    ></v-select>
                  </v-col>
                </v-row>
                <!-- Branch Number Input -->
                <v-row class="">
                  <v-col>
                    <v-text-field
                      v-model.trim="form.branchNumber"
                      label="Branch Number"
                      @input="setTouched('branchNumber')"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <!-- Search Input -->
                <v-row class="">
                  <v-col>
                    <v-text-field
                      v-model.trim="form.searchInput"
                      label="Search"
                      prepend-icon="mdi-magnify"
                      @input="setTouched('searchInput')"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class=" text-center">
                  <v-col>
                    <v-btn @click="onSubmit" class="btn btn-primary">Submit</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import useVuelidate from '@vuelidate/core';
  
  export default {
    setup() {
      return { v$: useVuelidate() };
    },
    data() {
      return {
        form: {
          instrumentType: '',
          branchNumber: '',
          searchInput: '',
        },
        instrumentTypes: ['Type 1', 'Type 2', 'Type 3'], // Add your instrument types here
      };
    },
    validations() {
      return {
        form: {
          instrumentType: {
          },
          branchNumber: {
          },
          searchInput: {
          },
        },
      };
    },
    methods: {
      setTouched(theModel) {
        if (theModel == 'instrumentType' || theModel == 'all') {
          this.v$.form.instrumentType.$touch();
        }
        if (theModel == 'branchNumber' || theModel == 'all') {
          this.v$.form.branchNumber.$touch();
        }
        if (theModel == 'searchInput' || theModel == 'all') {
          this.v$.form.searchInput.$touch();
        }
      },
      onSubmit() {
        this.setTouched('all');
  
        if (!this.v$.$invalid) {
            console.log('device form',this.form);
          // Dispatch action to add device to state
          this.$store.commit('addDevice', {
            instrumentType: this.form.instrumentType,
            branchNumber: this.form.branchNumber,
            searchInput: this.form.searchInput,
          });
  
          // Clear form fields if needed
          this.form.instrumentType = '';
          this.form.branchNumber = '';
          this.form.searchInput = '';
  
          alert('Device added successfully!');
        }
      },
    },
  };
  </script>
  