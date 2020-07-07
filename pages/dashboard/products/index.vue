<template>
  <v-container>
    <v-toolbar-title style="display: flex; justify-content: space-between;">
      Products
      <v-btn small dark to="products/new" color="purple" >Add new product</v-btn>
    </v-toolbar-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Image</th>
            <th class="text-left">Name (eng)</th>
            <th class="text-left">Name (rus )</th>
            <th class="text-left">Name (am)</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="item in products" :key="item.name">
          <td><v-img :src="JSON.parse(item.images)[0]" max-width="100"></v-img></td>
          <td>{{ item.name_en }}</td>
          <td>{{ item.name_ru }}</td>
          <td>{{ item.name_am }}</td>
          <td><v-btn small :to="`products/edit/${item.id}`" :elevation="0" dark fab color="primary" ><v-icon>mdi-pencil</v-icon></v-btn> <v-btn small :elevation="0" @click="deleteProducts($event, item.id )" dark fab color="error" ><v-icon>mdi-delete</v-icon></v-btn></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
  export default {
    async fetch({store}) {
      await store.dispatch('products/fetch')
    },
    layout: 'dashboard',
    middleware: 'admin',
    name: "index",
    data () {
      return {
      }
    },
    computed: {
      products() {
        return this.$store.getters['products/products'];
      }
    },
    methods: {
      deleteProducts(event, id) {
        this.$store.dispatch('products/delete', [id]).then( r => {
          this.$store.dispatch('products/fetch')
        })
      },
      addBrand() {

      }
    }
  }
</script>

<style scoped>

</style>
