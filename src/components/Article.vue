<template>
    <div class="article">
        <p class="date">{{ date }}</p>
        <img class="header-image" :src="imgURL" alt="img">
        <div v-html="html"></div>
        <div v-show="index > 0" class="navigation" id="newer">
            <router-link :to="{ name: 'article', params: { article: newer }}">
                &#8810; NEWER
            </router-link>
        </div>
        <div v-show="index < this.articles.length - 1" class="navigation" id="older">
            <router-link :to="{ name: 'article', params: { article: older }}">
                OLDER &#8811;
            </router-link>
        </div>
    </div>
</template>

<script>
import showdown from 'showdown';

function loadFile(filePath) {
  let result = null;
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
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
  mounted () {
    document.title = this.articleTitle;
  },
  computed: {
      article () {
        if (!this.articles) return {};
        return this.articles.find(article => article.title.toLowerCase() === this.articleTitle);
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
      },
      newer () {
        if (this.index < 1) {
          return '';
        }
        return this.articles[this.index - 1].title.split(' ').join('_').toLowerCase();
      },
      older () {
        if (this.index >= this.articles.length - 1) {
          return '';
        }
        return this.articles[this.index + 1].title.split(' ').join('_').toLowerCase();
      }
  },
  watch: {
        $route () {
            this.articleTitle = this.$route.params.article.split('_').join(' ');
        },
        article () {
            if (!this.article) {
                this.$router.push({ name: '404'});
            }
            document.title = this.articleTitle;
        }
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
    position: fixed;
    bottom: 30px;
    cursor: pointer;
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