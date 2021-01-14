<template>
  <div>{{ this.$store.state.user }}</div>
</template>

<script>
export default {
  cerate() {
    const userName = this.$route.params.id;
    this.$store.dispatch("GET_USER_INFO", userName);
  },
};
</script>

<style>
</style>