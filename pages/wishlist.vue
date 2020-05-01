<template>
    <v-container>
      <v-row>
        <v-col cols="12">
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    hide-default-footer
                    class="elevation-1"
                  >
                    <template v-slot:item.image="{ item }">
                      <v-img
                        :src="item.image"
                        :contain="true"
                        width="100"
                        height="100"
                      ></v-img>
                    </template>
                    <template v-slot:item.count="{ item }">
                      <v-text-field
                        type="number"
                        placeholder="0"
                        v-model="item.count"
                        style="max-width: 60px; margin: 0 auto !important; text-align: center"
                        min="1"
                      ></v-text-field>
                    </template>
                    <template v-slot:item.color="{ item }">
                      <v-card
                        :color="item.color.toLowerCase()"
                        class="d-flex text-center align-center mx-3"
                        dark
                        height="30"
                        width="30"
                        style="margin: 0 auto !important;"
                      >
                      </v-card>
                    </template>
                    <template v-slot:item.remove="{ item }">
                      <v-icon  @click="deleteItem(item)">mdi-delete</v-icon>
                    </template>
                  </v-data-table>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  var PhoneNumber = require( 'awesome-phonenumber' );
    export default {
        name: "cart",
      data () {
          return {
            headers: [
              { text: 'Image', value: 'image',  sortable: false,  align: 'start', },
              { text: 'Name',value: 'name',  sortable: false,  align: 'center', },
              { text: 'Size', value: 'size',  sortable: false,  align: 'center', },
              { text: 'Color', value: 'color',  sortable: false,  align: 'center', },
              { text: 'Count', value: 'count',  sortable: false,  align: 'center', },
              { text: 'Price', value: 'price',  sortable: false,  align: 'center', },
              { text: 'Remove', value: 'remove',  sortable: false,  align: 'center', },
            ],
            desserts: [
              {
                image: '/jins1.jpg',
                name: 'Frozen Yogurt',
                size: "XL",
                color: 'Blue',
                count: 1,
                price: 15000,
                remove: 'mdi-delete',
              },
              {
                image: '/jins3.jpg',
                name: 'Frozen Yogurt',
                size: 'M',
                color: 'Black',
                count: 1,
                price: 16000,
                remove: 'mdi-delete',
              },
              {
                image: '/jins3.jpg',
                name: 'Frozen Yogurt',
                size: 'M',
                color: 'Black',
                count: 5,
                price: 16000,
                remove: 'mdi-delete',
              },
              {
                image: '/jins3.jpg',
                name: 'Frozen Yogurt',
                size: 'M',
                color: 'Black',
                count: 1,
                price: 16000,
                remove: 'mdi-delete',
              },
              {
                image: '/jins3.jpg',
                name: 'Frozen Yogurt',
                size: 'M',
                color: 'Black',
                count: 1,
                price: 16000,
                remove: 'mdi-delete',
              }
            ],
          }
      },
      methods: {
        deleteItem (item) {
          const index = this.desserts.indexOf(item);
          confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        },

      }
    }
</script>

<style scoped>

</style>
