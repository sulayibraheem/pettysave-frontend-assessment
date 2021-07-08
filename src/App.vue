<template>
  <div id="app">
    <div class="page" v-if="showSpinner">
      <b-spinner class="spinner" variant="success"></b-spinner>
    </div>
    <div id="nav">
      <the-navigation />
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    TheNavigation,
  },
  computed: {
    ...mapGetters(["showSpinner"]),
  },
  methods: {
    ...mapActions(["getPosts"]),
    ...mapActions(["getImages"]),
  },
  created() {
    this.getImages();
    this.getPosts();
  },
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  background-color: #f0f8ff;
  padding-bottom: 100px;
}
.page {
  position: absolute;
  z-index: 5;
  background: #0000004d;
  width: 100%;
  height: 100%;
}
.spinner {
  position: relative;
  top: 50%;
  left: 50%;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
