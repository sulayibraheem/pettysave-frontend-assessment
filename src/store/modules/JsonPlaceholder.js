import axios from "axios";

const state = {
  allPosts: [],
  displayPosts: [],
  allImages: [],
  rows: 0,
  allComments: []
}

const getters = {
  allPosts: (state) => state.allPosts,
  allImages: (state) => state.allImages,
  rows: (state) => state.rows,
  displayPosts: (state) => state.displayPosts,
  allComments: (state) => state.allComments

}

const actions = {
  //Fethc All Posts from the api
  async getPosts({ commit }) {
    const apiPosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const firstDisplay = await apiPosts.data.slice(0,6)
    commit('setAllPosts', apiPosts.data)
    commit('setRows', apiPosts.data.length)
    commit('setDisplayPosts', firstDisplay)
  },
  //Fetch All Images from the api. Fetched from two ids to get 100 images
  async getImages({ commit }) {
    const apiImages = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
    const response = await apiImages.data;
    const moreImages = await axios.get('https://jsonplaceholder.typicode.com/albums/2/photos');
    const res = await moreImages.data;
    commit('setAllImages', [...response, ...res]);
  },
  //Fetch all comments from the api
  async getComments({ commit }) {
    const apiComments = await axios.get('https://jsonplaceholder.typicode.com/posts/2/comments');
    const response = await apiComments.data;
    commit('setComments', response)
    console.log(response)
  },
  //Function that controls the pagination
  async paginate({commit, state}, {currentPage, perPage}){
    const start = (currentPage - 1) * perPage
    const display = state.allPosts.slice(start, start+6)
    commit('setDisplayPosts', display)
  }
}

const mutations = {
  setAllPosts: (state, allPosts) => state.allPosts = allPosts,
  setAllImages: (state, allImages) => state.allImages = allImages,
  setRows: (state, rows) => state.rows = rows,
  setDisplayPosts: (state, displayPosts) => state.displayPosts = displayPosts,
  setComments: (state, allComments) => state.allComments = allComments
}

export default {
  state,
  getters,
  actions,
  mutations
}

