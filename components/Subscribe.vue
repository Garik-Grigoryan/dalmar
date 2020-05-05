<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col md="8" sm="12">
          <v-row justify="center" >
            <v-col md="6"  sm="10" xs="12">
              <h2 class="grey--text text-center mb-5">ԲԱԺԱՆՈՐԴԱԳՐՎԵԼ</h2>
              <p class="grey--text "> Բաժանորդագրվեք Մեր նամակներին և առաջինը տեղեկացեք նորույթների, զեղչերի և ակցիաների վերաբերյալ:</p>
                <form>
                  <v-row align="center" justify="center">
                    <v-col md="10" sm="12">
                      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
                    </v-col>
                    <v-col md="2" class="text-right">
                      <v-btn @click="submit">submit</v-btn>
                    </v-col>
                  </v-row>
                </form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>

  export default {
    data: () => ({
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
      submit() {
        this.$refs.observer.validate()
      },
    }
  }
</script>
