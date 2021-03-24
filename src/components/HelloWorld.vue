<template>
   <div class="app">
     <ol v-for="response in allPosts" :key="response.id">
       <li class="list">
        {{response}}
       </li>
     </ol>
   </div>
</template>

<script>
  import axios from 'axios';
export default {

  props: {
    msg: String
  },
  data () {
    return {
      allPosts: ""
    }
  },
  mounted: async function () {
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts/2';
       await axios.get(apiUrl)
      .then(response => {
        this.allPosts = response.data;
        console.log(response.data)})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
