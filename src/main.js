import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

import Home from './components/home/Home.vue';
import Post from './components/post/Post.vue';
import Articles from './components/articles/Article.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/post', component: Post },
    { path: '/articles', component: Articles }
  ]
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
