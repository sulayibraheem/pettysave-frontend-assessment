<template>
  <b-container fluid>
    <b-row>
      <b-col>
        {{post.title}}
      </b-col>
      <b-col>
        <h3 class="title">Title: {{post.title}} <hr></h3>
        <p class="body">{{post.body}}</p>
         <button v-if="like" @click="unlike"><b-icon-hand-thumbs-down /></button>
        <button v-else @click="unlike"><b-icon-hand-thumbs-up /> Liked</button>
      </b-col>
      <b-col>
        
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import { BIconHandThumbsDown, BIconHandThumbsUp} from "bootstrap-vue"
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      postId: this.$route.params.id,
      like: true
    }
  },
  components: {
    BIconHandThumbsDown,
    BIconHandThumbsUp
  },
   computed: {
      post(){
        return this.$store.getters.allPosts.find(
          post => post.id === this.postId
        )
      },
      ...mapGetters(['allComments'])
    },
    methods: {
      unlike() {
          this.like = !this.like
      },
      ...mapActions(['getComments'])
    },
    created() {
      this.getComments()
    }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  h3 {
  margin: 40px 0 ;
  color: #032541;
  text-align: left;
    hr {
    width: 50px;
    margin-left: 0;
    border: 1px solid #808080;
    border-radius: 50%;;
    }
  }
  .col {
    text-align: center;
    p {
      text-align: left;
    }
    button {
    border: 0;
    background: transparent;
  }
  }
}
</style>