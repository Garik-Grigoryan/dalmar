<template>
  <v-container>
    <v-row>
      <v-col lg="8" md="12">
        <v-data-table :headers="headers" :items="desserts" hide-default-footer class="elevation-1" >
          <template v-slot:item.image="{ item }">
            <v-img :src="item.image" :contain="true" width="100" height="100" ></v-img>
          </template>
          <template v-slot:item.count="{ item }">
            <v-text-field type="number" @input="summCount()" @change="cahngeCount(item)" placeholder="0" v-model="item.count" style="max-width: 60px; margin: 0 auto !important; text-align: center" min="1" ></v-text-field>
          </template>
          <template v-slot:item.color="{ item }">
            <v-card :color="item.color" class="d-flex text-center align-center mx-3" dark height="30" width="30" style="margin: 0 auto !important;" >
            </v-card>
          </template>
          <template v-slot:item.remove="{ item }">
            <v-icon  @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-col>
      <v-col lg="4" md="12">
        <v-card>
          <v-form v-model="formValid">
            <v-toolbar color="#b20839" dark>
              <v-toolbar-title>
                {{$t('cart')}}
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>

              <v-list-item-group >
<!--                <v-list-item>-->
<!--                  <v-list-item-action>-->
<!--                    <v-checkbox v-model="settings" color="primary"></v-checkbox>-->
<!--                  </v-list-item-action>-->
<!--                  <v-list-item-content>-->
<!--                    <v-list-item-title>{{$t('withDelivery')}}</v-list-item-title>-->
<!--                  </v-list-item-content>-->
<!--                </v-list-item>-->
                <v-list-item>
                  <v-text-field v-model="nameLastName" :rules="requiredField" :label="$t('nameLastName')" required ></v-text-field>
                </v-list-item>
                <v-list-item>
                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
                </v-list-item>
                <v-list-item>
                  <v-text-field v-model="phone" :rules="phoneRules" :label="$t('phone')" required ></v-text-field>
                </v-list-item>

