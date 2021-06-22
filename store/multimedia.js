export const state = () => ({
  images: []
});

export const mutations = {
  setImages(state, images){
    state.images = images;
  }
}

export const actions = {
  async fetch({commit}) {
    const images = await this.$axios.$get(this.$axios.defaults.baseURL+'/multimedia/get');
    commit('setImages', images);
  }
}

export const getters = {
  images: s => s.images
}
