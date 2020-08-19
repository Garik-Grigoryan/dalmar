export const state = () => ({
  pages: [],
  page: [],
});

export const mutations = {
  setPages(state, pages){
    state.pages = pages;
  },
  setPage(state, page){
    state.page = page;
  }
}

export const actions = {
  async fetch({commit}) {
    const pages = await this.$axios.$get('http://apidavmar.neoteric-software.com/api/pages/get');
    commit('setPages', pages)
  },
  async getById({commit}, [id]) {
    const page = await this.$axios.$get('http://apidavmar.neoteric-software.com/api/pages/get/'+id);
    commit('setPage', page)
  },
  async update(ctx, [id, name, html, html_am, html_ru]){
    await this.$axios.$put('http://apidavmar.neoteric-software.com/api/pages/update/'+id, {name, html, html_am, html_ru});
  }
}

export const getters = {
  pages: s => s.pages,
  page: s => s.page,
}
