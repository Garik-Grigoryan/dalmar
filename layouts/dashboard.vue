<template>
  <v-app dark>
    <dashboardMenu></dashboardMenu>
    <v-content>
      <nuxt />
    </v-content>

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
