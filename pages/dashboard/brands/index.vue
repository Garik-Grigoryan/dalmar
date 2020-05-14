<template>
    <v-container>
      <v-toolbar-title style="display: flex; justify-content: space-between;">
        Brands
        {{ brands }}
        <v-btn small dark to="brands/new" color="purple" >Add mew brand</v-btn>
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
          <tr v-for="item in desserts" :key="item.name">
            <td><v-img :src="item.image" max-width="100"></v-img></td>
            <td>{{ item.name }}</td>
            <td><v-btn small :elevation="0" dark fab color="primary" ><v-icon>mdi-pencil</v-icon></v-btn> <v-btn small :elevation="0" dark fab color="error" ><v-icon>mdi-delete</v-icon></v-btn></td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
</template>

<script>
    export default {
      async fetch({store}) {
          if(store.getters['brands/brands'].length === 0){
             await store.dispatch('brands/fetch')
          }
      },
      layout: 'dashboard',
      middleware: 'admin',
      name: "index",
      data () {
        return {
          desserts: [
            {
              image: '/poloLogo.png',
              name: 'U.S. Polo',
            },
          ],
        }
      },
      computed: {
        brands() {
          return this.$store.getters['brands/brands'];
        }
      },
      methods: {
        addBrand() {

        }
      }
    }
</script>

<style scoped>

</style>
