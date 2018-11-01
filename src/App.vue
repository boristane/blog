<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view :articles="articles" :apiURL="apiURL"/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
    data () {
    return {
      articles: '',
      apiURL: 'https://boristane-blog-api.herokuapp.com',
    }
  },
  components: {
    Header,
    Footer,
  },
  created () {
    fetch(`${this.apiURL}/articles`)
        .then(data => data.json())
        .then((data) => {
            this.articles = data.articles.sort((a, b) => {
              const dateA = new Date(a.createdAt);
              const dateB = new Date(b.createdAt);
              return dateB.getTime() - dateA.getTime();
            });
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
  padding: 0 20px;
  text-align: left;
}

@media screen and (max-width: 420px){
  #app {
    margin-top: 10px;
  }
}
</style>
