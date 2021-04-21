<template>
  <div>
    <productDetail></productDetail>
    <h2 class="text-center">{{ $t('relatedProducts') }}</h2>
    <PromoProducts :count="7" type="best"></PromoProducts>
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
  async fetch({route, store}) {
    await store.dispatch('brands/fetch');
    await store.dispatch('menus/fetch');
    await store.dispatch('products/filterAsType', ['best']);
    await store.dispatch('products/getProduct', [route.params.name]);
  },
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
  async mounted() {
    await this.$store.dispatch('wishListAndCart/fetch');
    if(this.user){
      await this.$store.dispatch('wishListAndCart/getWishListAndCartData', [this.user.id]);
    }else{
      await this.$store.dispatch('wishListAndCart/getWishListAndCartData', [0]);
    }
  }
}
</script>
