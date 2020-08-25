<template>
  <div>
    <v-container>
      <v-row justify="center">
        <productCard
          v-for="(product, i) in products.products"
          :key="i"
          :image="JSON.parse(product.images)[0]"
          :id="product.id"
          :title_en="product.name_en"
          :title_ru="product.name_ru"
          :title_am="product.name_am"
          :price="product.price"
        ></productCard>
      </v-row>
      <div v-if="products.count > 1" class="text-center">
        <v-pagination
          v-model="page"
          :length="products.count"
          :total-visible="7"
          @input="next"
        ></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
  import productCard from "../../components/productCard";
    export default {
      watchQuery: ["page"],

      async fetch({route, store}) {
        await store.dispatch('brands/getBrand', [route.params.id]);
        await store.dispatch('products/getProductByBrandId', [route.params.id, route.query.page]);
        await store.dispatch('brands/getBrandFilters', [route.params.id]);
        await store.dispatch('brands/fetch');

        await store.dispatch('menus/fetch');
      },
      layout: 'brand',
      components: {
        productCard
      },
      data () {
        return {
          page: 1,
        }
      },
      computed: {
        products() {
          return this.$store.getters['products/productByBrand'];
        },
      },
      beforeRouteLeave (to, from, next) {
        this.$cookies.set('davmar_filter', [], {
          path: '/',
          maxAge: 10 * 365 * 24 * 60 * 60
        });
        next();
      },
      methods:{
        next() {
          let cookieRes = this.$cookies.get('davmar_filter');
          if(cookieRes != undefined && cookieRes[2] === this.$route.params.id){
            cookieRes.push(this.page);
            this.$store.dispatch('products/Filter', cookieRes).then(r => {
            })
          }else{
            this.$router.push({ query: { page: this.page } });
          }
        },
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
