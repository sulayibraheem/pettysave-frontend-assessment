<template>
    <b-container class="home">
      <h3>Json Placeholder Posts<hr></h3>
    <ol>
     <li v-for="response in allPosts" :key="response.id">
        {{response}}
       </li>
     </ol>
     <ul>
       <li v-for="response in allImages" :key="response.id">
         {{response}}
       </li>
     </ul>
    </b-container>
</template>

<script>
  import axios from 'axios';
export default {

  props: {
    msg: String
  },
  data () {
    return {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}
ul {
  /* list-style-type: none; */
  padding: 0;
}
// li {
//   /* display: inline-block;
//   margin: 0 10px; */
// }
a {
  color: #42b983;
}
}
</style>
