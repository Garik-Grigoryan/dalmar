<template>
  <v-sheet
    class="mx-auto"
    max-width="1300"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      :show-arrows="false"
    >
      <v-slide-item
        v-for="(product, n) in products"
        :key="n"
        v-slot:default="{ active, toggle }"
      >

        <v-hover v-slot:default="{ hover }">
          <v-card
            color="grey lighten-4"
            class="ma-4"
            width="270"
            height="270"
          >
            <nuxt-link :to="`/product/${product.id}`">
            <v-img
              :aspect-ratio="16/9"
              :src="JSON.parse(product.images)[0]"
              height="100%"
              cover
            >
            </v-img>
            </nuxt-link>
            <v-slide-y-reverse-transition>
              <v-card-text
                class="pt-6"
                style="position: absolute; bottom: 0; background-color: #b20839c9; height: 80px"
              >
                <v-btn
                  absolute
                  color="#01235e"
                  class="white--text"
                  fab
                  right
                  top
                  @click="addToCart($event, product.id)"
                >
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                <v-btn
                  absolute
                  color="#01235e"
                  class="white--text"
                  fab
                  top
                  style="right: 90px"
                  @click="addToWishlist($event, product.id)"
                >
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <nuxt-link :to="`/product/${product.id}`">
                <h3 v-if="$i18n.locale === 'am'" class=" font-weight-light font-weight-bold white--text mb-2" v-text="product.name_am"></h3>
                <h3 v-if="$i18n.locale === 'en'" class=" font-weight-light font-weight-bold white--text mb-2" v-text="product.name_en"></h3>
                <h3 v-if="$i18n.locale === 'ru'" class=" font-weight-light font-weight-bold white--text mb-2" v-text="product.name_ru"></h3>
                  <p class="price white--text">
                    <span class="font-weight-bold">{{ $t('price') }}</span>
                    <span v-if="product.discountType == 'percent'"><span class="discount">{{product.price}}</span> {{product.price - (product.price * product.discount)/100}}</span>
                    <span v-else-if="product.discountType == 'price'">{{product.price - product.discount}}</span>
                    <span v-else>{{product.price}}</span>
                    AMD
                  </p>
                </nuxt-link>
              </v-card-text>
            </v-slide-y-reverse-transition>
          </v-card>
        </v-hover>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    props: ['count', 'type'],
    name: 'promoProductComponent',
    data: () => ({
      model: null,
    }),
    methods: {
      addToWishlist(e, id) {
        let user_id = 0;
        if(this.user){
          user_id = this.user.id
        }
        this.$store.dispatch('wishListAndCart/setWishList', [id, user_id])
      },
      addToCart(e, id) {
        let user_id = 0;
        if(this.user){
          user_id = this.user.id
        }
        this.$store.dispatch('wishListAndCart/setCArt', [id, user_id])
      }
    },
    computed: {
      products() {
        if(this.type === 'new'){
          return this.$store.getters['products/newProducts'];
        }else if(this.type === 'best'){
          return this.$store.getters['products/bestProducts'];
        }else if(this.type === 'sales'){
          return this.$store.getters['products/salesProducts'];
        }
      },
    },
    mounted() {
      console.log(this.products)
    }
  }
</script>

<style scoped>
  .blue-text{
    color: #01235e;
  }
  .blue_bg{
    background-color: #01235e;
  }
  .price{
    font-size: 18px;
  }
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
  }
  .discount{
    opacity: 0.8;
    text-decoration: line-through;
    color: #dbdbdb;
  }
</style>
