<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
export default {
  components: { ListItem },
  created() {
    this.$store.dispatch("GET_DATA", "/news/1.json");
  },
};
</script>

<style scoped>
</style>