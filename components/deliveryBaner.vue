<template>
  <v-container>
    <v-row>
      <v-col sm="6" xs="12" md="3" v-for="(item, i) in items" :key="i">
        <v-list :three-line="true">
          <v-list-item>
            <v-list-item-icon>
              <v-icon v-text="item.icon" size="40"></v-icon>
            </v-list-item-icon>
            <v-list-item-content style="display: block;">
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
    data: function (){
      return ({
        item: 1,
        items: [
          { title: this.$t('freeDeliveryTitle'), icon: 'mdi-car', text: this.$t('freeDeliveryText') },
          { title: this.$t('support'), icon: 'mdi-help', text: this.$t('supportText') },
          { title: this.$t('returnTitle'), icon: 'mdi-backup-restore', text: this.$t('returnText') },
          { title: this.$t('secureTitle'), icon: 'mdi-lock-reset', text: this.$t('secureText') },
        ],
      })
    }
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
