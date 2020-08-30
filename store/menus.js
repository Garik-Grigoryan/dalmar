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
    // apidavmar.neoteric-software.com
    const menus = await this.$axios.$get('https://apidavmar.neoteric-software.com/api/menus/get');
    commit("setMenus", menus);
  },
  async saveMenu({commit}, [menuConstruct]){
    await this.$axios.post('https://apidavmar.neoteric-software.com/api/menus/add', {'menusConstruct': menuConstruct})
  }
};
export const getters = {
  menus:  s => s.menus,
};
