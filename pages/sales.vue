<template>
  <v-container>
    <v-row justify="center">
      <productCard
        v-for="(product, i) in products"
        :key="i"
        :image="JSON.parse(product.images)[0]"
        :id="product.id"
        :title_en="product.name_en"
        :title_ru="product.name_ru"
        :title_am="product.name_am"
        :price="product.price"
        :discountType="product.discountType"
        :discount="product.discount"
      ></productCard>

    </v-row>

  </v-container>
</template>

<script>
  import productCard from "../components/productCard";
  export default {
    name: "sales",
    layout: 'product',
    head() {
      return {
        title: 'Sales',
        meta: [
          { hid: 'Davmar - sales', name: 'Davmar sales', content: 'Davmar sales' }
        ],
      };
    },
    components: {
      productCard
    },
    async fetch({store}) {
      await store.dispatch('brands/fetch');
      await store.dispatch('menus/fetch');
      await store.dispatch('products/salesProducts');
    },
    computed: {
      products(){
        return this.$store.getters['products/AllSalesProducts'];
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

<style scoped>
</style>
