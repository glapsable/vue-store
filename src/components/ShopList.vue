<template>
  <div class="home__cards-wrapper">
    <ShopCard
        v-for="shopItem in allShopList"
        v-bind:key="shopItem.id"
        v-bind:shopItem="shopItem"
        v-on:clickCard="goToDetails"
    />
  </div>
</template>

<script>
  // import unsplash from '../api/unsplash';
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
      goToDetails(id) {
        this.$router.push({ name: 'details', params: { id } });
      },
    },
    created() {
      this.fetchShopList()
    }
    // data() {
    //   return {
    //     isLoading: false,
    //     shopItems: []
    //   }
    // },
    // methods: {
    //   goToDetails(id) {
    //     this.$router.push({ name: 'details', params: { id } });
    //   },
    //   fetchData() {
    //     this.isLoading = true;
    //     unsplash.get('/collections')
    //       .then(res => {
    //         res.data.forEach(item => {
    //           this.isLoading = false;
    //           this.shopItems.push({
    //             id: item.id,
    //             photo: item.preview_photos[0].urls.regular,
    //             title: item.title,
    //             description: item.cover_photo.alt_description
    //           });
    //         });
    //       })
    //       .catch(err => {
    //         this.isLoading = false;
    //         // eslint-disable-next-line
    //         console.log('err', err)
    //       })
    //   }
    // },
    // created() {
    //   this.fetchData();
    // }
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
  .home__cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
