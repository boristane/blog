<template>
    <div class="article">
        <p class="date">{{ date }}</p>
        <img class="header-image" :src="imgURL" alt="img">
        <div v-html="html"></div>
        <div v-show="index > 0" class="navigation" id="newer" @click="newer()">&#8810; NEWER</div>
        <div v-show="index < this.articles.length - 1" class="navigation" id="older" @click="older()">OLDER &#8811;</div>
    </div>
</template>

<script>
import showdown from 'showdown';

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
      'apiURL',
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
          return loadFile(`${this.article.content}`);
      },
      html () {
          return converter.makeHtml(this.md);
      },
      imgURL () {
          return `${this.article.image}`;
      },
      index () {
          return this.articles.indexOf(this.article);
      }
  },
  created () {
      document.title = this.articleTitle;
  },
  methods: {
    newer () {
        if(this.articles) {
            if (this.index >= 1) {
                const articleTo = this.articles[this.index - 1];
                this.$router.push(`/article/${articleTo.title.toLowerCase().split(' ').join('_')}`);
                location.reload();
            }
        }
    },
    older () {
        if(this.articles) {
            if (this.index < this.articles.length - 1) {
                const articleTo = this.articles[this.index + 1];
                this.$router.push(`/article/${articleTo.title.toLowerCase().split(' ').join('_')}`);
                location.reload();
            }
        }
    },
  }
}
</script>

<style scoped>
.header-image {
    object-fit: cover;
    width: 100%;
    height: 400px;
}

.article .navigation {
    border-bottom: 2px solid transparent;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    width: 75px;
    position: fixed;
    bottom: 30px;
    cursor: pointer;
}

.article .navigation:hover {
    border-bottom-color: rgb(253, 101, 101);
    color: rgb(253, 101, 101);
}

#newer {
    left: 30px;
}

#older {
    right: 30px;
}

@media screen and (max-width: 850px) {
    .article .navigation {
        display: none;
    }
}
</style>