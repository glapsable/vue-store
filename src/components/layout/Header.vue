<template>
  <header class="header">
    <div class="container header__container">
      <router-link to="/"><h1 class="header__logo">LOGO</h1></router-link>
      <nav class="header__nav">
        <router-link class="header__link" to="/">Home</router-link>
        <router-link class="header__link" to="/about">About</router-link>
        <router-link class="header__link" to="/contact">Contact</router-link>
        <div class="header__magnifier">
          <MagnifierIcon/>
        </div>
      </nav>
    </div>
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
    box-shadow:0 1px 0 $gray;
  }
  .header__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 0 20px;
    @media only screen and (min-width: $rwd-small) {
      flex-direction: row;
    }
  }
  .header__logo {
    color: $dark-text;
    font-family: $second-font, sans-serif;
    font-weight: $main-weight;
    margin-right: 20px;
    padding: 0;
  }
  .header__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 40px;
    width: 100vw;
    @media only screen and (min-width: $rwd-small) {
      margin-left: unset;
      justify-content: flex-end;
    }
  }
  .header__link {
    color: $dark-text;
    font-size: 14px;
    font-weight: bold;
    &:hover {
      color: $light-blue;
    }
    @media only screen and (min-width: $rwd-small) {
      margin-right: 46px;
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
