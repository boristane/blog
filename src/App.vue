<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <Post v-for="article in articles" :key="article.id" :article="article"></Post>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Post from './components/Post.vue';

export default {
  name: 'app',
  data () {
    return {
      articles: '',
    }
  },
  components: {
    Header,
    Footer,
    Post,
  },
  created () {
    const apiURL = 'http://127.0.0.1:3000';
    fetch(`${apiURL}/articles`)
        .then(data => data.json())
        .then((data) => {
            this.articles = data.articles;
        });
  }
};
</script>

<style>
#app {
  color: #444;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.container {
  max-width: 600px;
  margin: 20px auto;
  position: relative;
  padding: 0 20px;
  text-align: left;
}
</style>
