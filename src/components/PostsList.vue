<template>
    <div>
        <Post v-for="article in articlesToDisplay" :key="article.id" :article="article" :apiURL="apiURL"></Post>
    </div>
</template>

<script>
import Post from './Post.vue';

export default {
  name: 'Article',
  components: {
    Post,
  },
  props: [
      'articles',
      'apiURL',
  ],
  beforeCreate () {
      document.title = 'Boris Tane';
  },
  computed: {
      tag () {
          return this.$route.params.tag;
      },
      articlesToDisplay () {
          if (!this.tag) {
              return this.articles;
          }
          if (!this.articles) return [];
          return this.articles.filter(article => article.tags.indexOf(this.tag) > -1);
      }
  },
}
</script>

<style scoped>
div {
    margin: 0;
    padding: 0;
}
</style>