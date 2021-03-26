<template>
  <b-container>
    <b-row>
      <b-col class="image" md="6">
        <img :src="allImages[post.id].url"
          :alt="allImages[post.id].title" />
      </b-col>
      <b-col class="post" md="6">
        <h3 class="title">Post Title: {{post.title}} <hr></h3>
        <p class="body">{{post.body}}</p>
         <b-button v-if="like" variant="danger" @click="unlike">Like This Post <b-icon-hand-thumbs-down /></b-button>
        <b-button v-else variant="success" @click="unlike">Post Liked <b-icon-hand-thumbs-up /></b-button>
        <b-col>
          <h3 class="title">Comments<hr></h3>
        </b-col>
        <b-col>
          <b-col class="comments" v-for="comment in allComments" :key="comment.id">
              <h6>Name: <span class="name">{{comment.name}}</span></h6>
              <h6>Email: <span>{{comment.email}}</span></h6>
              <p>{{comment.body}}</p>
              <hr>
          </b-col>
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
    }
  .image {
    display: flex;
    align-items: center;
      img {
        max-width: 100%;
        max-height: auto;
        border-radius: 7px;
        margin-bottom: 50px;
      }
    }
  .post {
    text-align: center;
    hr {
      border: 1px solid rgb(68, 67, 67);
      border-radius: 50%;
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
    p {
      text-align: left;
    }
    p::first-letter {
      text-transform: capitalize;
      font-size: 2em;
    }
    button {
    border: 0;
    // background: transparent;
    margin-bottom: 50px;
  }
  .comments {
    text-align: left;
    h6 {
      margin: 10px auto;
      .name {
        text-transform: capitalize;
      }
    }
    p::first-letter {
      font-size: 1.3em;
      font-weight: 300;
      text-transform: capitalize;
    }
  }
  }
}
</style>