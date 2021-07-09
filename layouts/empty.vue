<template>
  <v-app dark>

    <v-main app>
      <nuxt />
    </v-main>

    <v-footer style="justify-content: center"
    >
      <span class="m-auto"> Davmar.am &copy; {{ new Date().getFullYear() }} All rights reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
    export default {
        name: "empty"
    }
</script>

<style scoped>

</style>
