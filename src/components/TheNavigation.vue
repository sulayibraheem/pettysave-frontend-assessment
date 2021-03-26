<template>
  <b-navbar toggleable="sm" type="dark">
    <b-navbar-brand translate="no">Blog</b-navbar-brand>
      <b-navbar-nav>
        <router-link class="nav-link" to="/"><b-icon-house-fill @click="home"/></router-link>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit.prevent="search">
          <b-form-input size="lg" v-model="searchText" class="mr-sm-2" placeholder="Search Posts">
          </b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 submit" type="submit">
            Search
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { BIconHouseFill } from "bootstrap-vue"
export default {
  data () {
    return {
    searchText: ''
    }
  },
  components: {
    BIconHouseFill
  },

  methods: {
    search() {
      this.$store.dispatch('search', {text: this.searchText})
    },
    home(){
      this.$store.dispatch('noResult');
    }
  }
}
</script>

<style lang="scss" scoped>
div#nav {
  padding: 0;
  .navbar {
    background-color: #032541;
    margin: auto 0;
    a.nav-link {
      font-weight: bold;
      color: #6796c5;
    }
    a.nav-link:hover {
      color: #286b4d;
    }
    a.router-link-exact-active {
      color: #42b983;
    }
    .form-control-lg {
      height: calc(1.0em + 0.6rem);
    }
    .submit {
      background:#42b983;
    }
    .submit:hover {
      color: #286b4d;
    }

    @media (max-width: 576px){
      .form-control-lg {
        margin: 20px 0 5px 0;
      }
      ul.ml-auto {
        margin-left: 0 !important;
      }
    }
  }
}
</style>