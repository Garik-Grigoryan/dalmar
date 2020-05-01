<template>
  <div>
    <v-container>
      <v-row justify="center">
        <productCard   v-for="n in 12" :key="n"></productCard>
      </v-row>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
        ></v-pagination>
      </div>
    </v-container>
  </div>

<!--  {{$route.params.name}}-->

</template>

<script>
  import productCard from "../../components/productCard";
    export default {
      layout: 'brand',
      components: {
        productCard
      },
      data () {
        return {
          page: 1,
        }
      },
    }
</script>

<style scoped>

</style>
