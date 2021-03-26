<template>
  <b-container fluid>
    <transition-group class="animation" name="fade" mode="out-in">
      <b-row align-v="start" v-for="post in posts" :key='post.id'>
        <b-card no-body
        :img-src= allImages[post.id].url
        img-alt="Image"
        :body="post.body"
        img-top
        style="max-width: 20rem;"
        class="mb-2 container-card"
        >
          <b-card body
          :title= post.title
          tag="article"
          class="mb-0"
          >
            <b-card-text>
              {{post.body}}
            </b-card-text>

            <b-button  class="buton" :to="{name: 'postDetails', params: {id: post.id}}" variant="secondary">
              See Post
            </b-button>
          </b-card>
          <b-card-footer>
            <p>{{post.id}} of 100</p>
          </b-card-footer>
        </b-card>
      </b-row>
    </transition-group>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props:[
    'posts'
  ],

  computed:mapGetters([
    'allImages',
    'allPosts'
  ]),

  methods: {
    ...mapActions(['getPosts']),
    ...mapActions(['getImages']),
  },

  created () {
    this.getPosts()
    this.getImages()
  },

  data () {
    return {
      click: false
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  padding: 0;
  .animation {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0;
    .container-card {
     box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
      margin: 20px 0;
      border: 1px solid rgba(0,0,0,.125);
      article.card {
        border: none;
      }
      div.card-body {
        border: none;
        max-width: 100%;
        .card-text,
        .card-title {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .card-title {
        -webkit-line-clamp: 1;
        }
        .buton {
          background: #42b983;
          border-color: #42b983;
        }
        .buton:hover {
          background: #286b4d;
          border-color: #286b4d;
        }
      }
      .card-footer {
        text-align: center;
        p {
          font-size: 0.7em;
        }
      }
    }
    .fade-leave-active,
    .fade-enter-active {
      transition: opacity 0.5s
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
  }
}
</style>