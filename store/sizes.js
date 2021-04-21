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
    const sizes = await this.$axios.$get('https://apidavmar.neoteric-software.com/api/size/get');
    commit('setSizes', sizes);
  },
  async getSize({commit}, [id]){
    const size = await this.$axios.$get(`https://apidavmar.neoteric-software.com/api/size/get/${id}`);
    commit('setSize', size)
  },

  async updateSize({commit}, [id, name]){
    const size = await this.$axios.$put(`https://apidavmar.neoteric-software.com/api/size/update/${id}`, {'name': name});
  },
  async delete({commit}, [id]){
    const size = await this.$axios.$delete(`https://apidavmar.neoteric-software.com/api/size/delete/${id}`);
  },
  async addSize(ctx, [name]){
    await this.$axios.$post('https://apidavmar.neoteric-software.com/api/size/add', {'name': name});
  }
}

export const getters = {
  sizes: s => s.sizes,
  size:  s => s.size
}
