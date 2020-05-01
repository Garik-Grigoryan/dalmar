<template>
  <v-app-bar :clipped-left="clipped"  color="#b20839" app dark >
    <v-row justify="center" class="hidden-sm-and-down" no-gutters >
      <v-menu :open-on-hover="true" bottom offset-y v-for="(item, i) in items" dark :key="i">
        <template v-slot:activator="{ on }">
          <v-btn :to="item.to" router exact color="#fff" text class="my-2 nav_button" v-on="on" bottom >
            {{item.title}}
          </v-btn>
        </template>
        <v-list style="background-color: #b20839">
          <v-list-item v-for="(item, index) in items" :key="index" @click="" >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-app-bar>
</template>

<script>
    export default {
        name: "Topmenu",
      data () {
        return {
          items: [
            {title: 'Shoes', to: '/'},
            {title: 'Clothing', to: '/'},
            {title: 'Bags', to: '/'},
            {title: 'Eyewear', to: '/'},
            {title: 'Watches', to: '/'},
          ],
          clipped: true,
        }
      },

    }
</script>

<style scoped>

</style>
