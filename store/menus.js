export const state = () => ({
  menus: []
});
export const mutations = {
  setMenus(state, menus) {
    state.menus = menus;
  }
};
export const actions = {
  async fetch({commit}) {
    const menus = await this.$axios.$get(this.$axios.defaults.baseURL+'/menus/get');
    commit("setMenus", menus);
  },
  async saveMenu({commit}, [menuConstruct]){
    await this.$axios.post(this.$axios.defaults.baseURL+'/menus/add', {'menusConstruct': menuConstruct})
  }
};
export const getters = {
  menus:  s => s.menus,
};
