<template>
    <v-container>
      <v-toolbar-title style="display: flex; justify-content: space-between;">
        Brands
        <v-btn small dark to="brands/new" color="purple" >Add new brand</v-btn>
      </v-toolbar-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">Image</th>
            <th class="text-left">Name</th>
            <th class="text-left">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in brands" :key="item.brand.name">

            <td><v-img :src="item.brand.image" max-width="100"></v-img></td>
            <td>{{ item.brand.name }}</td>
            <td><v-btn small :to="`brands/edit/${item.brand.id}`" :elevation="0" dark fab color="primary" ><v-icon>mdi-pencil</v-icon></v-btn> <v-btn small :elevation="0" @click="deleteBrand($event, item.brand.id )" dark fab color="error" ><v-icon>mdi-delete</v-icon></v-btn></td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
</template>

<script>
    export default {
      async fetch({store}) {
             await store.dispatch('brands/fetch')
      },
      layout: 'dashboard',
      middleware: 'admin',
      name: "index",
      data () {
        return {
        }
      },
      computed: {
        brands() {
          return this.$store.getters['brands/brands'];
        }
      },
      methods: {
        deleteBrand(event, id) {
          this.$store.dispatch('brands/delete', [id]).then( r => {
            this.$store.dispatch('brands/fetch')
          })
        },
        addBrand() {

        }
      }
    }
</script>

<style scoped>

</style>
