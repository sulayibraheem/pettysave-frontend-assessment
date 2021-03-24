<template>
  <div id="app">
    <div id="nav">
  <the-navigation />
    </div>
<<<<<<< HEAD
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
=======
    <router-view/>
>>>>>>> 6495f8f5c0f789491ad9fd8ca6b142a60768df02
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
<<<<<<< HEAD
=======
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
>>>>>>> 6495f8f5c0f789491ad9fd8ca6b142a60768df02
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
