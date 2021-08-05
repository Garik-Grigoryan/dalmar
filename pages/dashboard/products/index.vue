<template>
  <v-container>
    <v-toolbar-title style="display: flex; justify-content: space-between;">
      Products
      <v-btn small dark to="products/new" color="purple" >Add new product</v-btn>
    </v-toolbar-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Image</th>
            <th class="text-left">Name (eng)</th>
            <th class="text-left">Name (rus )</th>
            <th class="text-left">Name (am)</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in records" :key="item.name">
            <td><v-img :src="JSON.parse(item.images)[0]" max-width="100"></v-img></td>
            <td>{{ item.name_en }}</td>
            <td>{{ item.name_ru }}</td>
            <td>{{ item.name_am }}</td>
            <td><v-btn small :to="`products/edit/${item.id}`" :elevation="0" dark fab color="primary" ><v-icon>mdi-pencil</v-icon></v-btn> <v-btn small :elevation="0" @click="deleteProducts($event, item.id )" dark fab color="error" ><v-icon>mdi-delete</v-icon></v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div v-if="recordsLength > 1" class="text-center" style="width: 100%; margin: 10px 0;">
      <v-pagination
        v-model="page"
        :length="recordsLength"
        :total-visible="7"
        @input="getPage"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
  export default {
    async fetch({route, store}) {
      await store.dispatch('products/fetch');
    },
    layout: 'dashboard',
    middleware: 'admin',
    name: "index",
    data () {
      return {
        page: 1,
        perPage: 20,
        records: [],
        recordsLength: 0
      }
    },
    computed: {
      products() {
        return this.$store.getters['products/products'];
      }
    },
    methods: {
      next() {
        this.$router.push({ query: { page: this.page } });
      },
      deleteProducts(event, id) {
        this.$store.dispatch('products/delete', [id]).then( r => {
          // this.$store.dispatch('products/fetch', [route.query.page])
          this.$store.dispatch('products/fetch')
        })
      },
      addBrand() {

      },
      getPage(page) {
        this.records = [];
        const startIndex = this.perPage * (page - 1) + 1;
        const endIndex = startIndex + this.perPage - 1;
        for (let i = startIndex; i <= endIndex; i++) {
          if(this.products[i] !== undefined) {
            this.records.push(this.products[i]);
          }
        }
      },
      getRecordsLength() {
        this.recordsLength = Math.ceil(this.products.length/this.perPage);
      }
    },
    created() {
      this.getRecordsLength();
      this.getPage(this.page);
    }
  }
</script>

<style scoped>

</style>
