<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col md="8" sm="12">
          <v-row justify="center" >
            <v-col md="6"  sm="10" xs="12">
              <h2 class="grey--text text-center mb-5">ԲԱԺԱՆՈՐԴԱԳՐՎԵԼ</h2>
              <p class="grey--text "> Բաժանորդագրվեք Մեր նամակներին և առաջինը տեղեկացեք նորույթների, զեղչերի և ակցիաների վերաբերյալ:</p>
              <ValidationObserver ref="observer" v-slot="{ validate, reset }">
                <form>
                  <v-row align="center" justify="center">
                    <v-col md="10" sm="12">
                      <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                        <v-text-field
                          v-model="email"
                          :error-messages="errors"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col md="2" class="text-right">
                      <v-btn @click="submit">submit</v-btn>
                    </v-col>
                  </v-row>
                </form>
              </ValidationObserver>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  setInteractionMode('eager');
  extend('email', {
    ...email,
    message: 'Email must be valid',
  });
  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })
  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      email: '',
    }),
    methods: {
      submit() {
        this.$refs.observer.validate()
      },
    }
  }
</script>
