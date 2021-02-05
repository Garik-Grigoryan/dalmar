<template>
      <div>
        <HeadSlider></HeadSlider>
        <v-container>
        <Brands></Brands>
        <MiddleBanner></MiddleBanner>
          <h1  class="text-center mb-5" v-text="$t('bestSales')"></h1>
          <PromoProducts :count="7" type="best"></PromoProducts>
          <h1  class="text-center mb-5" v-text="$t('newProducts')"></h1>
          <PromoProducts :count="7" type="new"></PromoProducts>
          <v-row justify="center">
            <v-col lg="12" md="12" style="padding: 12px 45px;">
<!--              <v-img src="/baner.png" contain  width="100%" max-height="640" aspect-ratio="1"></v-img>-->
            </v-col>
          </v-row>
          <deliveryBaner></deliveryBaner>
          <Subscribe></Subscribe>

        </v-container>
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
      </div>
</template>

<script>
import HeadSlider from '~/components/HeadSlider.vue'
import Brands from '~/components/Brands.vue'
import ProductsSlider from '~/components/ProductsSlider.vue'
import PromoProducts from '~/components/PromoProducts.vue'
import Subscribe from '~/components/Subscribe.vue'
import MiddleBanner from "../components/MiddleBanner";
import deliveryBaner from "../components/deliveryBaner";

export default {
  head() {
    return {
      title: 'Home',
      meta: [
        { hid: 'Davmar - home', name: 'Davmar home', content: 'Buy online from anywhere.' }
      ],
    };
  },
  async fetch({store}){
    await store.dispatch('brands/fetch');
    await store.dispatch('products/filterAsType', ['new']);
    await store.dispatch('products/filterAsType', ['best']);
    await store.dispatch('products/filterAsType', ['sales']);
    await store.dispatch('components/getComponent', [1]);
    await store.dispatch('components/getComponent', [2]);
    // await store.dispatch('wishListAndCart/fetch');
    await store.dispatch('menus/fetch');
  },

  components: {
    HeadSlider,
    Brands,
    ProductsSlider,
    PromoProducts,
    Subscribe,
    MiddleBanner,
    deliveryBaner
  },
  data () {
    return {
      justifyCenter: 'center',
      notification: '',
      color: 'success',
      snackbar: false
    }
  },
  async mounted() {
    console.log(this.$route.query.payment);
    if(this.$route.query.payment){
      if(this.$route.query.payment == 'success'){
        this.color = 'success';
        this.notification = 'Payment Successful';
        this.snackbar = true;
      }else if(this.$route.query.payment = 'fail'){
        this.color = 'error';
        this.notification = 'Payment Failed';
        this.snackbar = true;
      }
    }

      await this.$store.dispatch('wishListAndCart/fetch');
      if(this.user){
        await this.$store.dispatch('wishListAndCart/getWishListAndCartData', [this.user.id]);
      }else{
        await this.$store.dispatch('wishListAndCart/getWishListAndCartData', [0]);
      }
  },
}
</script>
