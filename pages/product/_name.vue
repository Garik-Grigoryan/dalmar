<template>
  <div>
    <productDetail></productDetail>
    <h2 class="text-center">Related Products</h2>
    <PromoProducts :count="7"></PromoProducts>
    <deliveryBaner></deliveryBaner>
    <Subscribe></Subscribe>
  </div>
</template>
<script>
import productDetail from "../../components/productDetail";
import PromoProducts from "../../components/PromoProducts";
import deliveryBaner from "../../components/deliveryBaner";
import Subscribe from '~/components/Subscribe.vue'

export default {
    layout: 'product',
  components: {
    productDetail,
    PromoProducts,
    deliveryBaner,
    Subscribe
  },
  data () {
    return {

    }
  },
  }
</script>
