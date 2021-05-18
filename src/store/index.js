import Vue from "vue";
import Vuex from "vuex";
import JsonPlaceholder from "./modules/JsonPlaceholder.js";
import FavPost from "./modules/FavPost.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    JsonPlaceholder,
    FavPost,
  },
});
