<template>
  <div>
    <div class="md-layout-item md-small-size-100 d-flex justify-content-center">
      <input id="search-bar" type="text" v-model="searchQuestions" placeholder="Title"/>
    </div>
    <ul>
      <li v-for="question in questions">
        {{ question.question }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      questions: []
    }
  },
  mounted: function () {
    axios.get(`http://localhost:3000/v1/api/questions`)
    .then(response => {
      console.log(response.data.questions)
      this.questions = response.data.questions;
    })
    .catch(e => {
      console.log(e);
    })
  }
}
</script>

<style lang="css">

  #search-bar {
    width: 450px;
    height: 45px;
    font-size: 20px;
  }

</style>
