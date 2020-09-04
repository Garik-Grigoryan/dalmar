<template>
    <div>
      <v-row justify="center">
      <v-col lg="4" md="6" sm="12">
          <v-card flat tile :elevation="3">
            <v-card-title>Login</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="false" ref="form" :lazy-validation="true" >
                <v-alert v-if="errors.email" text type="error">
                  {{errors.email[0]}}
                </v-alert>
                <v-text-field v-model="loginForm.email" :rules="emailRules" label="E-mail" required ></v-text-field>
                <v-text-field v-model="loginForm.password" :rules="passwordRules" label="Password" type="password" required ></v-text-field>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="loginAction">Login</v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
      </v-col>
      </v-row>
    </div>
</template>

<script>
    export default {
      layout: 'empty',
      data () {
        return {
          name: "login",
          checkbox: false,
          loginForm: {
            email: '',
            password: ''
          },
          nameRules: [
            v => !!v || 'Name is required',
          ],
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
          passwordRules: [
            v => !!v || 'Password is required',
          ],
        }
      },
      methods: {
        async loginAction() {
          await this.$auth.login({data: this.loginForm}).then(response => {
            this.menu = false;
            this.$router.push('/dashboard')
          }).catch(e => {
            this.loginError = e.response;
          });
        },
      }

    }
</script>

<style scoped>

</style>
