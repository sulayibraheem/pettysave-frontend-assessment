import axios from "axios";

const state = {
  allPosts: [],
  displayJobs: [],
  allImages: [],
  rows: 0
}

const getters = {
  allPosts: (state) => state.allPosts,
  allImages: (state) => state.allImages,
  rows: (state) => state.rows,
  displayJobs: (state) => state.displayJobs

}

const actions = {
  async getPosts({ commit }) {
    const apiPosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    commit('setAllPosts', apiPosts.data)
    commit('setRows', apiPosts.data.length)
  },
  async getImages({ commit }) {
    const apiImages = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
    commit('setAllImages', apiImages.data)
  }
}

const mutations = {
  setAllPosts: (state, allPosts) => state.allPosts = allPosts,
  setAllImages: (state, allImages) => state.allImages = allImages,
  setRows: (state, rows) => state.rows = rows,
  setDisplayJobs: (state, displayJobs) => state.displayJobs = displayJobs
}

export default {
  state,
  getters,
  actions,
  mutations
}

