import Vuex from 'vuex';
import Vue from 'vue';
import shopList from './modules/shopList';
import cartBox from './modules/cartBox';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    shopList,
    cartBox
  }
});
