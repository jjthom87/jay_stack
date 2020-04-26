<template lang="html">
  <form id="postForm" @submit.prevent="processForm">
    <label>Title</label>
    <br>
    <input type="text" v-model="articleTitle">
    <br>
    <label>Question</label>
    <br>
    <textarea type="text" v-model="articleBody"></textarea>
    <br>
    <input type="submit"/>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    form: {
      articleTitle: '',
      articleBody: ''
    }
  }),
  methods: {
    processForm () {
      axios.post(`http://localhost:3000/v1/api/article`, {
        articleTitle: this.articleTitle,
        articleBody: this.articleBody
      })
      .then(response => {})
      .catch(e => {
        console.log(e);
      })
    }
  }
}
</script>

<style lang="css">
</style>
