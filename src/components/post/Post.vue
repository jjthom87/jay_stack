<template lang="html">
  <form id="postForm" @submit.prevent="processForm">
    <label>Title</label>
    <br></br>
    <input type="text" v-model="postTitle">
    <br></br>
    <label>Question</label>
    <br></br>
    <textarea type="text" v-model="postBody"></textarea>
    <br></br>
    <input type="submit"/>
  </form>
</template>

<script>
export default {
  data: () => ({
    form: {
      postTitle: '',
      postBody: ''
    }
  }),
  methods: {
    processForm () {
      console.log(this.postTitle);
      console.log(this.postBody);
    }
  }
}
</script>

<style lang="css">
</style>
