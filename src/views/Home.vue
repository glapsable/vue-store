<template>
  <div class="layout">
    <CartBox/>
    <ShopList/>
    <div class="isLoading" v-if="isLoading">
      <LoaderIcon/>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import CartBox from '../components/CartBox';
  import ShopList from '../components/ShopList';
  import LoaderIcon from '../assets/icons/loader.svg';

  export default {
    name: 'Home',
    components: {
      CartBox,
      ShopList,
      LoaderIcon,
    },
    computed: mapGetters(['isLoading']),
  }
</script>
