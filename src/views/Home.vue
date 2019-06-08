<template>
  <div class="home">
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

<style lang="scss" scoped>
  @import '../assets/styles/variables';

  .home {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: $rwd-small) {
      flex-direction: row;
      align-items: flex-start;
    }
  }
</style>
