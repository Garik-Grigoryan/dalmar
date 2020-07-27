<template>
      <div>
        <HeadSlider></HeadSlider>
        <v-container>
        <Brands></Brands>
        <MiddleBanner></MiddleBanner>
          <h1  class="text-center mb-5">Top Sales</h1>
          <PromoProducts :count="7" type="best"></PromoProducts>
          <h1  class="text-center mb-5">New Products</h1>
          <PromoProducts :count="7" type="new"></PromoProducts>
          <v-row justify="center">
            <v-col lg="8" md="12">
              <v-img src="/baner.png" cover width="100%" max-height="640" aspect-ratio="1"></v-img>
            </v-col>
          </v-row>
          <Subscribe></Subscribe>

        </v-container>
      </div>
</template>

<script>
import HeadSlider from '~/components/HeadSlider.vue'
import Brands from '~/components/Brands.vue'
import ProductsSlider from '~/components/ProductsSlider.vue'
import PromoProducts from '~/components/PromoProducts.vue'
import Subscribe from '~/components/Subscribe.vue'
import MiddleBanner from "../components/MiddleBanner";

export default {
  async fetch({store}){
    await store.dispatch('brands/fetch');
    await store.dispatch('products/filterAsType', ['new']);
    await store.dispatch('products/filterAsType', ['best']);
    await store.dispatch('products/filterAsType', ['sales']);
    // await store.dispatch('wishListAndCart/fetch');
    await store.dispatch('menus/fetch');
  },

  components: {
    HeadSlider,
    Brands,
    ProductsSlider,
    PromoProducts,
    Subscribe,
    MiddleBanner
  },
  data () {
    return {
      justifyCenter: 'center',
    }
  },
  async mounted() {
    await this.$store.dispatch('wishListAndCart/fetch');
  },
}
</script>
