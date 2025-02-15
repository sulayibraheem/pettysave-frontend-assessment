const state = {
  fav: [],
  favPost: [],
  favRows: 0,
  showFavPost: [],
};

const getters = {
  fav: (state) => state.fav,
  favPost: (state) => state.favPost,
  favRows: (state) => state.favRows,
  showFavPost: (state) => state.showFavPost,
};

const actions = {
  favId({ commit, dispatch }, { id }) {
    if (state.fav.includes(id)) return;
    commit("setFav", id);
    window.localStorage.setItem("storeId", state.fav);
    dispatch("addToFav");
  },

  addToFav({ commit, rootState }) {
    const fav = state.fav.map((id) => rootState.JsonPlaceholder.storePost[id]);
    const firstDisplay = fav.slice(0, 9);
    commit("setShowFavPost", firstDisplay);
    commit("setFavPost", fav);
    commit("setFavRows", fav.length);
  },

  removeFromFav({ commit, rootState }, { id, currentPage, perPage }) {
    const fav = state.fav.filter((val) => val != id);
    const updatedPost = fav.map((i) => rootState.JsonPlaceholder.storePost[i]);
    const display = updatedPost.slice(
      9 * (currentPage - 1),
      perPage * currentPage
    );
    commit("setShowFavPost", display);
    commit("removeFav", fav);
    window.localStorage.setItem("storeId", fav);
    commit("setFavRows", fav.length);
    commit("setFavPost", updatedPost);
  },

  storedPost({ commit }) {
    const a = window.localStorage.getItem("storeId");
    if (a !== null && a !== undefined) {
      const b = a.split(",").map((id) => Number(id));
      for (const arr of b) {
        if (state.fav.indexOf(arr) === -1) commit("setFav", arr);
      }
    }
  },
};

const mutations = {
  setFav: (state, fav) => (state.fav = [...state.fav, fav]),
  removeFav: (state, fav) => (state.fav = fav),
  setFavPost: (state, newVal) => (state.favPost = newVal),
  setShowFavPost: (state, newVal) => (state.showFavPost = newVal),
  setFavRows: (state, val) => (state.favRows = val),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
