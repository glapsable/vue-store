<template>
  <div class="layout">
    <CartBox/>
    <BigBox v-bind:itemId="id"/>
  </div>
</template>

<script>
  import CartBox from '../components/CartBox';
  import BigBox from '../components/BigBox';
  export default {
    name: 'Details',
    components: {
      CartBox,
      BigBox
    },
    data() {
      return {
        id: this.$route.params.id
      }
    }
  }
</script>

<style>
  .details {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
  }
</style>
