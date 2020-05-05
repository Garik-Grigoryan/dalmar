<template>
      <div>
        <HeadSlider></HeadSlider>
        <v-container>
        <Brands></Brands>
        <MiddleBanner></MiddleBanner>
<!--        <h1 class="text-center">For Mean</h1>-->
<!--        <ProductsSlider :count="10"></ProductsSlider>-->
<!--        <h1 class="text-center">For Woman</h1>-->
<!--        <ProductsSlider :count="15"></ProductsSlider>-->

          <h1  class="text-center mb-5">Top Sales</h1>
          <PromoProducts :count="7"></PromoProducts>
          <h1  class="text-center mb-5">New Products</h1>
          <PromoProducts :count="7"></PromoProducts>
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
  }
}
</script>
