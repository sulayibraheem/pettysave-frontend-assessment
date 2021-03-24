<template>
<<<<<<< HEAD
    <b-container class="home">
      <h3>Json Placeholder Posts<hr></h3>
=======
  <div class="home">
>>>>>>> 6495f8f5c0f789491ad9fd8ca6b142a60768df02
    <ol>
     <li v-for="response in allPosts" :key="response.id">
        {{response}}
       </li>
     </ol>
<<<<<<< HEAD
     <ul>
       <li v-for="response in allImages" :key="response.id">
         {{response}}
       </li>
     </ul>
    </b-container>
=======
   </div>
>>>>>>> 6495f8f5c0f789491ad9fd8ca6b142a60768df02
</template>

<script>
  import axios from 'axios';
export default {

  props: {
    msg: String
  },
  data () {
    return {
<<<<<<< HEAD
      allPosts: "",
      allImages: ""
    }
  },
  mounted: async function () {
      const apiPosts = 'https://jsonplaceholder.typicode.com/posts';
       await axios.get(apiPosts)
      .then(response => {
        this.allPosts = response.data;
        console.log(response.data)})
      
      const apiImages = 'https://jsonplaceholder.typicode.com/albums/1/photos';
       await axios.get(apiImages)
      .then(response => {
        this.allImages = response.data;
        console.log(response.data)})
=======
      allPosts: ""
    }
  },
  mounted: async function () {
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
       await axios.get(apiUrl)
      .then(response => {
        this.allPosts = response.data;
        console.log(response.data)})
>>>>>>> 6495f8f5c0f789491ad9fd8ca6b142a60768df02
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<<<<<<< HEAD
<style lang="scss" scoped>
.home {
h3 {
  margin: 40px 0 ;
  color: #032541;
  hr {
    width: 50px;
    margin-left: 0;
    border: 1px solid #808080;
    border-radius: 50%;;
  }
=======
<style scoped>
h3 {
  margin: 40px 0 0;
>>>>>>> 6495f8f5c0f789491ad9fd8ca6b142a60768df02
}
ul {
  /* list-style-type: none; */
  padding: 0;
}
li {
  /* display: inline-block;
  margin: 0 10px; */
}
a {
  color: #42b983;
}
<<<<<<< HEAD
}
=======
>>>>>>> 6495f8f5c0f789491ad9fd8ca6b142a60768df02
</style>
