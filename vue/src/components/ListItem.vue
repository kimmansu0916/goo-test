<template>
  <div>
    <ul class="item-list">
      <li v-for="item in this.$store.state.data" :key="item" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="item-title">
            <a :href="item.url"> {{ item.title }} </a>
          </p>
          <small class="list-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              :to="`/user/${item.user}`"
              class="list-text"
            >
              {{ item.user }}
            </router-link>
            <router-link v-else :to="`item.url`" class="list-text">
              {{ item.domain }}</router-link
            >
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    var name = this.$route.name;
    if (name === "news") {
      this.$store.dispatch("GET_DATA", "/news/1.json");
    } else if (name === "ask") {
      this.$store.dispatch("GET_DATA", "/ask/1.json");
    } else if (name === "jobs") {
      this.$store.dispatch("GET_DATA", "/jobs/1.json");
    }
  },
  computed: {
    ListItems() {
      return this.$store.state.data;
    },
  },
};
</script>

<style scoped>
.item-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.item-title {
  margin: 0;
}
.points {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.list-text {
  color: gray;
}

button {
  float: right;
}
</style>