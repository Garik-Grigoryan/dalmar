<template>
  <v-sheet
    class="mx-auto"
    max-width=""
  >
    <v-row justify="center">
      <v-card
        v-for="(slide, i) in slides"
        :key="i"
        :color="slide.color"
        class="ma-4"
        height="300"
        width="30%"
        min-width="300"
        to="/brand/polo"
      >
        <v-img
          :src="slide.src"
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
        {text: 'US Polo', src: '/uspolo.jpg', color: '#ffffff'},
        {text: 'Second', src: '/giordano.jpg', color: '#000000'},
        {text: 'US Polo', src: '/uspolo.jpg', color: '#ffffff'},
      ],
    }),
  }
</script>
