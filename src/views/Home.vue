<template>
  <b-container class="home">
    <b-container>
      <h3>Json Placeholder Posts<hr></h3>
    </b-container>
    <cards :posts="displayPosts"/>
    <b-container v-if='searching'  style="text-align: center">
      <h3>No Result Found</h3>
      <b-button class='return' @click="search">Return To Posts</b-button>
    </b-container>
    <b-container class="paginate">
      <div class="overflow-auto">
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
        >
        </b-pagination>
      </div>
    </b-container>
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
      perPage: 9,
      currentPage: 1,
    }
  },
  computed: {
    ...mapGetters([
    'allPosts','rows','displayPosts','searching'
  ])
  },
  methods: {
    paginate(currentPage) {
      this.$store.dispatch('paginate', {currentPage, perPage: this.perPage})
    },
    search(){
      this.$store.dispatch('noResult')
    }
} 
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
  .return {
    background: #42b983;
    border-color: #42b983;
  }
  .return:hover {
    background: #266d4d;
    color: rgb(184, 184, 184);
  }
   div.overflow-auto {
     display: flex;
     justify-content: flex-end;
    .pag {
      margin: 50px 0;
    }
  }
  @media (max-width: 576px) {
    div.overflow-auto {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
