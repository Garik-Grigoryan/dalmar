<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col md="8" sm="12">
          <v-row justify="center" >
            <v-col md="6"  sm="10" xs="12">
              <h2 class="grey--text text-center mb-5" v-text="$t('subscribe')"></h2>
              <p class="grey--text" v-text="$t('subscribeText')"></p>
              <v-form v-model="formValid">
                  <v-row align="center" justify="center">
                    <v-col md="10" sm="12">
                      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
                    </v-col>
                    <v-col md="2" class="text-right">
                      <v-btn @click.stop="submit">submit</v-btn>
                    </v-col>
                  </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      :color="color"
      :right="true"
      :timeout="3000"
      :top="true"
      rounded="pill"
    >
      {{ notification }}

      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>

  export default {
    data: () => ({
      notification: '',
      color: 'success',
      snackbar: false,
      formValid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      async submit() {
        if(this.formValid){
            await this.$store.dispatch('user/subscribe', [this.email]).then((res) => {
              this.color = 'success';
              this.notification = 'Successful Subscribed';
              this.snackbar = true;
              this.email = '';
            });
        }else{
          this.color = 'error';
          this.notification = 'Your E-mail is wrong';
          this.snackbar = true;
        }
      },
    }
  }
</script>
