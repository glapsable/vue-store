<template>
  <p>{{ id }}</p>
</template>

<script>
  export default {
    name: 'Details',
    id: this.$route.params.id,
  }
</script>

<style>

</style>
