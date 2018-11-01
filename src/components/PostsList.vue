<template>
    <div>
        <Post v-for="article in articles" :key="article.id" :article="article" :apiURL="apiURL"></Post>
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
}
</script>

<style scoped>
div {
    margin: 0;
    padding: 0;
}
</style>