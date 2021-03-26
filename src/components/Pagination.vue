<template>
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
</template>

<script>
  import { mapGetters } from "vuex";

export default {
  data () {
    return {
      perPage: 3,
      currentPage: 1,
      displayJobs: []
    }
  },
  computed:mapGetters([
    'allPosts','rows','displayJobs'
  ]),
  methods: {
    async fetchPosts() {
      this.displayJobs = this.allPosts.slice(0,3)
    },
    paginate(currentPage) {
      const start = (currentPage - 1) * this.perPage
      this.displayJobs = this.allPosts.slice(start, start+3)
    }
  }
}
</script>

<style lang="scss" scoped>
  .pag {
    margin: 20px 0;
  }
  @media (max-width: 576px) {
    div.overflow-auto {
      display: flex;
      justify-content: center;
    }
  }
</style>