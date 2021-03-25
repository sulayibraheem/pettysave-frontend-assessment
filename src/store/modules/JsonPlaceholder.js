import axios from "axios";

const state = {
  allPosts: [],
  displayPosts: [],
  allImages: [],
  rows: 0
}

const getters = {
  allPosts: (state) => state.allPosts,
  allImages: (state) => state.allImages,
  rows: (state) => state.rows,
  displayPosts: (state) => state.displayPosts

}

const actions = {
  async getPosts({ commit }) {
    const apiPosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const firstDisplay = await apiPosts.data.slice(0,6)
    commit('setAllPosts', apiPosts.data)
    commit('setRows', apiPosts.data.length)
    commit('setDisplayPosts', firstDisplay)
    console.log(this.displayPosts)
  },
  async getImages({ commit }) {
    const apiImages = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
    commit('setAllImages', apiImages.data)
  },
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
  setDisplayPosts: (state, displayPosts) => state.displayPosts = displayPosts
}

export default {
  state,
  getters,
  actions,
  mutations
}

