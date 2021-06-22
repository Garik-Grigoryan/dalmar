export const state = () => ({
  orders: [],
  subscribers: [],
});

export const mutations = {
  setSizes(state, sizes){
    state.sizes = sizes;
  },
  setSize(state, size){
    state.size = size;
  },
  setOrders(state, orders){
    state.orders = orders;
  },
  setSubscribers(state, subscribers){
    state.subscribers = subscribers;
  }
}

export const actions = {
  async checkPassword({commit}, [id, password]) {
    const sizes = await this.$axios.$post(this.$axios.defaults.baseURL+'/user/checkPassword', {id: id, password: password});
  },

  async update(ctx, [id, name, email, password, phone, address]){
    await this.$axios.$post(this.$axios.defaults.baseURL+'/user/update', {id, name, email, password, phone, address});
  },
  async buy(ctx, [user_id, cartId, totalPrice, address, payment, nameLastName, email, count, phone]){
    let cookieRes = this.$cookies.remove('davmar_cart');

    // await this.$axios.$post(this.$axios.defaults.baseURL+'/order/store', {user_id, cartId, totalPrice, address, payment, nameLastName, email, count, phone});
    // return true;

    let result = await this.$axios.$post(this.$axios.defaults.baseURL+'/order/store', {user_id, cartId, totalPrice, address, payment, nameLastName, email, count, phone});
    return result;
  },
  async initOrder(ctx, [description, orderId, amount]){
    let result = await this.$axios.$post(this.$axios.defaults.baseURL+'/payment/InitPayment', {description, orderId, amount});
    return result;
  },
  async getPayment(ctx, [paymentID, orderID]){
    let result = await this.$axios.$post(this.$axios.defaults.baseURL+'/payment/GetPaymentDetails', {paymentID, orderID});
    return result;
  },
  async refundPayment(ctx, [order_id]){
    let result = await this.$axios.$post(this.$axios.defaults.baseURL+'/payment/RefundPayment', {order_id});
    return result;
  },
  async subscribe(ctx, [email]){
    let result = await this.$axios.$post(this.$axios.defaults.baseURL+'/subscribe/subscribe', {email});
    return result;
  },
  async getSubscribers({commit}){
    let result = await this.$axios.$get(this.$axios.defaults.baseURL+'/subscribe/get');
    commit('setSubscribers', result);
  },
  async getOrders({commit}, [userId]){
    if(userId == 'All'){
      let orders = await this.$axios.$get(this.$axios.defaults.baseURL+'/order/get/');
      commit('setOrders', orders);

    }else{
      let orders = await this.$axios.$get(this.$axios.defaults.baseURL+'/order/get/'+userId);
      commit('setOrders', orders);

    }
  }
}

export const getters = {
  sizes: s => s.sizes,
  size:  s => s.size,
  subscribers:  s => s.subscribers,
  orders:  s => s.orders
}
