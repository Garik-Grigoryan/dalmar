
<template>
  <v-container>
    <p>
      Menu
    </p>
    <v-row>
      <div class="col-3">
        <h3>All Menus</h3>
        <nested-draggable :menus="categories"/>
      </div>
      <div class="col-8">
        <h3>Menu Constructor</h3>
        <nested-draggable :menus="menusConstruct" />
      </div>
    </v-row>
    <v-btn  @click="saveMenu" color="success" class="mr-4" >Save</v-btn>
  </v-container>
</template>

<script>
  import nestedDraggable  from "../../../components/nested.vue";
  export default {
    layout: 'dashboard',
    name: "menuDashboard",
    order: 16,
    async fetch({store}) {
      await store.dispatch('menus/fetch')
    },
    components: {
      nestedDraggable
    },
    data() {
      return {
        categories: [

        ],
        menusConstruct: [

        ]
      };
    },
    computed: {
      menus() {
        return this.$store.getters['menus/menus'];
      },
    },
    methods: {
      saveMenu() {
        this.$store.dispatch('menus/saveMenu', [this.menusConstruct]).then(r => {
          this.$router.push('/dashboard')
        })
      }
    },
    mounted() {
      for(let menu of this.menus.menus){
        this.menusConstruct = JSON.parse(this.menus.menus[0].construction);
      }
      for(let categories of this.menus.categories){
        this.categories.push({ name: categories.name_en, id: categories.id, menus: [] }) 
      }
    }
  }
</script>

<style scoped>

</style>

