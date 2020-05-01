<template>
    <div  v-resize="onResize">
      <v-container>
        <v-row justify="center">
          <v-col lg="12" md="12">
            <v-row>
              <v-col lg="8" md="12">
                <v-row>
                  <v-col cols="6">
                    <v-img
                      src="/men.jpg"
                      max-height="280"
                      height="100%"
                    >
                    </v-img>
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="/women.jpg"
                      position="top"
                      max-height="280"
                    >
                    </v-img>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-img
                      src="/shouse_red.jpg"
                      :contain="contain"
                      class="thirdImage"
                    >
                    </v-img>
                  </v-col>
                </v-row>
              </v-col>
              <v-col lg="4" md="12" class="longImage">
                    <v-img
                      src="/accessories.jpg"
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
        }
      },
        mounted () {
          this.onResize()
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
