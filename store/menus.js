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
    const menus = await this.$axios.$get('http://apidavmar.neoteric-software.com/api/menus/get').catch((response) => {
      console.log(response)
    })
    commit("setMenus", menus);
  },
  async saveMenu({commit}, [menuConstruct]){
    await this.$axios.post('http://apidavmar.neoteric-software.com/api/menus/add', {'menusConstruct': menuConstruct}).catch((response) => {
      console.log(response)
    })
  }
};
export const getters = {
  menus:  s => s.menus,
};
