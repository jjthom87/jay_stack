<template>
  <div id="app">
    <Post />
  </div>
</template>

<script>
import Post from './components/post/Post.vue'

export default {
  name: 'app',
  components: {
    Post
  },
  data () {
    return {}
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
