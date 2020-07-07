<template>
  <draggable class="dragArea" tag="ul" :list="menus" :group="{ name: 'g1' }">
    <li v-for="el in menus" :key="el.id">
      <p>{{ el.name }}</p>
      <nested-draggable :menus="el.menus" />
    </li>
  </draggable>
</template>
<script>
  export default {
    props: {
      menus: {
        required: true,
        type: Array
      }
    },
    name: "nested-draggable"
  };
</script>
<style scoped>
  .dragArea {
    min-height: 50px;
    outline: 1px dashed;
  }
</style>