<!--                <v-list-item v-if="settings">-->
<!--                  <v-select :items="items" label="State" v-model="state" @change="changeState" :rules="[v => !!v || 'State is required']" required ></v-select>-->
<!--                </v-list-item>-->

                <v-list-item v-if="settings">
                  <v-text-field
                    v-model="address"
                    :rules="addressRules"
                    :label="$t('address')"
                    required
                  ></v-text-field>
                </v-list-item>
                <v-list-item v-if="settings">
                  <v-select
                    :items="payments"
                    :label="$t('paymentMethod')"
                    v-model="payment"
                    :rules="[v => !!v || 'Payment Method is required']"
                    required
                  ></v-select>
                </v-list-item>
                <v-list-item v-if="settings">
                  <v-select
                    :items="all_regions"
                    :label="$t('region')"
                    v-model="selected_region"
                    @change="onChangeSelectedRegion"
                    required
                  ></v-select>
                </v-list-item>
                <v-list-item three-line>
                  <v-list-item-action>
                    <v-checkbox :rules="requiredField" v-model="agree" color="primary"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content style="display: block" @click="dialog = true">
                    <v-list-item-title>{{$t('conditions')}}</v-list-item-title>
                    <v-list-item-subtitle>{{$t('readConditions')}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-card-text>
            <v-list v-if="selected_region !== ''">
              <v-list-item-group>
                <v-list-item v-if="selected_region_price !== '0'" style="font-size: 18px;">
                  <v-list-item-icon>
                    {{$t('delivery')}}
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title> {{selected_region_price}} AMD</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item v-else style="font-size: 18px;">
                  <v-list-item-icon>
                    {{$t('freeDelivery')}}
                  </v-list-item-icon>
                  <v-list-item-content></v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-list disabled>
              <v-list-item-group>
                <v-list-item style="font-size: 18px;">
                  <v-list-item-icon>
                    {{$t('totalCount')}}
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title> {{count}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
              <v-list-item-group>
                <v-list-item style="font-size: 18px;">
                  <v-list-item-icon>
                    {{$t('totalPrice')}}
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title style="color: #e60000; font-weight: 600; min-width: 100px"> {{totalPrice}} AMD</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :disabled="!formValid" @click="buy"  color="#e60000" dark >
                {{$t('buy')}}
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="996" >
      <v-card>
        <v-card-title  style="display: flex; justify-content: space-between;" class="headline">{{$t('conditions')}}</v-card-title>
        <v-container fluid>
          <p class="px-3" v-html="conditions"></p>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false" >{{$t('close')}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  var PhoneNumber = require( 'awesome-phonenumber' );
  export default {
    head() {
      return {
        title: 'Cart',
        meta: [
          { hid: 'Davmar - cart', name: 'Davmar cart', content: 'Davmar cart' }
        ],
      };
    },
    async fetch({store}){
      await store.dispatch('brands/fetch');
      await store.dispatch('regions/fetch');

      // await store.dispatch('wishListAndCart/fetch');
      // if(this.user){
      //   await store.dispatch('wishListAndCart/getWishListAndCartData', [this.user.id]);
      // }else{
      //   await store.dispatch('wishListAndCart/getWishListAndCartData', [0]);
      // }
      await store.dispatch('menus/fetch');
      await store.dispatch('pages/getById', [1]);

    },
    name: "cart",
    data () {
      return {
        conditions: '',
        settings: true,
        dialog: false,
        state: '',
        formValid: false,
        totalPrice: 0,
        totalPriceWithoutDelivery: 0,
        items: ['Yerevan', 'Kirovakan', 'Lennakan'],
        address: '',
        payment: '',
        payments: ['Cash', 'Online Payment'],
        nameLastName: '',
        email: '',
        agree: false,
        count: 0,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        requiredField: [
          v => !!v || 'Field is required',
        ],
        phone: '',
        phoneRules: [
          v => !!v || 'Phone is required',
          v => new PhoneNumber(v, 'AM').isValid() || `${v} is note valid phone number`
        ],
        addressRules: [
          v => !!v || 'Address is required',
        ],
        headers: [
          { text: this.$t('image'), value: 'image',  sortable: false,  align: 'start', },
          { text: this.$t('name'),value: 'name',  sortable: false,  align: 'center', },
          { text: this.$t('size'), value: 'size',  sortable: false,  align: 'center', },
          { text: this.$t('color'), value: 'color',  sortable: false,  align: 'center', },
          { text: this.$t('count'), value: 'count',  sortable: false,  align: 'center', },
          { text: this.$t('price'), value: 'price',  sortable: false,  align: 'center', },
          { text: this.$t('remove'), value: 'remove',  sortable: false,  align: 'center', },
        ],
        desserts: [

        ],
        selected_region: '',
        selected_region_price: '',
        cost_of_delivery: '0',
        all_regions: []
      }
    },
    computed: {
      menus() {
        return this.$store.getters['menus/menus'];
      },
      cartProducts() {
        let cookieResCart = this.$cookies.get('davmar_cart');
        if(cookieResCart !== undefined){
          this.$store.dispatch('products/getProductsByIds', [cookieResCart]);
          return this.$store.getters['products/productByIds'];
        }
      },
      cartData() {
        return this.$store.getters['wishListAndCart/cartData'];
      },
      cartId() {
        return this.$store.getters['wishListAndCart/cart'];
      },
      conditionsPage() {
        return this.$store.getters['pages/page'];
      },
      regions() {
        return this.$store.getters['regions/regions'];
      }
    },
    async mounted() {
      if(this.$i18n.locale === 'am'){
        this.conditions = this.conditionsPage.html_am
      }
      else if(this.$i18n.locale === 'en'){
        this.conditions = this.conditionsPage.html
      }
      else if(this.$i18n.locale === 'ru'){
        this.conditions = this.conditionsPage.html_ru
      }
      if(this.user){
        this.nameLastName = this.user.name;
        this.email = this.user.email;
        this.phone = this.user.phone || '';
        this.address = this.user.address || '';
      }
      await this.$store.dispatch('wishListAndCart/fetch');
      if(this.user){
        await this.$store.dispatch('wishListAndCart/getWishListAndCartData', [this.user.id]);
      }else{
        await this.$store.dispatch('wishListAndCart/getWishListAndCartData', [0]);
      }
      this.cartData.forEach((elem, key) => {
        if(this.$i18n.locale == 'ru'){
          this.desserts.push({
            image: JSON.parse(elem.product.images)[0],
            name: elem.product.nam_rue,
            size: elem.size && elem.size[0] !== undefined ? elem.size : '',
            color: elem.color && elem.color.length > 0 ? elem.color : '#000000',
            count: elem.count,
            price: elem.product.price,
            remove: key,
          })
        }else if(this.$i18n.locale == 'am'){
          this.desserts.push({
            image: JSON.parse(elem.product.images)[0],
            name: elem.product.name_am,
            size: elem.size && elem.size[0] !== undefined ? elem.size : '',
            color: elem.color && elem.color.length > 0 ? elem.color : '#000000',
            count: elem.count,
            price: elem.product.price,
            remove: key,
          })
        }else if(this.$i18n.locale == 'en'){
          this.desserts.push({
            image: JSON.parse(elem.product.images)[0],
            name: elem.product.name_en,
            size: elem.size && elem.size[0] !== undefined ? elem.size : '',
            color: elem.color && elem.color.length > 0 ? elem.color : '#000000',
            count: elem.count,
            price: elem.product.price,
            remove: key,
          })
        }

      });
      await this.summCount();

      this.regions.forEach((elem, key) => {
        if(this.$i18n.locale == 'ru'){
          this.all_regions.push(elem.name_ru);
        } else if(this.$i18n.locale == 'am'){
          this.all_regions.push(elem.name_am);
        } else if(this.$i18n.locale == 'en'){
          this.all_regions.push(elem.name_en);
        }
      });
    },
    methods: {
      buy() {
        if(this.payment == 'Cash'){
          if(this.user){
            this.$store.dispatch('user/buy', [this.user.id, this.cartId, this.totalPrice, this.address, this.payment, this.nameLastName, this.email, this.count, this.phone]).then(() => {
              this.$store.dispatch('wishListAndCart/emptyCart')
              this.desserts = [];
            });
          }else{
            this.$store.dispatch('user/buy', [null, this.cartId, this.totalPrice, this.address, this.payment, this.nameLastName, this.email, this.count, this.phone]).then(() => {
              this.$store.dispatch('wishListAndCart/emptyCart')
              this.desserts = [];
            });
          }
        }else{
          if(this.user){
            this.$store.dispatch('user/buy', [this.user.id, this.cartId, this.totalPrice, this.address, this.payment, this.nameLastName, this.email, this.count, this.phone]).then((res) => {
              this.$store.dispatch('wishListAndCart/emptyCart');
              this.desserts = [];
              this.$store.dispatch('user/initOrder', [res.orderID+' order from davmar.am', res.orderID, this.totalPrice]).then((redirectUrl) => {
                window.location.href = redirectUrl.url;
              });
            });
          }else{
            this.$store.dispatch('user/buy', [null, this.cartId, this.totalPrice, this.address, this.payment, this.nameLastName, this.email, this.count, this.phone]).then((res) => {
              this.$store.dispatch('wishListAndCart/emptyCart');
              this.desserts = [];
              this.$store.dispatch('user/initOrder', [res.orderID+' order from davmar.am', res.orderID, this.totalPrice]).then((redirectUrl) => {
                window.location.href = redirectUrl.url;

              });
            });
          }
        }
      },
      init() {
        this.desserts = [];
        this.cartData.forEach((elem, key) => {
          if(this.$i18n.locale == 'ru'){
            this.desserts.push({
              image: JSON.parse(elem.product.images)[0],
              name: elem.product.nam_rue,
              size: elem.size && elem.size[0] !== undefined ? elem.size :'',
              color: elem.color && elem.color.length > 0 ? elem.color[0] : '#000000',
              count: elem.count,
              price: elem.product.price,
              remove: key,
            })
          }else if(this.$i18n.locale == 'am'){
            this.desserts.push({
              image: JSON.parse(elem.product.images)[0],
              name: elem.product.name_am,
              size: elem.size && elem.size[0] !== undefined ? elem.size :'',
              color: elem.color && elem.color.length > 0 ? elem.color[0] : '#000000',
              count: elem.count,
              price: elem.product.price,
              remove: key,
            })
          }else if(this.$i18n.locale == 'en'){
            this.desserts.push({
              image: JSON.parse(elem.product.images)[0],
              name: elem.product.name_en,
              size: elem.size && elem.size[0] !== undefined ? elem.size : '',
              color: elem.color && elem.color.length > 0 ? elem.color[0] : '#000000',
              count: elem.count,
              price: elem.product.price,
              remove: key,
            })
          }
        });
      },
      changeState() {
        if(this.state !== 'Yerevan'){
          this.totalPrice = this.totalPrice + 3000
        }else{
          this.totalPrice = this.totalPriceWithoutDelivery
        }
      },
      async deleteItem (item) {
        const index = this.desserts.indexOf(item);
        let user_id = 0;
        if(this.user){
          user_id = this.user.id;
        }
        if(confirm('Are you sure you want to delete this item?')){
          this.desserts.splice(index, 1);
          await this.$store.dispatch('wishListAndCart/removeFromCart', [index, user_id]).then(() => {
            this.init();
            this.summCount();
          });

        }
      },
      async cahngeCount(item) {
        const index = this.desserts.indexOf(item);
        let user_id = 0;
        if(this.user){
          user_id = this.user.id;
        }
        this.$store.dispatch('wishListAndCart/updateFromCart', [index, user_id, item.count]).then(() => {
          this.init();
          this.summCount();
        });
      },
      async summCount() {
        this.count = 0;
        this.totalPrice = 0;
        this.desserts.forEach(elem => {
          this.count += parseInt(elem.count);
          this.totalPrice += elem.price * elem.count;
        })
      },
      onChangeSelectedRegion() {
        let region_en = this.regions.find(o => o.name_en === this.selected_region);
        let region_am = this.regions.find(o => o.name_am === this.selected_region);
        let region_ru = this.regions.find(o => o.name_ru === this.selected_region);
        if(region_en !== undefined) {
          this.selected_region_price = region_en.delivery_price;
          this.totalPrice = this.totalPrice - parseInt(this.cost_of_delivery) + parseInt(region_en.delivery_price);
          this.cost_of_delivery = region_en.delivery_price;
        } else if(region_am !== undefined) {
          this.selected_region_price = region_am.delivery_price;
          this.totalPrice = this.totalPrice - parseInt(this.cost_of_delivery) + parseInt(region_am.delivery_price);
          this.cost_of_delivery = region_am.delivery_price;
        } else if(region_ru !== undefined) {
          this.selected_region_price = region_ru.delivery_price;
          this.totalPrice = this.totalPrice - parseInt(this.cost_of_delivery) + parseInt(region_ru.delivery_price);
          this.cost_of_delivery = region_ru.delivery_price;
        }
      }
    }
  }
</script>

<style scoped>

</style>
