<template>
  <v-container>
    <v-toolbar-title style="display: flex; justify-content: space-between;">
      Pages
<!--      <v-btn small dark to="products/new" color="purple" >Add new product</v-btn>-->
    </v-toolbar-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in pages" :key="item.name">
          <td>{{ item.name }}</td>
          <td><v-btn small :to="`pages/${item.id}`" :elevation="0" dark fab color="primary" ><v-icon>mdi-pencil</v-icon></v-btn></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
  export default {
    async fetch({store}) {
      await store.dispatch('pages/fetch')
    },
    layout: 'dashboard',
    middleware: 'admin',
    name: "pages",
    data () {
      return {
      }
    },
    computed: {
      pages() {
        return this.$store.getters['pages/pages'];
      }
    },
    methods: {
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
