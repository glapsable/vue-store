<template>
  <div id="app">
    <Header />
    <router-view/>
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

<style>
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
