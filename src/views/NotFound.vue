<template>
  <b-container class="home">
    <h3>Error 404!!! Page Not Found<hr></h3>
    <b-button variant="warning" :to="{name: 'Home'}">
      Return To Posts
    </b-button>
  </b-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home {
      text-align: center;
  h3 {
    margin: 30vh 0 30px 0;
    color: #032541;
    hr {
    width: 50px;
    border: 1px solid #808080;
    border-radius: 50%;
    }
  }
}
</style>