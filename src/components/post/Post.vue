<template>
  <div>
    <Header></Header>
    <div class="d-flex justify-content-center">
      <form class="md-layout" id="postForm" @submit.prevent="processQuestion">
        <md-card class="md-layout-item md-size-100 md-small-size-100" style="background: khaki;">
          <md-card-header>
            <div class="md-title text-center" style="font-size: 35px;">Post Question</div>
          </md-card-header>
          <md-card-content>
            <div>
              <div class="md-layout-item md-small-size-100 d-flex justify-content-center">
                <input id="title-input" type="text" v-model="question" placeholder="What is your question?"/>
              </div>
            </div>
          </md-card-content>
          <md-card-actions>
            <md-button type="submit" class="md-primary">
              <span id="submit-text">Submit Question</span>
            </md-button>
          </md-card-actions>
        </md-card>
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios';

import Header from '../fixtures/Header.vue';
import Footer from '../fixtures/Footer.vue';

export default {
  data: () => ({
    form: {
      question: ''
    }
  }),
  methods: {
    processQuestion (e) {
      e.preventDefault();
      axios.post(`http://localhost:3000/v1/api/question`, {
        question: this.question
      })
      .then(response => {
        if(response.data.statusCode == 200){
          alert("Question Added Successfully");
          e.target.reset();
        }
      })
      .catch(e => {
        console.log(e);
      })
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="css">
  form {
    width: 1000px;
  }
  .md-layout-item {
    margin: 25px;
  }

  #title-input {
    width: 450px;
    height: 45px;
    font-size: 20px;
  }

  #post-input {
    width: 450px;
    height: 125px;
    font-size: 20px;
  }

  #submit-text {
    font-size: 20px;
  }
</style>
