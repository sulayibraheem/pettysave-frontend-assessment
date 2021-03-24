import axios from "axios";

const state = {
  allPosts : [],
  allImages: [],
  rows: ''
}

const getters = {
  allPosts: (state) => state.allPosts,
  allImages: (state) => state.allImages,
  rows: (state) => state.allPosts.length

}

const actions = {
  async getPosts({ commit }) {
    const apiPosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    commit('setAllPosts', apiPosts.data)
  },
  async getImages({ commit }) {
    const apiImages = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
    console.log(apiImages.data);
    commit('setAllImages', apiImages.data)
  }
}

const mutations = {
  setAllPosts: (state, allPosts) => state.allPosts = allPosts,
  setAllImages: (state, allImages) => state.allImages = allImages
}

export default {
  state,
  getters,
  actions,
  mutations
}

