<template>
  <v-app dark>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
