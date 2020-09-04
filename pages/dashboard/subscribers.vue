<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="8" md="12">
        <v-card>
          <v-card-title>
            Subscribers
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="getSubscribers"
            item-key="id"
            class="elevation-1"
            :search="search"
          >
            <template v-slot:item.created_at="{ item }">
              <v-card-text  style="padding: 0" >{{$dateFns.format(new Date(item.created_at), 'yyyy-MM-dd HH:mm')}}</v-card-text>
            </template>
          </v-data-table>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "subscribers",
        layout: 'dashboard',
        middleware: 'admin',
        async asyncData({store}) {
          await store.dispatch('user/getSubscribers');
        },
        data() {
          return {
            search: '',
            headers: [
              {text: '#', value: 'id'},
              {text: 'E-mail', value: 'email'},
              {text: 'Subscribed at', value: 'created_at'},
            ],
          }
        },
        computed: {
          getSubscribers() {
            return this.$store.getters['user/subscribers'];
          }
        },
    }
</script>

<style scoped>

</style>
