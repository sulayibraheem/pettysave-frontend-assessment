<template>
  <b-navbar toggleable="md" type="dark">
    <b-navbar-brand translate="no">Blog</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/">All Posts</router-link>
        <router-link class="nav-link" to="postPage">Favourite Posts</router-link>
      </b-navbar-nav>
          </b-collapse>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit.prevent="search">
          <b-form-input size="lg" v-model="searchText" class="mr-sm-2" placeholder="Search Posts"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 submit" type="submit">Search</b-button>
        </b-nav-form>

      </b-navbar-nav>

  </b-navbar>
</template>

<script>
export default {
  data () {
    return {
    searchText: ''
    }
  },

  methods: {
    search() {
      this.$store.dispatch('search', {text: this.searchText})
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
        margin: 20px 0 0px 0;
      }
    }
  }
}
</style>