<template>
  <div>
    <v-navigation-drawer class="topmenu-nav" v-resize="onResize" v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" :left="left" fixed app style="z-index: 100">
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" router exact >
          <v-list-item-content style="padding: 0">
            <v-menu  :open-on-hover="true" bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-btn  router exact color="#000" text class="my-2 nav_button" v-on="on" button>
                  <v-list-item-title v-if="$i18n.locale === 'am'">{{ item.title_am }}</v-list-item-title>
                  <v-list-item-title v-if="$i18n.locale === 'en'">{{ item.title_en }}</v-list-item-title>
                  <v-list-item-title v-if="$i18n.locale === 'ru'">{{ item.title_ru }}</v-list-item-title>
                </v-btn>
              </template>
              <v-list style="background: white;">
                <v-list-item-group v-for="(item2, index) in items2" :key="index" >
                  <v-list-item v-if="item.id === item2.parent" :to="localePath(item2.to)">
                    <v-list-item-title v-if="$i18n.locale === 'am'" style="color: rgba(0, 0, 0, 0.87)">{{ item2.title_am }}</v-list-item-title>
                    <v-list-item-title v-if="$i18n.locale === 'en'" style="color: rgba(0, 0, 0, 0.87)">{{ item2.title_en }}</v-list-item-title>
                    <v-list-item-title v-if="$i18n.locale === 'ru'" style="color: rgba(0, 0, 0, 0.87)">{{ item2.title_ru }}</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped"  color="#b20839" app dark >
      <v-row justify="center" class="hidden-sm-and-down" no-gutters >
        <v-menu :open-on-hover="true" bottom offset-y v-for="(item, i) in items" dark :key="i">
          <template v-slot:activator="{ on }">
            <v-btn  :to="localePath(item.to)" router exact color="#fff" text class="my-2 nav_button" v-on="on" button>
              <v-list-item-title v-if="$i18n.locale === 'am'">{{ item.title_am }}</v-list-item-title>
              <v-list-item-title v-if="$i18n.locale === 'en'">{{ item.title_en }}</v-list-item-title>
              <v-list-item-title v-if="$i18n.locale === 'ru'">{{ item.title_ru }}</v-list-item-title>
            </v-btn>
          </template>
          <v-list style="background-color: #b20839">
            <v-list-item-group v-for="(item2, index) in items2" :key="index" @click="" >
              <v-list-item v-if="item.id === item2.parent" :to="localePath(item2.to)">
                <v-list-item-title v-if="$i18n.locale === 'am'">{{ item2.title_am }}</v-list-item-title>
                <v-list-item-title v-if="$i18n.locale === 'en'">{{ item2.title_en }}</v-list-item-title>
                <v-list-item-title v-if="$i18n.locale === 'ru'">{{ item2.title_ru }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-row>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
    </v-app-bar>
  </div>
</template>

<script>
    export default {
      name: "Topmenu",
      data () {
        return {
          clipped: true,
          left: true,
          miniVariant: false,
          drawer: false,
          items: [],
          items2: [],
        }
      },
      computed: {
        brands() {
          return this.$store.getters['brands/brands'];
        },
        categories() {
          return this.$store.getters['categories/categories'];
        },
      },
      async mounted() {
        this.onResize();
        this.brands.forEach(elem => {
          if(elem.categories !== undefined) {
            elem.categories.forEach(elem2 => {
              if(elem2.brand == this.$route.params.id) {
                this.items.push(
                  {
                    id: elem2.id,
                    brand: elem2.brand,
                    title_am: elem2.name_am,
                    title_ru: elem2.name_ru,
                    title_en: elem2.name_en,
                    to: '/category/'+elem2.id+'?page=1'
                  }
                )
                if(elem2.subcategories !== undefined) {
                  elem2.subcategories.forEach(elem3 => {
                    this.items2.push(
                      {
                        parent: elem3.parent,
                        title_am: elem3.name_am,
                        title_ru: elem3.name_ru,
                        title_en: elem3.name_en,
                        to: '/category/'+elem3.id+'?page=1'
                      }
                    )
                  })
                }
              }
            })
          }
        })
      },

      methods: {
        onResize () {
          if(window.innerWidth >= 960){
            this.drawer = false;
          }
          this.windowSize = { x: window.innerWidth, y: window.innerHeight }
        },
      },

    }
</script>

<style scoped>

</style>
