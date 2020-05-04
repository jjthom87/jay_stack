<template>
  <div>
    <Header></Header>
    <div class="md-layout-item md-small-size-100 d-flex justify-content-center">
      <input v-on:keyup="filterThis($event)" id="search-bar" type="text" placeholder="Search Questions"/>
    </div>
    <ul>
      <li class="link-list-item d-flex justify-content-center" v-for="question in questions">
        <router-link :to="{path: '/question/' + question.id}">{{ question.question }}</router-link>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../fixtures/Header.vue';
import Footer from '../fixtures/Footer.vue';

export default {
  data() {
    return {
      questions: [],
      allQuestions: []
    }
  },
  mounted: function () {
    axios.get(process.env.VUE_APP_URL + `/v1/api/questions`)
    .then(response => {
      this.questions = response.data.questions;
      this.allQuestions = response.data.questions;
    })
    .catch(e => {
      console.log(e);
    })
  },
  methods: {
    filterThis(e){
      if(e.target.value == ""){
        this.questions = this.allQuestions;
      } else if(e.key == "Backspace"){
        this.questions = this.allQuestions.filter((q) => q.question.indexOf(e.target.value) > -1);
      } else {
        this.questions = this.allQuestions.filter((q) => q.question.indexOf(e.target.value) > -1);
      }
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="css">

  #search-bar {
    width: 450px;
    height: 45px;
    font-size: 20px;
  }

  .link-list-item {
    margin: 15px;
    font-size: 25px;
  }

</style>
