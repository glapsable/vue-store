<template>
  <div class="cart-box">
    <div class="cart-box__contact">
      <div class="cart-box__title">
        <img src="../assets/icons/phone-book-white.png" alt="">
        <span class="cart-box__title-text">Contact</span>
      </div>
      <p class="cart-box__info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus est, placerat sed ante vel, ultrices congue augue
      </p>
    </div>
    <div class="cart-box__cart">
      <div class="cart-box__title">
        <img src="../assets/icons/shopping-cart.png" alt="">
        <span class="cart-box__title-text">Contact ({{ allCartBoxList.length }})</span>
      </div>
      <ul class="cart-box__bag" v-bind:class="{'cart-box__bag--empty':allCartBoxList.length === 0}">
          <li v-if="!allCartBoxList.length">Cart is empty</li>
          <li class="cart-box__bag-item" v-bind:key="cartItem.id" v-for="cartItem in allCartBoxList">
            <span class="cart-box__item-green">{{cartItem.id}}</span>
            {{cartItem.title}} {{cartItem.description}}
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "CartBox",
    computed: mapGetters(['allCartBoxList']),
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';

  .cart-box {
    background-color: $light-blue;
    margin-top: 25px;
    min-height: 370px;
    width: 260px;
    padding: 25px 20px;
    flex-shrink: 0;
    @media only screen and (min-width: $rwd-small) {
      margin-right: 25px;
    }
  }
  .cart-box__contact {
    margin-bottom: 25px;
  }
  .cart-box__title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .cart-box__title-text {
    color: $white;
    font-size: 16px;
    font-weight: 400;
    margin-left: 20px;
  }
  .cart-box__info {
    color: $gray;
    font-size: 13px;
    line-height: 16px;
    margin: 0;
  }
  .cart-box__bag {
    border: 1px $white dashed;
    min-height: 130px;
    margin: 0;
    padding: 12px;
  }
  .cart-box__bag--empty {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $gray;
    font-size: 14px;
  }
  .cart-box__bag-item {
    background-color: $dark-blue;
    color: $white;
    font-size: 14px;
    padding: 12px 10px;
    margin-bottom: 5px;

    overflow:hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
  }
  .cart-box__item-green {
    color: $accent;
  }
</style>
