export const state = () => ({
  wishList: [],
  cart: [],
  wishListLength: 0,
  cartLength: 0,
  wishListData: [],
  cartData: []
});

export const mutations = {
  setWishList(state, wishList){
    state.wishList = wishList;
  },
  setCart(state, cart){
    state.cart = cart;
  },
  setWishListLength(state, wishList){
    state.wishListLength = wishList;
  },
  setCartLength(state, cart){
    state.cartLength = cart;
  },
  setWishListData(state, data){
    state.wishListData = data;
  },
  setCartData(state, data){
    state.cartData = data;
  }
}

export const actions = {
  async emptyCart({commit}){
    commit('setCart', []);
    commit('setCartData', []);
    commit('setCartLength', 0);
  },
  async fetch({commit}){
    let cookieResWishList = this.$cookies.get('davmar_wishlist');
    if(cookieResWishList === undefined){
      commit('setWishList', []);
      commit('setWishListLength', 0);
    }else{
      let wishlistId = await this.$axios.get(this.$axios.defaults.baseURL+'/wishlist/get/' + cookieResWishList);
      commit('setWishList', cookieResWishList);
      commit('setWishListLength', wishlistId.data.wishlistLenght);
    }

    let cookieRes = this.$cookies.get('davmar_cart');
    if(cookieRes === undefined){
      commit('setCart', []);
      commit('setCartLength', 0);
    }else{
      let cartId = await this.$axios.get(this.$axios.defaults.baseURL+'/cart/get/' + cookieRes);
      commit('setCart', cookieRes);
      commit('setCartLength', cartId.data.CartLength);
    }
  },
  async getWishListAndCartData({commit}, [user_id = 0]){

    let cookieResWishList = this.$cookies.get('davmar_wishlist');
    if(user_id !== 0){
      let wishlistData = await this.$axios.post(this.$axios.defaults.baseURL+'/wishlist/getItem/', {'user_id': user_id});

      // commit('setWishListData', wishlistData.data.data);

      if(wishlistData.data.data){
        commit('setWishListData', wishlistData.data.data);
        commit('setWishListLength', wishlistData.data.data.length);
      }else{
        commit('setWishListData', []);
        commit('setWishListLength', 0);
      }
      commit('setWishList', wishlistData.data.id);
    }else if(cookieResWishList !== undefined){
      let wishlistData = await this.$axios.post(this.$axios.defaults.baseURL+'/wishlist/getItem/', {'wishlist_id': cookieResWishList});
      // commit('setWishListData', wishlistData.data.data);

      if(wishlistData.data.data){
        commit('setWishListData', wishlistData.data.data);
        commit('setWishListLength', wishlistData.data.data.length);
      }else{
        commit('setWishListData', []);
        commit('setWishListLength', 0);
      }
      commit('setWishList', wishlistData.data.id);
    }else{
      commit('setWishListData', []);
      commit('setWishList', []);
      commit('setWishListLength', 0);
    }

    let cookieRes = this.$cookies.get('davmar_cart');
    if(user_id !== 0){
      let cartData = await this.$axios.post(this.$axios.defaults.baseURL+'/cart/getItem/', {'user_id': user_id});
      if(cartData.data.data){
        commit('setCartData', cartData.data.data);
      }else{
        commit('setCartData', []);
      }
      commit('setCart', cartData.data.id);
      if(cartData.data.data){
        commit('setCartLength', cartData.data.data.length);
      }else{
        commit('setCartLength', 0);
      }
    }else if(cookieRes !== undefined){
      let cartData = await this.$axios.post(this.$axios.defaults.baseURL+'/cart/getItem/', {'cart_id': cookieRes});
      if(cartData.data.data){
        commit('setCartData', cartData.data.data);
      }else{
        commit('setCartData', []);
      }
      commit('setCart', cartData.data.id);
      if(cartData.data.data){
        commit('setCartLength', cartData.data.data.length);
      }else{
        commit('setCartLength', 0);
      }
    }else{
      commit('setCartData', []);
      commit('setCart', []);
      commit('setCartLength', 0);
    }
  },
  async setWishList({commit}, [id, user_id, productColors = [], productSizes = [], count = 1]) {
    let cookieRes = this.$cookies.get('davmar_wishlist');
    let cookiresLenght = 0;
    let wishlistId = '';
    if(cookieRes === undefined){
      wishlistId = await this.$axios.post(this.$axios.defaults.baseURL+'/wishlist/set', {'productId': id, 'productColors': productColors, 'productSizes': productSizes, 'count': count, 'user_id': user_id});
      this.$cookies.set('davmar_wishlist', wishlistId.data.wishlist_id, {
        path: '/',
        maxAge: 10 * 365 * 24 * 60 * 60
      });
      cookieRes = [id];
      cookiresLenght = 1;
    }else{
      wishlistId = await this.$axios.post(this.$axios.defaults.baseURL+'/wishlist/set', {'productId': id, 'productColors': productColors, 'productSizes': productSizes, 'count': count, 'wishlistId': cookieRes, 'user_id': user_id});
      cookiresLenght = wishlistId.data.wishlistLenght;
    }
    commit('setWishList', wishlistId.data.wishlist_id);
    commit('setWishListLength', cookiresLenght);
  },
  async setCArt({commit}, [id, user_id, productColors = [], productSizes = [], count = 1]){
    let cookieRes = this.$cookies.get('davmar_cart');
    let cartId = '';
    let cookiesLength = 0;
    if(cookieRes === undefined){
      cartId = await this.$axios.post(this.$axios.defaults.baseURL+'/cart/set', {'productId': id, 'productColors': productColors, 'productSizes': productSizes, 'count': count, 'user_id': user_id});
      this.$cookies.set('davmar_cart', cartId.data.cart_id, {
        path: '/',
        maxAge: 10 * 365 * 24 * 60 * 60
      })
      cookieRes = [id];
      cookiesLength = 1;
    }else{
      cartId = await this.$axios.post(this.$axios.defaults.baseURL+'/cart/set', {'productId': id, 'productColors': productColors, 'productSizes': productSizes, 'count': count, 'cartId': cookieRes, 'user_id': user_id});
      cookiesLength = cartId.data.CartLength;
    }
    commit('setCart', cartId.data.cart_id);
    commit('setCartLength', cookiesLength);
  },
  async removeFromWhishList({commit}, [id, user_id]){
    let cookieRes = this.$cookies.get('davmar_wishlist');
    let wishListData = [];
    if(cookieRes === undefined){
      wishListData = await this.$axios.post(this.$axios.defaults.baseURL+`/wishlist/delete/`, {'productIndex': id, 'user_id': user_id});
    }else{
      wishListData = await this.$axios.post(this.$axios.defaults.baseURL+`/wishlist/delete/`, {'productIndex': id, 'cart_id': cookieRes, 'user_id': user_id});
    }

    if(wishListData.data.data){
      commit('setWishListData', wishListData.data.data);
    }else{
      commit('setWishListData', []);
    }
    commit('setWishList', wishListData.data.id);
    if(wishListData.data.data){
      commit('setWishListLength', wishListData.data.data.length);
    }else{
      commit('setWishListLength', 0);
    }
  },

  async updateFromWhishList({commit}, [id, user_id, count]){
    let cookieRes = this.$cookies.get('davmar_wishlist');
    let wishListData = [];
    if(cookieRes === undefined){
      wishListData = await this.$axios.post(this.$axios.defaults.baseURL+`/wishlist/updateItem/`, {'productIndex': id, 'user_id': user_id, 'count': count});
    }else{
      wishListData = await this.$axios.post(this.$axios.defaults.baseURL+`/wishlist/updateItem/`, {'productIndex': id, 'cart_id': cookieRes, 'user_id': user_id, 'count': count});
    }

    if(wishListData.data.data){
      commit('setWishListData', wishListData.data.data);
    }else{
      commit('setWishListData', []);
    }
    commit('setWishList', wishListData.data.id);
    if(wishListData.data.data){
      commit('setWishListLength', wishListData.data.data.length);
    }else{
      commit('setWishListLength', 0);
    }
  },

  async removeFromCart({commit}, [id, user_id]){
    let cookieRes = this.$cookies.get('davmar_cart');
    let cartData = [];
    if(cookieRes === undefined){
      cartData = await this.$axios.post(this.$axios.defaults.baseURL+`/cart/delete/`, {'productIndex': id, 'user_id': user_id});
    }else{
      cartData = await this.$axios.post(this.$axios.defaults.baseURL+`/cart/delete/`, {'productIndex': id, 'cart_id': cookieRes, 'user_id': user_id});
    }

    if(cartData.data.data){
      commit('setCartData', cartData.data.data);
    }else{
      commit('setCartData', []);
    }
    commit('setCart', cartData.data.id);
    if(cartData.data.data){
      commit('setCartLength', cartData.data.data.length);
    }else{
      commit('setCartLength', 0);
    }
  },
  async updateFromCart({commit}, [id, user_id, count]){
    let cookieRes = this.$cookies.get('davmar_cart');
    let cartData = [];
    if(cookieRes === undefined){
      cartData = await this.$axios.post(this.$axios.defaults.baseURL+`/cart/updateCartItem/`, {'productIndex': id, 'user_id': user_id, 'count': count});
    }else{
      cartData = await this.$axios.post(this.$axios.defaults.baseURL+`/cart/updateCartItem/`, {'productIndex': id, 'cart_id': cookieRes, 'user_id': user_id, 'count': count});
    }

    if(cartData.data.data){
      commit('setCartData', cartData.data.data);
    }else{
      commit('setCartData', []);
    }
    commit('setCart', cartData.data.id);
    if(cartData.data.data){
      commit('setCartLength', cartData.data.data.length);
    }else{
      commit('setCartLength', 0);
    }
  }
}

export const getters = {
  wishList: s => s.wishList,
  cart:  s => s.cart,
  wishListLength: s => s.wishListLength,
  cartLength:  s => s.cartLength,
  wishListData:  s => s.wishListData,
  cartData:  s => s.cartData,
}
