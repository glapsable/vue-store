import unsplash from '../../api/unsplash';

const state = {
  shopList: [],
  isLoading: false,
};

const getters = {
  allShopList: state => state.shopList,
  isLoading: state => state.isLoading,
};

const actions = {
  async fetchShopList({ commit }) {
    commit('loading', true );
    const response = await unsplash.get('/collections');

    const managedResponse = response.data.map(item => ({
      id: item.id,
      title: item.title,
      description: item.cover_photo.alt_description,
      photo: item.preview_photos[0].urls.regular
    }));

    commit('setShopList', managedResponse);
    commit('loading', false );
  }
};

const mutations = {
  setShopList: (state, shopList) => (state.shopList = shopList),
  loading: (state, isLoading) => (state.isLoading = isLoading)
};

export default {
  state,
  getters,
  actions,
  mutations
};
