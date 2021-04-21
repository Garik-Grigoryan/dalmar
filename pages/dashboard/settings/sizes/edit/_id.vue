<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-toolbar-title style="display: flex; justify-content: space-between;">
          Edit size
        </v-toolbar-title>
        <v-form ref="form" v-model="valid" >
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required ></v-text-field>
          <v-btn :disabled="!valid" @click="updateRegion" color="success" class="mr-4" >Update</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "",
  layout: 'dashboard',
  middleware: 'admin',
  async fetch({route, store}) {
    await store.dispatch('sizes/getSize', [route.params.id])
  },
  data () {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Field is required',
      ]
    }
  },
  methods: {
    updateRegion() {
      this.$store.dispatch('sizes/updateSize', [this.$route.params.id, this.name]).then(r => {
        this.$router.push('/dashboard/settings/sizes')
      })
    }
  },
  mounted() {
    this.name = this.size[0].name;
  },
  computed: {
    size() {
      return this.$store.getters['sizes/size'];
    },
  },
}
</script>
