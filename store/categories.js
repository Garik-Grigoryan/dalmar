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
};

export const actions = {
  async fetch({commit}) {
    const categories = await this.$axios.$get('http://apidavmar.neoteric-software.com/api/category/get').catch((response) => {
      console.log(response)
    });
    commit('setCategories', categories);
  },
  async getCategory({commit}, [id]){
    const category = await this.$axios.$get(`http://apidavmar.neoteric-software.com/api/category/get/${id}`).catch((response) => {
      console.log(response)
    });
    commit('setCategory', category)
  },
  async updateCategory({commit}, [id, name_en, name_ru, name_am, order, image, color, selectedBrand, parentCategory]){
    await this.$axios.$put(`http://apidavmar.neoteric-software.com/api/category/update/${id}`, {'name_en': name_en, 'name_ru': name_ru, 'name_am':name_am, 'order': order, 'image': image, 'color': color, 'selectedBrand': selectedBrand, 'parentCategory': parentCategory}).catch((response) => {
      console.log(response)
    });
  },
  async delete({commit}, [id]){
    const category = await this.$axios.$delete(`http://apidavmar.neoteric-software.com/api/category/delete/${id}`).catch((response) => {
      console.log(response)
    });
  },
  async addCategory(ctx, [name_en, name_ru, name_am, order, image, color, selectedBrand, parentCategory]) {
    await this.$axios.$post('http://apidavmar.neoteric-software.com/api/category/add', {'name_en': name_en, 'name_ru': name_ru, 'name_am':name_am, 'order': order, 'image': image, 'color': color, 'selectedBrand': selectedBrand, 'parentCategory': parentCategory}).catch((response) => {
      console.log(response)
    });
  }
};

export const getters = {
  categories: s => s.categories,
  category:  s => s.category
};
