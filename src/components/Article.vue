<template>
    <div class="article">
        <p class="date">{{ date }}</p>
        <div v-html="html"></div>
    </div>
</template>

<script>
import showdown from 'showdown';
const apiURL = 'http://127.0.0.1:3000';

function loadFile(filePath) {
  let result = null;
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

let converter = new showdown.Converter();

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
      },
      date () {
         return `${(new Date(this.article.createdAt)).toDateString().slice(4, 15)}`;
     },
      md () {
          return loadFile(`${apiURL}/${this.article.content}`);
      },
      html () {
          return converter.makeHtml(this.md);
      }
  }
}
</script>

<style scoped>

</style>