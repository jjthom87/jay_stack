import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import App from './App.vue';

import Home from './components/home/Home.vue';
import Post from './components/post/Post.vue';
import Question from './components/question/Question.vue';
import PageNotFound from './components/error/PageNotFound.vue';

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/post', component: Post },
    { path: '/question/:id', component: Question, props: true },
    { path: "*", component: PageNotFound }
  ]
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
