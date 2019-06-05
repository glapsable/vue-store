<template>
  <header class="header">
    <h1 class="header__logo">LOGO</h1>
    <nav class="header__nav">
      <router-link class="header__link" to="/">Home</router-link>
      <router-link class="header__link" to="/about">About</router-link>
      <router-link class="header__link" to="/contact">Contact</router-link>
      <div class="header__magnifier">
        <MagnifierIcon/>
      </div>
    </nav>
  </header>
</template>

<script>
  import MagnifierIcon from '../../assets/icons/magnifier.svg';
  export default {
    name: "Header",
    components: {
      MagnifierIcon,
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/_variables.scss";

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow:0 1px 0 $gray;
    @media only screen and (min-width: $small) {
      flex-direction: row;
    }
  }
  .header__logo {
    font-family: $second-font, sans-serif;
    font-weight: $main-weight;
    margin: 20px;
    padding: 0;
  }
  .header__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 40px;
    width: 100vw;
    @media only screen and (min-width: $small) {
      margin-left: unset;
      justify-content: flex-end;
    }
  }
  .header__link {
    font-size: 14px;
    font-weight: bold;
    margin-right: 46px;
    &:hover {
      color: $light-blue;
    }
  }
  .header__magnifier {
    display: flex;
    background-color: $search;
    width: 90px;
    height: 90px;
    & > svg {
      margin: auto;
    }
  }
</style>
