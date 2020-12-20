<template>
  <v-container>
    <v-row justify="center">
      <v-col lg="8" md="12">
        <v-data-table
          :headers="headers"
          :items="getUserOrders"
          :single-expand="true"
          :expanded.sync="expanded"
          item-key="id"
          show-expand
          class="elevation-1"
        >
          <template v-slot:item.statusName="{ item }" >
            {{item.statusName.value}}
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length" style="padding: 0;">

              <v-data-table :headers="ProdHeaders" :items="item.mainProducts" item-key="id" hide-default-footer class="" >

                <template v-slot:item.image="{ item }">
                  <v-img :src="item.image" :contain="true" width="100" height="100" ></v-img>
                </template>
                <!--              <template v-slot:item.price="{ el }">-->
                <!--                <v-card-text>{{el.product.price}}</v-card-text>-->
                <!--              </template>-->
                <template v-slot:item.color="{ item }">
                  <v-card :color="item.color.toLowerCase()" class="d-flex text-center align-center mx-3" dark height="30" width="30" style="margin: 0 auto !important;" >
                  </v-card>
                </template>

              </v-data-table>
            </td>

          </template>
          <template v-slot:item.created_at="{ item }">
            <v-card-text  style="padding: 0" >{{$dateFns.format(new Date(item.created_at), 'yyyy-MM-dd HH:mm')}}</v-card-text>
          </template>
          <template v-slot:item.refund="{ item }">
            <v-icon v-if="item.status != 4" color="error" @click="refund(this, item.id)">mdi-backup-restore</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :color="color"
      :right="true"
      :timeout="3000"
      :top="true"
      rounded="pill"
    >
      {{ notification }}

      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="snackbar = false"
        >

          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
    export default {
      name: "index",
      layout: 'dashboard',
      middleware: 'admin',

      async asyncData({store}) {
        await store.dispatch('user/getOrders', ["All"]);
      },
      data() {
        return {
          expanded: [],
          singleExpand: false,
          notification: '',
          color: 'success',
          snackbar: false,
          headers: [
            {text: '#', value: 'id'},
            {text: 'Name', value: 'name'},
            {text: 'Address', value: 'address'},
            {text: 'Buy date', value: 'created_at'},
            {text: 'Payment Type', value: 'payment_type'},
            {text: 'Total price', value: 'totalPrice'},
            {text: 'Status', value: 'statusName'},
            {text: 'Refund', value: 'refund'},
            {text: '', value: 'data-table-expand'},
          ],
          ProdHeaders: [
            {text: this.$t('image'), value: 'image', sortable: false, align: 'start',},
            {text: this.$t('name'), value: 'name', sortable: false, align: 'center',},
            {text: this.$t('size'), value: 'size', sortable: false, align: 'center',},
            {text: this.$t('color'), value: 'color', sortable: false, align: 'center',},
            {text: this.$t('count'), value: 'count', sortable: false, align: 'center',},
            {text: this.$t('price'), value: 'price', sortable: false, align: 'center',},
          ],
          desserts: [],
        }
      },
      methods: {
        async refund(el, id){
          this.$confirm('Do you really want to refund this transaction?').then(async res => {
            if(res){
              await this.$store.dispatch('user/refundPayment', [id]).then(async (res) => {
                if(res.success == true){
                  this.color = 'success';
                  this.notification = 'Payment Successful refunded';
                  this.snackbar = true;
                  await this.$store.dispatch('user/getOrders', ["All"]);
                }else{
                  this.color = 'error';
                  this.notification = res.message;
                  this.snackbar = true;
                }
              })

            }
        })
        }
      },
      computed: {
        getUserOrders() {
          return this.$store.getters['user/orders'];
        }
      },
      async mounted() {
        await this.$store.dispatch('wishListAndCart/fetch');
        for (let el in this.getUserOrders) {
          for (let elem in this.getUserOrders[el].productItem.data) {
            this.getUserOrders[el].mainProducts = []
            if(this.getUserOrders[el].productItem.data[elem].product != null){
              this.getUserOrders[el].mainProducts.push({
                image: JSON.parse(this.getUserOrders[el].productItem.data[elem].product.images)[0],
                name: this.getUserOrders[el].productItem.data[elem].product.name_en,
                size: this.getUserOrders[el].productItem.data[elem].size[0] !== undefined ? this.getUserOrders[el].productItem.data[elem].size[0] : '',
                color: this.getUserOrders[el].productItem.data[elem].color[0] !== undefined ? this.getUserOrders[el].productItem.data[elem].color[0] : '',
                count: this.getUserOrders[el].productItem.data[elem].count,
                price: this.getUserOrders[el].productItem.data[elem].product.price,
              })
            }

          }
        }
      }
    }
</script>

<style scoped>

</style>
