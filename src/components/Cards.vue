<template>
  <b-container fluid>
    <transition-group class="animation" name="fade" mode="out-in">
      <b-row align-v="start" v-for="post in posts" :key="post.id">
        <b-card
          no-body
          :img-src="allImages[post.id].url"
          img-alt="Image"
          :body="post.body"
          img-top
          style="max-width: 20rem;"
          class="mb-2 container-card"
        >
          <b-card body :title="post.title" tag="article" class="mb-0">
            <b-card-text>
              {{ post.body }}
            </b-card-text>

            <b-button
              class="buton"
              :to="{ name: 'postDetails', params: { id: post.id } }"
              variant="secondary"
            >
              See Post
            </b-button>
          </b-card>
          <b-card-footer>
            <p>{{ post.id }} of 100</p>
            <p :id="post.id" @click="clicked" v-if="posts == showFavPost">
              <b-icon-heart-fill />
            </p>
            <p :id="post.id" @click="clicked" v-else><b-icon-heart /></p>
          </b-card-footer>
        </b-card>
      </b-row>
    </transition-group>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { BIconHeart } from "bootstrap-vue";

export default {
  components: {
    BIconHeart,
  },

  props: ["posts", "currentPage", "perPage"],

  computed: mapGetters(["showFavPost", "allImages", "allPosts"]),

  methods: {
    clicked(e) {
      var element = e.currentTarget;

      element.clicks = (element.clicks || 0) + 1;
      if (this.posts == this.showFavPost) {
        if (element.clicks % 2 == 1) {
          e.currentTarget.innerHTML = `<svg data-v-3d932c3a=""
         viewBox="0 0 16 16" width="1em" height="1em"
         focusable="false" role="img" aria-label="heart"
         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
         class="bi-heart b-icon bi"><g data-v-3d932c3a="">
         <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4
         3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834
         3.989 6.286 6.357 3.452-2.368 5.365-4.542
         6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878
         10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04
         7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0
         1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
         </g></svg>`;

          this.$store.dispatch("removeFromFav", {
            id: element.id - 1,
            currentPage: this.currentPage,
            perPage: this.perPage,
          });
        }
        return;
      }

      if (element.clicks % 2 == 1) {
        e.currentTarget.innerHTML = `<svg data-v-3d932c3a=""
          viewBox="0 0 16 16" width="1em" height="1em"
          focusable="false" role="img" aria-label="heart fill"
          xmlns="http://www.w3.org/2000/svg" fill="currentColor"
          class="bi-heart-fill b-icon bi"><g data-v-3d932c3a="">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248
          23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z">
          </path></g></svg>`;

        this.$store.dispatch("favId", {
          id: element.id - 1,
        });
      } else {
        e.currentTarget.innerHTML = `<svg data-v-3d932c3a=""
         viewBox="0 0 16 16" width="1em" height="1em"
         focusable="false" role="img" aria-label="heart"
         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
         class="bi-heart b-icon bi"><g data-v-3d932c3a="">
         <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4
         3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834
         3.989 6.286 6.357 3.452-2.368 5.365-4.542
         6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878
         10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04
         7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0
         1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
         </g></svg>`;

        this.$store.dispatch("removeFromFav", {
          id: element.id - 1,
          currentPage: this.currentPage,
        });
      }
    },
  },

  data() {
    return {
      click: false,
    };
  },
};
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
      border: 1px solid rgba(0, 0, 0, 0.125);
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
          .bi-heart,
          .bi-heart-fill {
            cursor: pointer;
          }
        }
      }
    }
    .fade-leave-active,
    .fade-enter-active {
      transition: opacity 0.5s;
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
  }
}
</style>
