<template>
  <b-container>
    <b-row>
      <b-col class="image">
        <img :src="allImages[post.id].url"
          :alt="allImages[post.id].title" />
      </b-col>
      <b-col>
        <h3 class="title">Title: {{post.title}} <hr></h3>
        <p class="body">{{post.body}}</p>
         <button v-if="like" @click="unlike"><b-icon-hand-thumbs-down /></button>
        <button v-else @click="unlike"><b-icon-hand-thumbs-up /> Liked</button>
        <b-col>
          <h3 class="title">Comments<hr></h3>
        </b-col>
        <b-col>
          <div class="comments" v-for="comment in allComments" :key="comment.id">
              <h5>Name: <span class="name">{{comment.name}}</span></h5>
              <h5>Email: <span>{{comment.email}}</span></h5>
              <p>{{comment.body}}</p>
              <hr>
          </div>
        </b-col>
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
      ...mapGetters(['allComments', 'allImages'])
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
.container {
    padding: {
      top: 70px;
      bottom: 70px;
    }
    .image {
      display: flex;
      align-items: center;
        img {
          max-width: 100%;
          max-height: auto;
          border-radius: 7px;
        }
    }
  h3 {
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
  .comments {
    text-align: left;
    h5 {
      margin: 10px auto;
      span {
        font-weight: 500;
        font-size: 0.7em;
      }
      .name {
        text-transform: capitalize;
      }
    }
    p::first-letter {
      font-size: 2em;
      font-weight: 300;
      text-transform: capitalize;
    }
  }
  }
}
</style>