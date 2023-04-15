<template>
  <div id="app">
    <main-header />
    <div class="container">
      <icons-sm />
      <router-view />
    </div>
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
import IconsSm from "./components/IconsSM.vue";
import "./assets/css/styles.css";

export default {
  name: "App",
  components: {
    MainHeader,
    MainFooter,
    IconsSm,
  },
};
</script>

