import Vue from 'vue'
import VueRouter from 'vue-router';
import Article from './components/Article.vue';
import PostsList from './components/PostsList.vue';
import notFound from './components/Page404.vue';
/* import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Post from './components/Post.vue'; */

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/article/:article',
            name: 'article',
            component: Article,
        },
        {
            path: '/',
            name: 'home',
            component: PostsList,
        },
        {
            path: '*',
            name: '404',
            component: notFound,
        }
    ]
});
