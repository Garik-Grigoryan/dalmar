<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-toolbar-title style="display: flex; justify-content: space-between;">
          Add new region
        </v-toolbar-title>
        <v-form ref="form" v-model="valid" >
          <v-text-field v-model="name_en" :rules="nameRules" label="Name (en)" required ></v-text-field>
          <v-text-field v-model="name_ru" :rules="nameRules" label="Name (ru)" required ></v-text-field>
          <v-text-field v-model="name_am" :rules="nameRules" label="Name (am)" required ></v-text-field>
          <v-text-field v-model="delivery_price" label="Delivery Price" required ></v-text-field>

          <v-btn :disabled="!valid" @click="addRegion" color="success" class="mr-4" >Save</v-btn>
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
          name_en: '',
          name_ru: '',
          name_am: '',
          delivery_price: '',
          nameRules: [
            v => !!v || 'Field is required',
          ],
        }
      },
      methods: {
        addRegion() {
          this.$store.dispatch('regions/addRegion', [this.name_en, this.name_ru, this.name_am, this.delivery_price]).then(r => {
            this.$router.push('/dashboard/regions')
          })
        }
      },
      computed: {
      },
    }
</script>
