<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="8" md="12">
        <v-data-table
          :headers="headers"
          :items="components"
          class="elevation-1"
        >
          <template v-slot:item.edit="{item}">
            <v-btn small :to="`components/edit/${item.id}`" :elevation="0" dark fab color="primary" ><v-icon>mdi-pencil</v-icon></v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
      name: "components",
      layout: 'dashboard',
      middleware: 'admin',
      async asyncData({store}) {
        await store.dispatch('components/fetch');
      },
      data() {
        return {
          expanded: [],
          singleExpand: false,
          headers: [
            {text: '#', value: 'id'},
            {text: 'Name', value: 'name'},
            {text: 'Edit', value: 'edit'},
          ],
          desserts: [],
        }
      },
      computed: {
        components() {
          return this.$store.getters['components/components'];
        }
      }
    }
</script>

<style scoped>

</style>
