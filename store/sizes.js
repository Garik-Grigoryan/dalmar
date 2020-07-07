export const state = () => ({
  sizes: [],
  size: []
});

export const mutations = {
  setSizes(state, sizes){
    state.sizes = sizes;
  },
  setSize(state, size){
    state.size = size;
  }
}

export const actions = {
  async fetch({commit}) {
    const sizes = await this.$axios.$get('http://apidavmar.neoteric-software.com/api/size/get');
    commit('setSizes', sizes);
  },
  async addBrand(ctx, [name, color]){
    await this.$axios.$post('http://apidavmar.neoteric-software.com/api/size/add', {'name': name, 'color': color});
  }
}

export const getters = {
  sizes: s => s.sizes,
  size:  s => s.size
}
