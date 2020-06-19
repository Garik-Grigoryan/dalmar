export const state = () => ({
  categories: [],
  category: []
});

export const mutations = {
  setCategories(state, categories){
    state.categories = categories;
  },
  setCategory(state, category){
    state.category = category;
  }
}

export const actions = {
  async fetch({commit}) {
    const categories = await this.$axios.$get('http://localhost:8000/api/category/get');
    commit('setCategories', categories);
  },
  async getCategory({commit}, [id]){
    const category = await this.$axios.$get(`http://localhost:8000/api/category/get/${id}`);
    commit('setCategory', category)
  },
  async updateCategory({commit}, [id, name, order, image, color, selectedBrand, parentCategory]){
    await this.$axios.$put(`http://localhost:8000/api/category/update/${id}`, {'name': name, 'order': order, 'image': image, 'color': color, 'selectedBrand': selectedBrand, 'parentCategory': parentCategory});
  },
  async delete({commit}, [id]){
    const category = await this.$axios.$delete(`http://localhost:8000/api/category/delete/${id}`);
  },
  async addCategory(ctx, [name, order, image, color, selectedBrand, parentCategory]) {
    await this.$axios.$post('http://localhost:8000/api/category/add', {'name': name, 'order': order, 'image': image, 'color': color, 'selectedBrand': selectedBrand, 'parentCategory': parentCategory});
  }
}

export const getters = {
  categories: s => s.categories,
  category:  s => s.category
}
