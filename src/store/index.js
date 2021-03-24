import Vue from "vue";
import Vuex from "vuex";
import JsonPlaceholder from "./modules/JsonPlaceholder.js";

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    JsonPlaceholder
  }
})