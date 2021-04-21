<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-toolbar-title style="display: flex; justify-content: space-between;">
          Add new size
        </v-toolbar-title>
        <v-form ref="form" v-model="valid" >
          <v-text-field v-model="name" :rules="nameRules" label="Name" required ></v-text-field>

          <v-btn :disabled="!valid" @click="addSize" color="success" class="mr-4" >Save</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "new",
  layout: 'dashboard',
  middleware: 'admin',
  async fetch({store}) {
  },
  data () {
    return {
      valid: true,
      name: '',
      delivery_price: '',
      nameRules: [
        v => !!v || 'Field is required',
      ],
    }
  },
  methods: {
    addSize() {
      this.$store.dispatch('sizes/addSize', [this.name]).then(r => {
        this.$router.push('/dashboard/settings/sizes')
      })
    }
  },
  computed: {
  },
}
</script>
