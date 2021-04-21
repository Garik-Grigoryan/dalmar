<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="8" md="12">
      <v-toolbar-title style="display: flex; justify-content: space-between;">
        Sizes
        <v-btn small dark to="sizes/new" color="purple" >Add new Size</v-btn>
      </v-toolbar-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">Name</th>
            <th width="160" class="text-left"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in sizes" :key="item.name">
            <td >{{ item.name }}</td>
            <td width="160"><v-btn small :to="`sizes/edit/${item.id}`" :elevation="0" dark fab color="primary" ><v-icon>mdi-pencil</v-icon></v-btn> <v-btn small :elevation="0" @click="deleteSize($event, item.id )" dark fab color="error" ><v-icon>mdi-delete</v-icon></v-btn></td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async fetch({store}) {
    await store.dispatch('sizes/fetch')
  },
  layout: 'dashboard',
  middleware: 'admin',
  name: "index",
  data () {
    return {
    }
  },
  computed: {
    sizes() {
      return this.$store.getters['sizes/sizes'];
    }
  },
  methods: {
    deleteSize(event, id) {
      this.$store.dispatch('sizes/delete', [id]).then( r => {
        this.$store.dispatch('sizes/fetch')
      })
    },
  }
}
</script>

<style scoped>

</style>
