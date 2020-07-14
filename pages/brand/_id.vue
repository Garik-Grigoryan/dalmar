<template>
  <div>
    <v-container>
      <v-btn class="icon_filter" icon @click="filter" style="display:none">
        <v-icon>mdi-filter-plus</v-icon>
      </v-btn>
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
        await store.dispatch('wishListAndCart/fetch');
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
        filter() {
          if(document.getElementsByClassName("product_filter")[0].className.indexOf('v-navigation-drawer--close') === -1) {
            document.getElementsByClassName("product_filter")[0].classList.remove("v-navigation-drawer--open");
            document.getElementsByClassName("product_filter")[0].classList.add("v-navigation-drawer--close");
            document.getElementsByClassName("product_filter")[0].style.transform = "translateX(-100%)";
          } else {
            document.getElementsByClassName("product_filter")[0].classList.remove("v-navigation-drawer--close");
            document.getElementsByClassName("product_filter")[0].classList.add("v-navigation-drawer--open");
            document.getElementsByClassName("product_filter")[0].style.transform = "translateX(0%)";
          }
        }
      },
    }
</script>

<style scoped>
  @media (max-width: 767px) {
    .icon_filter {
      display: block !important;
    }
    .product_filter {
      transform: translateX(-100%);
    }
  }
</style>
