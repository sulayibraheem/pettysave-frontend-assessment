import axios from "axios";

const state = {
  allPosts: [],
  displayPosts: [],
  allImages: [],
  rows: 0,
  allComments: [],
  storePost: [],
  storeImages: [],
  showSpinner: false,
  searching: false
}

const getters = {
  allPosts: (state) => state.allPosts,
  allImages: (state) => state.allImages,
  rows: (state) => state.rows,
  displayPosts: (state) => state.displayPosts,
  allComments: (state) => state.allComments,
  showSpinner: (state) => state.showSpinner,
  searching: (state) => state.searching

}

const actions = {
  //Fethc All Posts from the api
  async getPosts({ commit }) {
    commit('setShowSpinner', true)
    try {
        const apiPosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const firstDisplay = await apiPosts.data.slice(0,6)
        commit('setStorePosts', apiPosts.data)
        commit('setAllPosts', apiPosts.data)
        commit('setRows', apiPosts.data.length)
        commit('setDisplayPosts', firstDisplay)
    } catch(e){
        console.error(e)
      } finally {
        commit('setShowSpinner', false)
        }
  },
  //Fetch All Images from the api. Fetched from two ids to get 100 images
  async getImages({ commit }) {
    try {
        const apiImages = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
        const response = await apiImages.data;
        const moreImages = await axios.get('https://jsonplaceholder.typicode.com/albums/2/photos');
        const res = await moreImages.data;
        commit('setAllImages', [...response, ...res, ...res]);
        commit('setStoreImages', [...response, ...res, ...res]);
    } catch(e){
        console.error(e)
      } finally {
        commit('setShowSpinner', false)
        }
  },
  //Fetch all comments from the api
  async getComments({ commit }) {
    try {
        const apiComments = await axios.get('https://jsonplaceholder.typicode.com/posts/2/comments');
        const response = await apiComments.data;
        commit('setComments', response)
    } catch(e){
        console.error(e)
      } finally {
          commit('setShowSpinner', false)
       }
  },
  //Function that controls the pagination
  async paginate({commit, state}, {currentPage, perPage}){
    const start = (currentPage - 1) * perPage
    const display = state.allPosts.slice(start, start+9)
    commit('setDisplayPosts', display)
  },
  updatePagination({commit, dispatch}, {updatePage,currentPage,perPage}){
    commit("setAllPosts", updatePage);
    commit("setRows", updatePage.length);
    dispatch('paginate',{ currentPage, perPage });
  },
  async search({ commit, dispatch }, {text}){
    commit('setShowSpinner', true)
    commit('setAllPosts', state.storePost)
    commit('setAllImages', state.storeImages)
    const updatePage = state.allPosts.filter(val => val.title.toLowerCase().includes(text.toLowerCase()));
    if(updatePage.length==0){
      commit('setSearching', true)
      dispatch("updatePagination",{updatePage, currentPage: 1, perPage: 9});
    commit('setShowSpinner', false)
    return;
    }
    commit('setSearching', false)
    dispatch("updatePagination",{updatePage, currentPage: 1, perPage: 9});
    commit('setShowSpinner', false)
  },
  noResult({commit,dispatch}){
    commit('setSearching', false)
    const updatePage = state.storePost
    commit('setAllPosts', state.storePost)
    commit('setAllImages', state.storeImages)
    dispatch("updatePagination",{updatePage, currentPage: 1, perPage: 9});
    commit('setShowSpinner', false)
  }
}

const mutations = {
  setAllPosts: (state, allPosts) => state.allPosts = allPosts,
  setAllImages: (state, allImages) => state.allImages = allImages,
  setRows: (state, rows) => state.rows = rows,
  setDisplayPosts: (state, displayPosts) => state.displayPosts = displayPosts,
  setComments: (state, allComments) => state.allComments = allComments,
  setShowSpinner: (state, showSpinner) => state.showSpinner = showSpinner,
  setSearching: (state, searching) => state.searching = searching,
  setStorePosts: (state, posts) => state.storePost = posts,
  setStoreImages: (state, images) => state.storeImages = images
}

export default {
  state,
  getters,
  actions,
  mutations
}

