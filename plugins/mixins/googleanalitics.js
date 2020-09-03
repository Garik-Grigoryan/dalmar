import Vue from 'vue';
Vue.mixin({
  mounted() {
    if (this.$metaInfo) {
      this.$ga.page({
        page: this.$router.currentRoute.path,
        title: this.$metaInfo.title,
        location: window.location.href,
      });
    }
  },
});
