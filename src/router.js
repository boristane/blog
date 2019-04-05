import Vue from 'vue'
import VueRouter from 'vue-router';
import Article from './components/Article.vue';
import PostsList from './components/PostsList.vue';
import notFound from './components/Page404.vue';

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
            path: '/tag/:tag',
            name: 'tag',
            component: PostsList,
        },
        {
            path: '*',
            name: '404',
            component: notFound,
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
    }
});
