<template>
    <div class="post">
        <router-link :to="url"><img v-bind:src="imgURL" v-bind:alt="article.title"></router-link>
        <div class="details">
            <router-link :to="url"><h1 class="title"> {{ article.title.toUpperCase() }} </h1></router-link>
            <p class="date">{{ date }}</p>
            <p class="tags">
                <router-link v-for="tag in article.tags" v-bind:to="`/${tag}`" class="tag" v-bind:key="tag">{{ `#${tag}` }}</router-link>
            </p>
            <p class="description">{{ article.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['article', 'apiURL'],
  computed: {
     imgURL () {
         return `${this.article.image}`;
     },
     date () {
         return `${(new Date(this.article.createdAt)).toDateString().slice(4, 15)}`;
     },
     url () {
         return `/article/${this.article.title.toLowerCase().split(' ').join('_')}`;
     }
  }
}
</script>

<style scoped>
.post a {
    font-size: 15px;
    text-decoration: none;
}

.post a:link {
    color: #444;
}

.post a:visited {
    color: #444;
}

.post a:active {
    color: #444;
}

.post a:hover {
    color: rgb(253, 101, 101);
}

.post {
    display: grid;
    grid-template-columns: 120px auto;
    border-bottom: 1px solid lightgray;
    padding: 30px 0;
    box-sizing: border-box;
}

.post .details {
    vertical-align: top;
    padding: 0 0 0 15px;
    max-width: 450px;
}

img {
    max-width: 120px;
}

.title {
    font-weight: normal;
    font-size: 28px;
    margin: 0;
    border-left: 5px solid rgba(253, 101, 101, 0);
    padding-left: 10px;
    transition: border 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.title:hover {
    color: #444;
    border-left: 5px solid rgb(253, 101, 101);
}

.date {
    display: inline-block;
    color: lightgray;
    font-size: 17px;
    margin: 0;
    padding-left: 15px;
}

.description {
    margin: 0;
    font-size: 15px;
    padding-top: 7px;
    padding-left: 15px;
}

.tags {
    margin: 0;
    font-size: 13px;
    text-align: right;
    display: inline-block;
    padding-left: 15px;
}

.tag {
    padding-left: 5px;
}

.pointer {
    cursor: pointer;
}
@media screen and (max-width: 420px) {
    .post {
        padding: 15px 0 5px 0;
        grid-template-columns: 80px auto;
    }
    
    .title {
        font-size: 20px;
        padding-left: 5px;
    }

    .date {
        font-size: 15px;
        padding-left: 10px;
    }

    .post a {
        font-size: 10px;
    }

    .description {
        display: none;
    }

    .tags {
        display: block;
        text-align: left;
    }

    img {
        max-width: 80px;
    }
}
</style>
