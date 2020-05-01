<template>
  <v-app dark>
    <v-navigation-drawer
      v-resize="onResize"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :right="right"
      fixed
      app
    >
      <v-list>

        <v-list-item

          v-for="(item, i) in rightSide"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content >
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item

          v-for="(item, i) in leftSide"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <SystemBar></SystemBar>
    <TopMenu></TopMenu>
    <v-content>
        <nuxt />
    </v-content>
    <MainDividers></MainDividers>
    <v-footer
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import MainDividers from "../components/MainDividers";
  import SystemBar from '../components/systemBar'
  import  TopMenu from  '../components/Topmenu'
export default {
  components: {
    MainDividers,
    SystemBar,
    TopMenu
  },
  data () {
    return {
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: false,
      clipped: true,
      drawer: false,
      fixed: false,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      leftSide: [
        { title: 'Brands',
          to: '/'
        },
        { title: 'Sales',
          to: '/'
        },
        { title: 'News',
          to: '/'
        }
      ],
      rightSide: [
        {
          title: 'For Men',
          to: '/'
        },
        {
          title: 'For Women',
          to: '/'
        },
        {
          title: 'Contact Us',
          to: '/'
        }
      ],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Dalmar',
      windowSize: {
        x: 0,
        y: 0,
      },
    }
  },
  mounted () {
    this.onResize()
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
<style>
  .theme--dark.v-list-item--active:hover::before, .theme--dark.v-list-item--active::before{
    opacity: 0;
  }
  a{
    text-decoration: none;
  }
  body{
    overflow-x: hidden;
  }
  .nav_button{
    /*background-color: #ccc;*/
    color: #b20839;
  }
  .theme--dark.v-btn--active:hover::before, .theme--dark.v-btn--active::before {
     opacity: 0;
  }
  .v-badge__wrapper{
    left: -25px;
    top: 25px;
  }
</style>
