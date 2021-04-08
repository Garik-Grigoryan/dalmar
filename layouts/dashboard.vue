<template>
  <v-app dark>
    <dashboardMenu></dashboardMenu>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer style="justify-content: center"
    >
      <span class="m-auto"> Davmar.am &copy; {{ new Date().getFullYear() }} All rights reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
  import dashboardMenu from "../components/dashboardMenu";

    export default {
      components: {
        dashboardMenu,
      },
        name: "dashboard"
    }
</script>

<style scoped>

</style>
