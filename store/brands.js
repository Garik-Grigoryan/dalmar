export const state = () => ({
  brands: []
});

export const mutations = {
  setBrands(state, brands){
    state.brands = brands;
  }
}

export const actions = {
  async fetch({commit}) {
    const brands = await this.$axios.$get('http://localhost:8000/api/brand/get');
    commit('setBrands', brands);
  }
}

export const getters = {
    brands: s => s.brands
}
