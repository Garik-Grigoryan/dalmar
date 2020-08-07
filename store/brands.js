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
    const brands = await this.$axios.$get('http://apidavmar.neoteric-software.com/api/brand/get');
    commit('setBrands', brands);
  },
  async getBrand({commit}, [id]){
    const brand = await this.$axios.$get(`http://apidavmar.neoteric-software.com/api/brand/get/${id}`);
    commit('setBrand', brand)
  },
  async getBrandFilters({commit}, [id]){
    const brandFilters = await this.$axios.$get(`http://apidavmar.neoteric-software.com/api/product/getFilters/${id}`);
    commit('setBrandFilters', brandFilters)
  },

  async updateBrand({commit}, [id, name, order, image, color]){
    const brand = await this.$axios.$put(`http://apidavmar.neoteric-software.com/api/brand/update/${id}`, {'name': name, 'order': order, 'image': image, 'color': color});
  },
  async delete({commit}, [id]){
    const brand = await this.$axios.$delete(`http://apidavmar.neoteric-software.com/api/brand/delete/${id}`);
  },
  async addBrand(ctx, [name, nameRu, order, image, color]){
   await this.$axios.$post('http://apidavmar.neoteric-software.com/api/brand/add', {'name': name, 'nameRu': nameRu, 'order': order, 'image': image, 'color': color});
  }
}

export const getters = {
    brands: s => s.brands,
    brand:  s => s.brand,
    brandFilters:  s => s.brandFilters,
}
