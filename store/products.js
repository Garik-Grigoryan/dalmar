export const state = () => ({
  products: [],
  newProducts: [],
  bestProducts: [],
  salesProducts: [],
  product: [],
  productByBrand: [],
  productByIds: [],
  productByCategory: [],
  categoryFilter: [],
  AllSalesProducts: [],
});

export const mutations = {
  setProducts(state, products){
    state.products = products;
  },
  setProduct(state, product){
    state.product = product;
  },
  setNewProducts(state, newProducts){
    state.newProducts = newProducts;
  },
  setBestProducts(state, bestProducts){
    state.bestProducts = bestProducts;
  },
  setSalesProducts(state, salesProducts){
    state.salesProducts = salesProducts;
  },
  setProductByBrand(state, productByBrand){
    state.productByBrand = productByBrand;
  },
  setProductByCategory(state, productByCategory){
    state.productByCategory = productByCategory;
  },
  setProductByIds(state, productByIds){
    state.productByIds = productByIds;
  },
  setCategoryFilters(state, categoryFilter){
    state.categoryFilter = categoryFilter;
  },
  setAllSalesProducts(state, AllSalesProducts){
    state.AllSalesProducts = AllSalesProducts;
  }
}

export const actions = {
  async fetch({commit}) {
    const products = await this.$axios.$get('http://127.0.0.1:8000/api/product/get');
    commit('setProducts', products);
  },
  async getProduct({commit}, [id]){
    const product = await this.$axios.$get(`http://127.0.0.1:8000/api/product/get/${id}`);
    commit('setProduct', product)
  },
  async getProductByBrandId({commit}, [id, page]){
    const products = await this.$axios.$get(`http://127.0.0.1:8000/api/product/getByBrandId/${id}?page=${page}`);
    commit('setProductByBrand', products)
  },
  async getProductByCategoryId({commit}, [id, page]){
    const products = await this.$axios.$get(`http://127.0.0.1:8000/api/product/getByCategoryId/${id}?page=${page}`);
    commit('setProductByCategory', products)
  },
  async getCategoryFilters({commit}, [id]){
    const brandFilters = await this.$axios.$get(`http://127.0.0.1:8000/api/product/getCategoryFilters/${id}`);
    commit('setCategoryFilters', brandFilters)
  },
  async Filter({commit}, [filter, priceRange, brand, page = 0]){
    const filteredProducts = await this.$axios.$post(`http://127.0.0.1:8000/api/product/filter`, {'filters': filter, 'priceRange': priceRange, 'brand': brand, 'page': page});
    commit('setProductByBrand', filteredProducts)
  },
  async FilterByCategory({commit}, [filter, priceRange, category, page = 0]){
    const filteredProducts = await this.$axios.$post(`http://127.0.0.1:8000/api/product/filterByCategory`, {'filters': filter, 'priceRange': priceRange, 'category': category, 'page': page});
    commit('setProductByCategory', filteredProducts)
  },
  async getProductsByIds({commit}, [ids]){
    const ProductsByIds = await this.$axios.$post(`http://127.0.0.1:8000/api/product/getProductsByIds`, {'ids': ids});
    commit('setProductByIds', ProductsByIds)
  },
  async filterAsType({commit}, [type]){
    const filterAsTypeProduct = await this.$axios.$get(`http://127.0.0.1:8000/api/product/fiterAsType/${type}`);
    if(type === 'new') {
      commit('setNewProducts', filterAsTypeProduct)
    }else if(type === 'best') {
      commit('setBestProducts', filterAsTypeProduct)
    }else if(type === 'sales'){
      commit('setSalesProducts', filterAsTypeProduct)
    }
  },
  async salesProducts({commit}){
    const filterAsTypeProduct = await this.$axios.$get(`http://127.0.0.1:8000/api/product/fiterAsSalesType`);
    commit('setAllSalesProducts', filterAsTypeProduct)
  },
  async updateProduct({commit}, [id, name_en, name_ru, name_am, category, price, selectedImages, selectedColors,  selectedSizes, selectedBrand, sex, isNew, discountType, discount, description_en, description_ru, description_am]){
    await this.$axios.$put(`http://127.0.0.1:8000/api/product/update/${id}`, {'name_en': name_en, 'name_ru': name_ru, 'name_am': name_am, 'category': category, 'price': price, 'selectedImages': selectedImages, 'selectedColors': selectedColors, 'sizes': selectedSizes, 'selectedBrand': selectedBrand, 'sex': sex, 'isNew': isNew, 'discountType': discountType, 'discount': discount, 'description_en': description_en, 'description_ru': description_ru, 'description_am': description_am});
  },
  async delete({commit}, [id]){
    await this.$axios.$delete(`http://127.0.0.1:8000/api/product/delete/${id}`);
  },
  async addProduct(ctx, [name_en, name_ru, name_am, category, price, selectedImages, selectedColors,  selectedSizes, selectedBrand, sex, isNew, discountType, discount, description_en, description_ru, description_am])  {
    await this.$axios.$post('http://127.0.0.1:8000/api/product/add', {'name_en': name_en, 'name_ru': name_ru, 'name_am': name_am, 'category': category, 'price': price, 'selectedImages': selectedImages, 'selectedColors': selectedColors, 'sizes': selectedSizes, 'selectedBrand': selectedBrand, 'sex': sex, 'isNew': isNew, 'discountType': discountType, 'discount': discount, 'description_en': description_en, 'description_ru': description_ru, 'description_am': description_am});
  }
}

export const getters = {
  products: s => s.products,
  product:  s => s.product,
  newProducts: s => s.newProducts,
  bestProducts: s => s.bestProducts,
  salesProducts: s => s.salesProducts,
  productByBrand: s => s.productByBrand,
  productByIds: s => s.productByIds,
  productByCategory: s => s.productByCategory,
  categoryFilter: s => s.categoryFilter,
  AllSalesProducts: s => s.AllSalesProducts,
}
