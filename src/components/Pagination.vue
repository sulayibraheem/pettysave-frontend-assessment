<template>
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
    ></b-pagination>
    </div>
</template>

<script>
  import { mapGetters } from "vuex";

export default {
  data () {
    return {
      jobs: '',
      perPage: 3,
      currentPage: 1,
      rows: this.$store.state.rows
    }
  },
  computed:mapGetters([
    'allPosts'
  ])
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