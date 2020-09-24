<template>
    <v-container>
      <p>
        Welcome to Davmar dashboard
      </p>
    </v-container>
</template>

<script>
    export default {
      layout: 'dashboard',
        middleware: 'admin',
        name: "index"
    }
</script>

<style scoped>
  p{
    font-size: 30px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
