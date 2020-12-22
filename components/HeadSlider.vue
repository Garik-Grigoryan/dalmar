<template>
  <v-carousel
    cycle
    :height="sliderMaxWidth"
    :hide-delimiters="true"
    show-arrows-on-hover
    v-resize="onResize"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
      :to="slide.url"
    >

        <v-row
          class="fill-height px-5 py-5"
          align="center"
          justify="start"
        >
          <div class="display-3" style="align-self: flex-end; color: #fff;">{{ slide.text }}</div>
        </v-row>

    </v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        slides: [
        ],
        sliderMaxWidth:  600,
      }
    },
    mounted () {
      this.onResize();
      if(this.slides.length == 0){
        this.component.componentElements.forEach((el) => {
          this.slides.push({text: el.name, src: el.image, url: el.url});
        })
      }
    },
    computed: {
      component() {
        return this.$store.getters['components/slider'];
      },
    },
    methods: {
      onResize () {
        if(window.innerWidth <= 960){
          this.sliderMaxWidth = 550;
        }else{
          this.sliderMaxWidth = 600;
        }
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      },
    },
  }
</script>
