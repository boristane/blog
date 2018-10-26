<template>
    <div class="article">
        <div>Article {{ article }} {{ articleTitle }} </div>
    </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
      return {
          articleTitle: this.$route.params.article.split('_').join(' '),
      };
  },
  props: [
      'articles',
  ],
  computed: {
      article () {
          if(this.articles) return this.articles.find(article => article.title.toLowerCase() === this.articleTitle);
          else return {};
      }
  }
}
</script>

<style scoped>
.article {
    color: red;
}
</style>