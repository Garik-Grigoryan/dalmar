<template>
  <v-sheet
    class="mx-auto"
    max-width="1300"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      :show-arrows="false"
    >
      <v-slide-item
        v-for="n in count"
        :key="n"
        v-slot:default="{ active, toggle }"
      >

        <v-hover v-slot:default="{ hover }">
        <v-card
          color="grey lighten-4"
          class="ma-4"
          width="270"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          >
          </v-img>
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
            <h3 class=" font-weight-light font-weight-bold white--text mb-2">QW cooking utensils</h3>
            <p class="price white--text"><span class="font-weight-bold">Price</span> 15.000 AMD</p>
          </v-card-text>
          </v-slide-y-reverse-transition>
        </v-card>
        </v-hover>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    props: ['count'],
    data: () => ({
      model: null,
    }),
  }
</script>

<style scoped>
  .blue-text{
    color: #01235e;
  }
  .blue_bg{
    background-color: #01235e;
  }
  .price{
    font-size: 18px;
  }
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    width: 100%;
  }
</style>
