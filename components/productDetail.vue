<template>
  <div>
    <v-row>
      <v-col md="6" sm="12">
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          show-arrows-on-hover
          height="100%"
          style="max-height: 600px;"
        >
          <v-carousel-item
            v-for="(slide, i) in JSON.parse(product.images)"
            :key="i"
            :src="slide"
            top
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col md="6" sm="12">
        <h2 v-if="$i18n.locale === 'am'" class="text-center">{{product.name_am}}</h2>
        <h2 v-if="$i18n.locale === 'en'" class="text-center">{{product.name_en}}</h2>
        <h2 v-if="$i18n.locale === 'ru'" class="text-center">{{product.name_ru}}</h2>

        <v-col md="12" lg="12">
          <p v-if="$i18n.locale === 'am'">
            {{product.description_am}}
          </p>
          <p v-if="$i18n.locale === 'en'">
            {{product.description_en}}
          </p>
          <p v-if="$i18n.locale === 'ru'">
            {{product.description_ru}}
          </p>
          <div class="mt-5">
            <p class="ma-0">Colors</p>
            <v-item-group
              :multiple="false"
            >
              <v-row>
                <v-item  v-for="(color, n) in productColors" :key="n" v-slot:default="{ active, toggle }">
                  <v-card
                    :color="color.toLowerCase()"
                    class="d-flex text-center align-center mx-3"
                    dark
                    height="30"
                    width="30"
                    :data-value="color.toLowerCase()"
                    @click="toggle(), selectColor($event)"
                  >
                    <v-scroll-y-transition>
                      <v-icon
                        v-if="active"
                        color="white"
                        size="20"
                        v-text="'mdi-check-circle-outline'"
                        class="mx-auto"
                        :data-value="color.toLowerCase()"
                      ></v-icon>
                    </v-scroll-y-transition>
                  </v-card>
                </v-item>
              </v-row>
            </v-item-group>
          </div>
          <div class="mt-5">
            <p class="ma-0">Sizes</p>
            <v-item-group
              :multiple="false"
            >
              <v-row>
                <v-item  v-for="(size, n) in productSizes" :key="n" v-slot:default="{ active, toggle }">
                  <v-card
                    class="d-flex text-center align-center mx-3 justify-center"
                    :color="active? 'green' : '#fff'"
                    height="30"
                    width="30"
                    :data-value="size"
                    @click="toggle(), selectSize($event)"
                  >
                    {{size}}
                  </v-card>
                </v-item>
              </v-row>
            </v-item-group>
          </div>

          <div class="mt-5 pl-0">
            <p class="ma-0">Count</p>
            <v-col cols="2" class="pl-0">
              <v-text-field
                type="number"
                placeholder="0"
                v-model="count"
              ></v-text-field>
            </v-col>
          </div>
          <div class="pl-0">
            <p class="ma-0">
              <span>
                Price: {{product.price}} AMD
              </span>
            </p>
          </div>
          <div class="mt-5 pl-0">
            <div class="text-left">
              <v-btn
                color="#01235e"
                class="white--text"
                rounded
                @click="addToCart($event, product.id)"
              >
                <v-icon left>mdi-cart</v-icon> Cart
              </v-btn>
              <v-btn
                color="#01235e"
                class="white--text"
                rounded
                @click="addToWishlist($event, product.id)"
              >
                <v-icon left>mdi-heart</v-icon> Wish list
              </v-btn>
            </div>
          </div>
        </v-col>

      </v-col>
    </v-row>
  </div>
</template>
<script>

  export default {
    head() {
      return {
        title: product.name_am,
        meta: [
          { hid: 'Davmar - ' + product.name_am, name: 'Davmar ' + product.name_am, content: 'Davmar ' + product.description_am }
        ],
      };
    },
    data () {
      return {
        productColors: [],
        productSizes: [],
        selectedColor: [],
        selectedSize: [],
        cycle: false,
        count: 1,
      }
    },
    mounted() {
      this.product.product_color.forEach(elem => {
        this.productColors.push(elem.color)
      });
      this.product.product_size.forEach(elem => {
        this.productSizes.push(elem.name)
      });
    },
    methods: {
      addToWishlist(e, id) {
        let user_id = 0;
        if(this.user){
          user_id = this.user.id
        }
        this.$store.dispatch('wishListAndCart/setWishList', [id, user_id, this.selectedColor, this.selectedSize, this.count])
      },
      addToCart(e, id) {
        let user_id = 0;
        if(this.user){
          user_id = this.user.id
        }
        this.$store.dispatch('wishListAndCart/setCArt', [id, user_id, this.selectedColor, this.selectedSize, this.count])
      },
      selectColor(e) {
        if(e.target !== undefined){
          if(e.target.tagName === 'DIV' || e.target.tagName === 'I'){
            if(e.target.tagName === 'I'){
              this.$delete(this.selectedColor, this.selectedColor.indexOf(e.target.getAttribute('data-value')));
            }else{
              this.selectedColor.push(e.target.getAttribute('data-value'));
            }
          }
        }
      },
      selectSize(e) {
        if(e.target !== undefined){
          if(e.target.getAttribute('data-active') === 'active'){
            this.$delete(this.selectedSize, this.selectedSize.indexOf(e.target.getAttribute('data-value')));
          }else{
            this.selectedSize.push(e.target.getAttribute('data-value'));
          }
        }
      }
    },
    computed: {
      product() {
        return this.$store.getters['products/product'];
      }
    },
  }
</script>
