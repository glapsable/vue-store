const state = {
  cartBox: []
};

const getters = {
  allCartBoxList: state => state.cartBox,
};

const actions = {};

const mutations = {
  setCartItem: (state, cartBoxItem) => {
    state.cartBox.push(cartBoxItem);
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
