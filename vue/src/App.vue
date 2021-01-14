<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import FooterBar from "./components/FooterBar.vue"

export default {
  name: "App",
  components: {
    ToolBar,
    FooterBar
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-actice {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
