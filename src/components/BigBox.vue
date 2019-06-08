<template>
  <div class="big-box">
    <img class="big-box__image" :src="selectedItem.photo" alt="Shopping item image">
    <div class="big-box__bottom">
      <div class="big-box__information">
        <p class="big-box__title">{{selectedItem.title}}</p>
        <p class="big-box__description">{{selectedItem.description}}</p>
      </div>
      <div class="big-box__button-wrap">
        <button
            class="big-box__button"
            v-on:click="addToCart"
        >Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "BigBox",
    props: ["itemId"],
    data: function() {
      return {
        selectedItem: {}
      }
    },
    methods: {
      addToCart() {
        this.$store.commit('setCartItem', {...this.selectedItem})
      }
    },
    computed: mapGetters(['allShopList']),
    created() {
      this.selectedItem = this.allShopList.find(item => item.id === this.itemId);
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';

  .big-box {
    background-color: $light-blue;
    padding: 30px 50px 60px;
    margin-top: 25px;
    width: 1000px;
  }
  .big-box__image {
    max-width: 100%;
    height: auto;
  }
  .big-box__title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .big-box__description {
    color: $gray;
    font-size: 13px;
  }
</style>
