export const state = () => ({
  products: [],
  product: []
});

export const mutations = {
  setProducts(state, products){
    state.products = products;
  },
  setProduct(state, product){
    state.product = product;
  }
}

export const actions = {
  async fetch({commit}) {
    const products = await this.$axios.$get('http://localhost:8000/api/product/get');
    commit('setProducts', products);
  },
  async getProduct({commit}, [id]){
    const product = await this.$axios.$get(`http://localhost:8000/api/product/get/${id}`);
    commit('setProduct', product)
  },
  async updateProduct({commit}, [id, name, category, price, selectedImages, selectedColors,  selectedSizes, selectedBrand, sex, isNew, discountType, discount, description]){
    await this.$axios.$put(`http://localhost:8000/api/product/update/${id}`, {'name': name, 'category': category, 'price': price, 'selectedImages': selectedImages, 'selectedColors': selectedColors, 'sizes': selectedSizes, 'selectedBrand': selectedBrand, 'sex': sex, 'isNew': isNew, 'discountType': discountType, 'discount': discount, 'description': description});
  },
  async delete({commit}, [id]){
    await this.$axios.$delete(`http://localhost:8000/api/product/delete/${id}`);
  },
  async addProduct(ctx, [name, category, price, selectedImages, selectedColors,  selectedSizes, selectedBrand, sex, isNew, discountType, discount, description])  {
    await this.$axios.$post('http://localhost:8000/api/product/add', {'name': name, 'category': category, 'price': price, 'selectedImages': selectedImages, 'selectedColors': selectedColors, 'sizes': selectedSizes, 'selectedBrand': selectedBrand, 'sex': sex, 'isNew': isNew, 'discountType': discountType, 'discount': discount, 'description': description});
  }
}

export const getters = {
  products: s => s.products,
  product:  s => s.product
}
