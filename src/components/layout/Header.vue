<template>
  <header class="header">
    <h1 class="header__logo">LOGO</h1>
    <nav class="header__nav">
      <router-link class="header__link" to="/">Home</router-link>
      <router-link class="header__link" to="/about">About</router-link>
      <router-link class="header__link" to="/contact">Contact</router-link>
      <div><MagniferIcon /></div>
    </nav>
  </header>
</template>

<script>
  import MagniferIcon from '../../assets/icons/magnifier.svg';
  export default {
    name: "Header",
    components: {
      MagniferIcon
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/_variables.scss";
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $gray;
    height: 90px;
  }
  .header__logo {
    font-family: $second-font, sans-serif;
    font-weight: $main-weight;
    margin: 0;
    padding: 0;
  }
  .header__link {
    font-size: 14px;
    font-weight: bold;
    margin-right: 46px;
  }
</style>
