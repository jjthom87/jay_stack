<template>
  <div class="d-flex justify-content-center">
    <form class="md-layout" id="postForm" @submit.prevent="processForm">
      <md-card class="md-layout-item md-size-100 md-small-size-100" style="background: khaki;">
        <md-card-header>
          <div class="md-title text-center" style="font-size: 35px;">Post Question</div>
        </md-card-header>
        <md-card-content>
          <div>
            <div class="md-layout-item md-small-size-100 d-flex justify-content-center">
              <input id="title-input" type="text" v-model="question" placeholder="What is your question?"/>
            </div>
            <!-- <div class="md-layout-item md-small-size-100 d-flex justify-content-center">
              <textarea id="post-input" type="text" v-model="articleBody" placeholder="Type Post Here"></textarea>
            </div> -->
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
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    form: {
      question: ''
    }
  }),
  methods: {
    processForm (e) {
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
