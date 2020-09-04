<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="desserts" hide-default-footer class="elevation-1" >
          <template v-slot:item.image="{ item }">
            <v-img :src="item.image" :contain="true" width="100" height="100" ></v-img>
          </template>
          <template v-slot:item.count="{ item }">
            <v-text-field type="number" placeholder="0" @change="cahngeCount(item)" v-model="item.count" style="max-width: 60px; margin: 0 auto !important; text-align: center" min="1" ></v-text-field>
          </template>
          <template v-slot:item.color="{ item }">
            <v-card :color="item.color.toLowerCase()" class="d-flex text-center align-center mx-3" dark height="30" width="30" style="margin: 0 auto !important;" >
            </v-card>
          </template>
          <template v-slot:item.addToCart="{ item }">
            <v-icon  @click.stop="addTocart(item)">mdi-cart-outline</v-icon>
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
    head() {
      return {
        title: 'Wish list',
        meta: [
          { hid: 'Davmar - wish list', name: 'Davmar wish list', content: 'Davmar wish list' }
        ],
      };
    },
    async fetch({store}){
      await store.dispatch('brands/fetch');
      // await store.dispatch('wishListAndCart/fetch');
      // if(this.user){
      //   await store.dispatch('wishListAndCart/getWishListAndCartData', [this.user.id]);
      // }else{
      //   await store.dispatch('wishListAndCart/getWishListAndCartData', [0]);
      // }
      await store.dispatch('menus/fetch');
    },
    name: "Wishlist",
    data () {
      return {
        headers: [
          { text: this.$t('image'), value: 'image',  sortable: false,  align: 'start', },
          { text: this.$t('name'),value: 'name',  sortable: false,  align: 'center', },
          { text: this.$t('size'), value: 'size',  sortable: false,  align: 'center', },
          { text: this.$t('color'), value: 'color',  sortable: false,  align: 'center', },
          { text: this.$t('count'), value: 'count',  sortable: false,  align: 'center', },
          { text: this.$t('price'), value: 'price',  sortable: false,  align: 'center', },
          { text: this.$t('toCart'), value: 'addToCart',  sortable: false,  align: 'center', },
          { text: this.$t('remove'), value: 'remove',  sortable: false,  align: 'center', },
        ],
        desserts: [

        ],
      }
    },

    async mounted() {
      await this.$store.dispatch('wishListAndCart/fetch');
      if(this.user){
        await this.$store.dispatch('wishListAndCart/getWishListAndCartData', [this.user.id]);
      }else{
        await this.$store.dispatch('wishListAndCart/getWishListAndCartData', [0]);
      }
      this.wishListData.forEach(elem => {
        if(this.$i18n.locale == 'ru'){
          this.desserts.push({
            image: JSON.parse(elem.product.images)[0],
            name: elem.product.nam_rue,
            size: elem.size[0] !== undefined ? elem.size[0] : '',
            color: elem.color[0] !== undefined ? elem.color[0] : '',
            count: elem.count,
            price: elem.product.price,
            addToCart: elem.product.id,
            remove: 'mdi-delete',
          })
        }else if(this.$i18n.locale == 'am'){
          this.desserts.push({
            image: JSON.parse(elem.product.images)[0],
            name: elem.product.name_am,
            size: elem.size[0] !== undefined ? elem.size[0] : '',
            color: elem.color[0] !== undefined ? elem.color[0] : '',
            count: elem.count,
            price: elem.product.price,
            addToCart: elem.product.id,
            remove: 'mdi-delete',
          })
        }else if(this.$i18n.locale == 'en'){
          this.desserts.push({
            image: JSON.parse(elem.product.images)[0],
            name: elem.product.name_en,
            size: elem.size[0] !== undefined ? elem.size[0] : '',
            color: elem.color[0] !== undefined ? elem.color[0] : '',
            count: elem.count,
            price: elem.product.price,
            addToCart: elem.product.id,
            remove: 'mdi-delete',
          })
        }

      });
    },
    methods: {
      async addTocart(item){
        let user_id = 0;
        if(this.user){
          user_id = this.user.id
        }
        await this.$store.dispatch('wishListAndCart/setCArt', [item.addToCart, user_id, item.color, item.size, item.count])
      },
      async cahngeCount(item) {
        const index = this.desserts.indexOf(item);
        let user_id = 0;
        if(this.user){
          user_id = this.user.id;
        }
        this.$store.dispatch('wishListAndCart/updateFromWhishList', [index, user_id, item.count]).then(() => {

        });
      },
      async deleteItem (item) {
        const index = this.desserts.indexOf(item);
        let user_id = 0;
        if(this.user){
          user_id = this.user.id;
        }
        this.desserts.splice(index, 1);
        await this.$store.dispatch('wishListAndCart/removeFromWhishList', [index, user_id]).then(() => {
        });
      },

    },
    computed: {
      wishListData() {
        return this.$store.getters['wishListAndCart/wishListData'];
      }
    }
  }
</script>

<style scoped>

</style>
