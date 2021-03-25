<template>
    <b-container class="home">
      <h3>Json Placeholder Posts<hr></h3>
      <cards :posts="displayPosts"/>
       <div class="overflow-auto">
    <!-- Use text in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      class= "pag"
      @input=paginate(currentPage)
    ></b-pagination>
    </div>
   
    <!-- <ol>
     <li v-for="response in allPosts" :key="response.id">
        {{response}}
       </li>
     </ol>
      -->
    </b-container>
</template>

<script>
  import Cards from '@/components/Cards.vue';
  import { mapGetters } from "vuex";
  
export default {
  components: {
    Cards
    },

   data () {
    return {
      perPage: 6,
      currentPage: 1,
    }
  },
  computed: {
    ...mapGetters([
    'allPosts','rows','displayPosts'
  ])
  },
  methods: {
    paginate(currentPage) {
       this.$store.dispatch('paginate', {currentPage, perPage: this.perPage})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  .pag {
    margin: 20px 0;
  }
  @media (max-width: 576px) {
    div.overflow-auto {
      display: flex;
      justify-content: center;
    }
  }
ul {
  /* list-style-type: none; */
  padding: 0;
}
// li {
//   /* display: inline-block;
//   margin: 0 10px; */
// }
a {
  color: #42b983;
}
}
</style>
