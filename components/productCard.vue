<template>
  <v-hover v-slot:default="{ hover }">
  <v-card
    color="grey lighten-4"
    class="ma-4"
    width="350"
  >
    <nuxt-link to="/product/jinsGray">
      <v-img
        :aspect-ratio="16/9"
        src="/jins1.jpg"
        position="top"
      >
      </v-img>
    </nuxt-link>
    <v-slide-y-reverse-transition>
      <v-card-text
        v-show="hover"
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
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <nuxt-link to="/product/jinsGray">
          <h3 class=" font-weight-light font-weight-bold white--text mb-2">QW cooking utensils</h3>
          <p class="price white--text"><span class="font-weight-bold">Price</span> 15.000 AMD</p>
        </nuxt-link>
      </v-card-text>
    </v-slide-y-reverse-transition>
  </v-card>
  </v-hover>
</template>

<script>
    export default {
        name: "productCard"
    }
</script>

<style scoped>

</style>
