<template>
   <b-container class="home">
      <h3>Error 404!!! Page Not Found<hr></h3>
      <b-button variant="warning" :to="{name: 'Home'}">Return Home</b-button>
      </b-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home {
  h3 {
    margin: 40px 0 ;
    color: #032541;
    hr {
    width: 50px;
    margin-left: 0;
    border: 1px solid #808080;
    border-radius: 50%;;
    }
  }
}
</style>