<template>
  <v-sheet
    class="mx-auto"
    max-width=""
  >
    <v-row justify="center">

      <v-card
        v-for="(brand, i) in brands"
        :key="i"
        :color="brand.brand.color"
        class="ma-4"
        height="300"
        width="30%"
        min-width="300"
        :to="localePath(`/brand/${brand.brand.id}?page=1`)"
      >
        <v-img
          :src="brand.brand.image"
          height="300"
          :contain="true"
        >
        </v-img>
      </v-card>
    </v-row>

  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
      slides: [

      ],
    }),
    mounted() {
      console.log(this.brands);
    },
    computed: {
      brands() {
        return this.$store.getters['brands/brands'];
      }
    },
  }
</script>
