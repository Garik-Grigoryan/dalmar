<template>
    <div  v-resize="onResize">
      <v-container>
        <v-row justify="center">
          <v-col lg="8" md="12">
            <v-row>
              <v-col lg="8" md="12">
                <v-row>
                  <v-col cols="6">
                    <nuxt-link v-if="url[0]" :to="localePath(url[0])">
                      <v-img
                        :src="image[0]"
                        height="100%"
                      >
                      </v-img>
                    </nuxt-link>
                    <v-img
                      v-else
                      :src="image[0]"
                      height="100%"
                    >
                    </v-img>
                  </v-col>
                  <v-col cols="6">
                    <nuxt-link v-if="url[1]" :to="localePath(url[1])">
                      <v-img
                        :src="image[1]"
                        height="100%"
                      >
                      </v-img>
                    </nuxt-link>
                    <v-img
                      v-else
                      :src="image[1]"
                      height="100%"
                    >
                    </v-img>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <nuxt-link v-if="url[2]" :to="localePath(url[2])">
                      <v-img
                        :src="image[2]"
                        height="100%"
                      >
                      </v-img>
                    </nuxt-link>
                    <v-img
                      v-else
                      :src="image[2]"
                      height="100%"
                    >
                    </v-img>
                  </v-col>
                </v-row>
              </v-col>
              <v-col lg="4" md="12" class="longImage">
                <nuxt-link v-if="url[3]" :to="localePath(url[3])">
                  <v-img
                    :src="image[3]"
                    height="100%"
                  >
                  </v-img>
                </nuxt-link>
                <v-img
                  v-else
                  :src="image[3]"
                  height="100%"
                >
                </v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-container>
    </div>
</template>

<script>
    export default {
        name: "MiddleBanner",
      data () {
        return {
          contain:  true,
          image: [],
          url: [],
        }
      },
        mounted () {
          this.onResize();
            this.component.componentElements.forEach((el, i) => {
              this.image.push(el.image);
              this.url.push(el.url);
            })
        },
        methods: {
          onResize () {
            if(window.innerWidth <= 1263){
              this.contain = false;
            }else{
              this.contain = true;
            }
            this.windowSize = { x: window.innerWidth, y: window.innerHeight }
          },
        },
      computed: {
        component() {
          return this.$store.getters['components/banner'];
        },
      },
    }
</script>

<style scoped>
  .longImage{
    padding-top: 25px;
    padding-bottom: 25px;
  }
   /*Extra small devices (portrait phones, less than 576px)*/
  @media (max-width: 576px) {

  }

   /*Small devices (landscape phones, less than 768px)*/
  @media (max-width: 768px) {

  }

   /*Medium devices (tablets, less than 992px)*/
  @media (max-width: 992px) {

  }

   /*Large devices (desktops, less than 1200px)*/
  @media (max-width: 1263px) {
    .longImage{
      max-height: 250px;
      padding-top: 0px;
    }
    .thirdImage{
      max-height: 250px;
    }
  }
</style>
