<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-toolbar-title style="display: flex; justify-content: space-between;">
          Edit region
        </v-toolbar-title>
        <v-form ref="form" v-model="valid" >
          <v-text-field v-model="name_en" :counter="10" :rules="nameRules" label="Name (en)" required ></v-text-field>
          <v-text-field v-model="name_ru" :counter="10" :rules="nameRules" label="Name (ru)" required ></v-text-field>
          <v-text-field v-model="name_am" :counter="10" :rules="nameRules" label="Name (am)" required ></v-text-field>
          <v-text-field v-model=" delivery_price" label="Delivery price" required ></v-text-field>
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
          await store.dispatch('regions/getRegion', [route.params.id])
        },
        data () {
          return {
            valid: true,
            name_en: '',
            name_ru: '',
            name_am: '',
            delivery_price: '',
            nameRules: [
              v => !!v || 'Field is required',
            ]
          }
        },
        methods: {
          updateRegion() {
            this.$store.dispatch('regions/updateRegion', [this.$route.params.id, this.name_en, this.name_ru, this.name_am, this.delivery_price]).then(r => {
              this.$router.push('/dashboard/regions')
            })
          }
        },
        mounted() {
          this.name_en = this.region[0].name_en;
          this.name_ru = this.region[0].name_ru;
          this.name_am = this.region[0].name_am;
          this.delivery_price = this.region[0].delivery_price;
        },
      computed: {
          region() {
            return this.$store.getters['regions/region'];
          },
        },
    }
</script>
