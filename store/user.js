export const state = () => ({

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
  async checkPassword({commit}, [id, password]) {
    const sizes = await this.$axios.$post('http://apidavmar.neoteric-software.com/api/user/checkPassword', {id: id, password: password});
  },

  async update(ctx, [id, name, email, password, phone, address]){
    await this.$axios.$post('http://apidavmar.neoteric-software.com/api/user/update', {id, name, email, password, phone, address});
  }
}

export const getters = {
  sizes: s => s.sizes,
  size:  s => s.size
}
