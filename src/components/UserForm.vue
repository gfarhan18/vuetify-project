<template>
  <v-container fluid class="py-0">
    <v-row justify="center" align="center">
      <v-col>
        <v-card class="border-0">
          <v-card-title class="mb-4">Form Data</v-card-title>
          <v-card-text :dark="$vuetify.theme.dark">
            <v-form @submit.prevent="onSubmit">
              <!-- Input--------------------->
              <v-row class="mb-3">
                <v-col>
                  <v-text-field
                    v-model.trim="form.id"
                    label="ID"
                    @input="setTouched('id')"
                    :class="v$.form.id.$error ? 'is-invalid' : ''"
                    :error="v$.form.id.$error"
                  ></v-text-field>
                  <div v-for="error of v$.form.id.$errors" class="invalid-feedback" :key="error.$uid">
                    {{ error.$message }}
                  </div>
                </v-col>
              </v-row>
              <!-- Input--------------------->
              <v-row class="mb-3">
                <v-col>
                  <v-text-field
                    v-model.trim="form.password"
                    label="Password"
                    type="password"
                    @input="setTouched('password')"
                    :class="v$.form.password.$error ? 'is-invalid' : ''"
                    :error="v$.form.password.$error"
                  ></v-text-field>
                  <div v-for="error of v$.form.password.$errors" class="invalid-feedback" :key="error.$uid">
                    {{ error.$message }}
                  </div>
                </v-col>
              </v-row>
              <!-- Input--------------------->
              <v-row class="mb-3">
                <v-col>
                  <v-text-field
                    v-model.trim="form.confirmPassword"
                    label="Repeat your password"
                    type="password"
                    @input="setTouched('confirmPassword')"
                    :class="v$.form.confirmPassword.$error ? 'is-invalid' : ''"
                    :error="v$.form.confirmPassword.$error"
                  ></v-text-field>
                  <div v-for="error of v$.form.confirmPassword.$errors" class="invalid-feedback" :key="error.$uid">
                    {{ error.$message }}
                  </div>
                </v-col>
              </v-row>
              <v-row class="mb-3 text-center">
                <v-col>
                  <v-btn @click="onSubmit" class="btn btn-primary">Submit</v-btn>
                </v-col>
              </v-row>
              <hr />
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    {{ form.startDate }}
  </v-container>
</template>
  <script>
  import useVuelidate from '@vuelidate/core'
  import { required, sameAs, alpha,minLength ,maxLength } from '@vuelidate/validators'

  
  export default {
    setup() {
      return { v$: useVuelidate() }
    },
    data() {
      return {
        form: {
          id: '',
          password: '',
          confirmPassword: '',
        },
      }
    },
    validations() {
          return {
            form: {
              id: {
                  required,
                  alpha,
                  minLength: minLength(3),
                  maxLength: maxLength(15)
              },
              password: {
                required,
            },
              confirmPassword: {
                  required,
                  confirmPassword: sameAs(this.form.password)
              },
            },
          }
    },
    methods: {
      setTouched(theModel) {
          if(theModel == 'id' || theModel == 'all'){this.v$.form.id.$touch()} 
          if(theModel == 'password' || theModel == 'all'){this.v$.form.password.$touch()} 
          if(theModel == 'confirmPassword' || theModel == 'all'){this.v$.form.confirmPassword.$touch()}
      },
      async onSubmit() {
      this.setTouched('all');

      if (!this.v$.$invalid) {
        // Dispatch action to add user to state
        await this.$store.commit('addUser', {
          id: this.form.id,
          password: this.form.password,
        });

        // Clear form fields if needed
        this.form.id = '';
        this.form.password = '';
        this.form.confirmPassword = '';

        alert('User added successfully!');
      }
    },
    },
  }
  </script>