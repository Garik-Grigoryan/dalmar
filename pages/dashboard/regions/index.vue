<template>
    <v-container>
      <v-toolbar-title style="display: flex; justify-content: space-between;">
        Regions
        <v-btn small dark to="regions/new" color="purple" >Add new region</v-btn>
      </v-toolbar-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">Name (en)</th>
            <th class="text-left">Name (ru)</th>
            <th class="text-left">Name (am)</th>
            <th class="text-left">Delivery price</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in regions" :key="item.name_en">

            <td>{{ item.name_en }}</td>
            <td>{{ item.name_ru }}</td>
            <td>{{ item.name_am }}</td>
            <td>{{ item.delivery_price }}</td>
            <td><v-btn small :to="`regions/edit/${item.id}`" :elevation="0" dark fab color="primary" ><v-icon>mdi-pencil</v-icon></v-btn> <v-btn small :elevation="0" @click="deleteRegion($event, item.id )" dark fab color="error" ><v-icon>mdi-delete</v-icon></v-btn></td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
</template>

<script>
    export default {
      async fetch({store}) {
        await store.dispatch('regions/fetch')
      },
      layout: 'dashboard',
      middleware: 'admin',
      name: "index",
      data () {
        return {
        }
      },
      computed: {
        regions() {
          return this.$store.getters['regions/regions'];
        }
      },
      methods: {
        deleteRegion(event, id) {
          this.$store.dispatch('regions/delete', [id]).then( r => {
            this.$store.dispatch('regions/fetch')
          })
        },
      }
    }
</script>

<style scoped>

</style>
