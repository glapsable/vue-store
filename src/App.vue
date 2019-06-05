<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import './assets/styles/main.scss';
  import Header from './components/layout/Header';

  export default {
    name: "app",
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  @import '../src/assets/styles/variables';

  .container {
    padding:0 20px;
    max-width: $rwd-xlarge;
    margin: 0 auto;
  }
  .page {
    background-color: $white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.02);
    margin: 0 auto;
    margin-top: 50px;
    max-width: 668px;
    min-height: 448px;
    padding: 50px;
    @media only screen and (min-width: $rwd-small) {
      margin-top: 135px;
      padding: 60px 130px 80px;
    }
  }
  .page__icon-wrapper {
    border: 2px solid $light-blue;
    border-radius: 50%;
    height: 80px;
    margin: 0 auto;
    margin-bottom: 45px;
    position: relative;
    width: 80px;
    & > img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-55%) translateY(-50%);
      width: 35px;
      height: 38px;
    }
  }
  .page__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
  }
  .page__content {
    color: $light-text;
    font-family: $second-font, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-align: justify;
  }
  .page__content--centered {
    text-align: center;
  }
</style>
