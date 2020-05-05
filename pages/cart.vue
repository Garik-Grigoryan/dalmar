<template>
    <v-container>
      <v-row>
        <v-col lg="9" md="12">
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
        <v-col lg="3" md="12">
          <v-card>
            <v-toolbar color="#b20839" dark>
              <v-toolbar-title>
                cart
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-list disabled>
              <v-list-item-group>
                <v-list-item>
                <v-list-item-icon>
                  Total Count:
                </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle> 9</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
                <v-list-item-group>
                <v-list-item>
                <v-list-item-icon>
                  Total Price:
                </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle> {{totalPrice}} AMD</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
              </v-list>
              <v-list-item-group >
              <v-list-item>
                  <v-list-item-action>
                    <v-checkbox v-model="settings" color="primary"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>With delivery</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
                <v-list-item>
                  <v-text-field
                    counter
                    v-model="nameLastName"
                    label="Name, Last name"
                    required
                  ></v-text-field>
                </v-list-item>
                <v-list-item>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-list-item>
                <v-list-item>
                  <v-text-field
                    v-model="phone"
                    :rules="phoneRules"
                    label="Phone Number"
                    required
                  ></v-text-field>
                </v-list-item>

                <v-list-item v-if="settings">
                    <v-select
                      :items="items"
                      label="State"
                      v-model="state"
                      @change="changeState"
                      :rules="[v => !!v || 'State is required']"
                      required
                    ></v-select>
              </v-list-item>

                <v-list-item v-if="settings">
                  <v-text-field
                    counter
                    v-model="address"
                    :rules="addressRules"
                    label="Address"
                    required
                  ></v-text-field>
                </v-list-item>
                <v-list-item v-if="settings">
                  <v-select
                    :items="payments"
                    label="Payment Method"
                    v-model="payment"
                    :rules="[v => !!v || 'Payment Method is required']"
                    required
                  ></v-select>
                </v-list-item>
                <v-list-item three-line>
                  <v-list-item-action>
                    <v-checkbox v-model="agree" color="primary"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Conditions</v-list-item-title>
                    <v-list-item-subtitle>I have read and agree with the terms and conditions.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#01235E" dark >
                Buy
              </v-btn>
            </v-card-actions>
          </v-card>
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
            settings: true,
            state: '',
            totalPrice: 143000,
            totalPriceWithoutDelivery: 143000,
            items: ['Yerevan', 'Kirovakan', 'Lennakan'],
            address: '',
            payment: '',
            payments: ['Cash', 'Online Payment'],
            nameLastName: '',
            email: '',
            agree: false,
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            phone: '',
            phoneRules: [
              v => !!v || 'Phone is required',
              v => new PhoneNumber(v, 'ARM').isValid() || `${v} is note valid phone number`
            ],
            addressRules: [
              v => !!v || 'Address is required',
              v => (v && v.length > 10) || 'Name must be more than 10 characters',
            ],
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
        changeState() {
          if(this.state !== 'Yerevan'){
            this.totalPrice = this.totalPrice + 3000
          }else{
            this.totalPrice = this.totalPriceWithoutDelivery
          }
        },
        deleteItem (item) {
          const index = this.desserts.indexOf(item)
          confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        },

      }
    }
</script>

<style scoped>

</style>
