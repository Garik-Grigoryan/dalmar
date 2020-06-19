export const state = () => ({
  brands: [],
  brand: []
});

export const mutations = {
  setBrands(state, brands){
    state.brands = brands;
  },
  setBrand(state, brand){
    state.brand = brand;
  }
}

export const actions = {
  async fetch({commit}) {
    const brands = await this.$axios.$get('http://localhost:8000/api/brand/get');
    commit('setBrands', brands);
  },
  async getBrand({commit}, [id]){
    const brand = await this.$axios.$get(`http://localhost:8000/api/brand/get/${id}`);
    commit('setBrand', brand)
  },
  async updateBrand({commit}, [id, name, order, image]){
    const brand = await this.$axios.$put(`http://localhost:8000/api/brand/update/${id}`, {'name': name, 'order': order, 'image': image});
  },
  async delete({commit}, [id]){
    const brand = await this.$axios.$delete(`http://localhost:8000/api/brand/delete/${id}`);
  },
  async addBrand(ctx, [name, order, image]){
   await this.$axios.$post('http://localhost:8000/api/brand/add', {'name': name, 'order': order, 'image': image});
  }
}

export const getters = {
    brands: s => s.brands,
    brand:  s => s.brand
}
