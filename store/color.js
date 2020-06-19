export const state = () => ({
  colors: [],
  color: []
});

export const mutations = {
  setColors(state, colors){
    state.colors = colors;
  },
  setColor(state, color){
    state.color = color;
  }
}

export const actions = {
  async fetch({commit}) {
    const color = await this.$axios.$get('http://localhost:8000/api/color/get');
    commit('setColors', color);
  },
  async addBrand(ctx, [name, color]){
    await this.$axios.$post('http://localhost:8000/api/color/add', {'name': name, 'color': color});
  }
}

export const getters = {
  colors: s => s.colors,
  brand:  s => s.brand
}
