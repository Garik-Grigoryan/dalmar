<template>
  <div>
    <v-btn class="icon_filter" v-if="!drawer" icon @click.stop="drawer = !drawer" @click = "icon_filter" style="">
      <v-icon>mdi-filter-plus</v-icon>
    </v-btn>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      fixed
      app
      clipped
      class="product_filter"
    >
      <v-list-item class="px-2 mt-3">
        <v-img :src="brand[0].image" width="80%"  :contain="true"></v-img>
        <v-btn
          icon
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <v-list class="mt-5">
        <v-list-item class="mt-5">
          <v-range-slider v-model="range" :max="max" :min="min" hide-details class="align-center" thumb-label="always" color="#ea5a21" track-color="#f39513" @change="filter($event)" >
          </v-range-slider>
        </v-list-item>
        <v-list-item v-for="item in items" :key="item.title" >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <div v-if="item.type === 'color'">
              <v-item-group :multiple="true" >
                <v-row class="colors">
                  <v-item  v-for="(color, n) in item.data"  :key="n" v-slot:default="{ active, toggle }">
                    <v-card  :color="color.toLowerCase()" class="d-flex text-center align-center mx-3 my-2" dark height="30" :data-value="color.toLowerCase()" width="30" @click="toggle(), filter($event)" >
                      <v-scroll-y-transition>
                        <v-icon v-if="active" :data-value="color.toLowerCase()" color="white" size="27" v-text="'mdi-close-circle-outline'" class="mx-auto" ></v-icon>
                      </v-scroll-y-transition>
                    </v-card>
                  </v-item>
                </v-row>
              </v-item-group>
            </div>
            <v-combobox v-else @change="filter($event)" v-model="item.select" :items="item.data" label="" dense chips small-chips multiple >

            </v-combobox>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
  export default {
    // brand[0]
    head() {
      return {
        title: this.brand[0].name,
        meta: [
          { hid: 'Davmar - ' + this.brand[0].name, name: 'Davmar ' + this.brand[0].name, content: 'Davmar ' + this.brand[0].name }
        ],
      };
    },
    data () {
      return {
        min: 15000,
        max: 30000,
        range: [15000, 30000],
        drawer: true,
        items: [
          { title: this.$t('sex'), icon: 'mdi-home-city', data: ['Men', 'Women',], select: [], type: 'sex' },
          { title: this.$t('size'), icon: 'mdi-account', data: [], select: [], type: 'size'},
          { title: this.$t('colors'), icon: 'mdi-account-group-outline', data: [], select: [], type: 'color'},
        ],
        select: [],
        mini: false,
      }
    },
    mounted() {
      for(let elem in this.filters.colors){
        if(elem != ''){
          this.items[2].data.push(elem)
        }
      }
      for(let elem in this.filters.sizes){
        if(elem != ''){
          this.items[1].data.push(elem)
        }
      }
      this.min = this.filters.minPrice == null ? 0 : this.filters.minPrice;
      this.max = this.filters.maxPrice == null ? 0 : this.filters.maxPrice;
      this.range = [this.min, this.max];

      if(window.matchMedia('(max-width: 767px)').matches){
        this.drawer = false;
      }
    },
    methods: {
      filter(e) {
        if(e.target !== undefined){
          if(e.target.tagName === 'DIV' || e.target.tagName === 'I'){
            if(e.target.tagName === 'I'){
              this.$delete(this.items[2].select, this.items[2].select.indexOf(e.target.getAttribute('data-value')));
            }else{
              this.items[2].select.push(e.target.getAttribute('data-value'));
            }
          }
        }
        this.$cookies.set('davmar_filter', [this.items, this.range, this.$route.params.id], {
          path: '/',
          maxAge: 10 * 365 * 24 * 60 * 60
        });
        this.$store.dispatch('products/Filter', [this.items, this.range, this.$route.params.id]).then(r => {
          // this.$router.push('/dashboard/categories')
        })
      },
      icon_filter() {
        if(document.getElementsByClassName("product_filter")[0].className.indexOf('v-navigation-drawer--close') === -1) {
          document.getElementsByClassName("icon_filter")[0].style.left = "auto";
        } else {
          document.getElementsByClassName("icon_filter")[0].style.left = "260px";
        }
      }
    },
    computed: {
      brand() {
        return this.$store.getters['brands/brand'];
      },
      filters() {
        return this.$store.getters['brands/brandFilters'];
      }
    }
  }
</script>

<style scoped>
  .v-list-item__content{
    display: initial;
  }
  /*@media (max-width: 1266px) {*/
    .icon_filter {
      display: block !important;
      position: fixed;
      top: 50%;
      left: 15px;
      z-index: 10;
      width: 56px;
      height: 56px;
      color: #ffffff !important;
      border: 1px solid rgb(1, 35, 94);
      background-color: rgb(1, 35, 94);
    }
  /*}*/
</style>
