<template>
  <div class="shop-list__cards-wrapper">
    <ShopCard
        v-for="shopItem in allShopList"
        v-bind:key="shopItem.id"
        v-bind:shopItem="shopItem"
    />
  </div>
</template>

<script>
  import ShopCard from '../components/ShopCard';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'ShopList',
    components: {
      ShopCard,
    },
    computed: mapGetters(['allShopList']),
    methods: {
      ...mapActions(['fetchShopList']),
    },
    created() {
      this.fetchShopList()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';

  .shop-list__cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
