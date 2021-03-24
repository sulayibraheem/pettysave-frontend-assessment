<template>
  <div id="app">
    <div id="nav">
  <the-navigation />
    </div>
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue'

export default {
  components: { TheNavigation }
}
</script>

<style>
body {
  font-family: "Roboto";
  background-color: #f0f8ff;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
