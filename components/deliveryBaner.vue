<template>
  <v-container>
    <v-row>
      <v-col sm="6" xs="12" md="3" v-for="(item, i) in items" :key="i">
        <v-list :three-line="true">
          <v-list-item>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      item: 1,
      items: [
        { title: 'Real-Time', icon: 'mdi-clock', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quae?' },
        { title: 'Audience', icon: 'mdi-account', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quae?' },
        { title: 'Conversions', icon: 'mdi-flag', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quae?' },
        { title: 'Conversions', icon: 'mdi-flag', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quae?' },
      ],
    }),
  }
</script>
<style scoped>
  .listGroup{
    flex-wrap: wrap;
    justify-content: center;
  }
.listItem{
  max-width: 25%;
  min-width: 250px;
}
</style>
