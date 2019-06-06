<template>
  <router-link v-bind:to="{ name: 'details', params: { id: shopItem.id } }"
      class="shop-card"
  >
    <img class="shop-card__image" :src="shopItem.photo" alt="">
    <div class="shop-card__info">
      <p class="shop-card__title">{{shopItem.title}}</p>
      <p class="shop-card__description">{{shopItem.description}}</p>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "ShopCard",
    props: ["shopItem"]
  }
</script>

<style>
  .shop-card {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.02);
    margin: 25px;
    width: 216px;
  }
  .shop-card__image {
    display: block;
    width: 216px;
    height: 216px;
  }
  .shop-card__info {
    padding: 15px;
  }
  .shop-card__title {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 15px;
  }
  .shop-card__description {
    font-size: 12px;
    margin: 0;
  }
</style>
