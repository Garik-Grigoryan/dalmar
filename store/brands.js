export const state = () => ({
  brandFilters: [],
  brands: [],
  brand: []
});

export const mutations = {
  setBrands(state, brands){
    state.brands = brands;
  },
  setBrand(state, brand){
    state.brand = brand;
  },
  setBrandFilters(state, brandFilters){
    state.brandFilters = brandFilters;
  }
}

export const actions = {
  async fetch({commit}) {
      const brands = await this.$axios.$get(this.$axios.defaults.baseURL+'/brand/get');
    commit('setBrands', brands);
  },
  async getBrand({commit}, [id]){
    const brand = await this.$axios.$get(this.$axios.defaults.baseURL+`/brand/get/${id}`);
    commit('setBrand', brand)
  },
  async getBrandFilters({commit}, [id]){
    const brandFilters = await this.$axios.$get(this.$axios.defaults.baseURL+`/product/getFilters/${id}`);
    commit('setBrandFilters', brandFilters)
  },

  async updateBrand({commit}, [id, name, order, image, color]){
    // this.$axios.defaults.baseURL
    const brand = await this.$axios.$put(this.$axios.defaults.baseURL+`/brand/update/${id}`, {'name': name, 'order': order, 'image': image, 'color': color});
  },
  async delete({commit}, [id]){
    const brand = await this.$axios.$delete(this.$axios.defaults.baseURL+`/brand/delete/${id}`);
  },
  async addBrand(ctx, [name, nameRu, order, image, color]){
   await this.$axios.$post(this.$axios.defaults.baseURL+'/brand/add', {'name': name, 'nameRu': nameRu, 'order': order, 'image': image, 'color': color});
  }
}

export const getters = {
    brands: s => s.brands,
    brand:  s => s.brand,
    brandFilters:  s => s.brandFilters,
}
