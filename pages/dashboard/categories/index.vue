<template>
  <v-container>
    <v-toolbar-title style="display: flex; justify-content: space-between;">
      Categories
      <v-btn small dark to="categories/new" color="purple" >Add new category</v-btn>
    </v-toolbar-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">Image</th>
          <th class="text-left">Name (en)</th>
          <th class="text-left">Name (ru)</th>
          <th class="text-left">Name (am)</th>
          <th class="text-left">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in categories" :key="item.id">
          <td v-if="JSON.parse(item.image)"><v-img :src="JSON.parse(item.image)[0]" max-width="100"></v-img></td>
          <td v-else><v-img src="" max-width="100"></v-img></td>
          <td>{{ item.name_en }}</td>
          <td>{{ item.name_ru }}</td>
          <td>{{ item.name_am }}</td>
          <td><v-btn small :to="`/dashboard/categories/edit/${item.id}`" :elevation="0" dark fab color="primary" ><v-icon>mdi-pencil</v-icon></v-btn> <v-btn small :elevation="0" @click="deleteCategory($event, item.id )" dark fab color="error" ><v-icon>mdi-delete</v-icon></v-btn></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
  export default {
    async fetch({store}) {
      await store.dispatch('categories/fetch')
    },
    layout: 'dashboard',
    middleware: 'admin',
    name: "index",
    data () {
      return {
      }
    },
    computed: {
      categories() {
        return this.$store.getters['categories/categories'];
      }
    },
    methods: {
      deleteCategory(event, id) {
        this.$store.dispatch('categories/delete', [id]).then( r => {
          this.$store.dispatch('categories/fetch')
        })
      },
      addBrand() {

      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
