<template>
  <div>
    <Header></Header>
    <p id="question-p" class="text-center"><span id="question-span">Question: {{ this.question.question }}</span></p>
    <div class="md-layout-item md-small-size-100 d-flex justify-content-center">
      <form class="md-layout" id="postForm" @submit.prevent="processResponse">
        <md-card class="md-layout-item md-size-100 md-small-size-100" style="background: khaki;">
          <md-card-content>
            <div>
              <div class="md-layout-item md-small-size-100 d-flex justify-content-center">
                <input id="name-input" type="text" v-model="responderName" placeholder="Name (Optional)" />
              </div>
              <div class="md-layout-item md-small-size-100 d-flex justify-content-center">
                <textarea id="response-ta" type="text" v-model="response" placeholder="Respond to Question"></textarea>
              </div>
            </div>
          </md-card-content>
          <md-card-actions>
            <md-button type="submit" class="md-primary">
              <span id="submit-text">Submit Response</span>
            </md-button>
          </md-card-actions>
        </md-card>
      </form>
    </div>
    <ul>
      <li class="d-flex justify-content-center" v-for="response in responses" style="margin: -25px;">
        <md-card-content class="response-cards">
          <md-card class="md-size-100 md-small-size-100" style="background: salmon;">
            <p class="response-p"><strong>{{response.respondername}}</strong>: {{ response.response }}</p>
          </md-card>
        </md-card-content>
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
      question: {},
      responses: [],
      form: {
        response: '',
        responderName: ''
      }
    }
  },
  mounted: function () {
    axios.get(process.env.VUE_APP_URL + "/v1/api/question/" + this.$route.params.id)
    .then(response => {
      this.question = response.data.question;
    })
    .catch(e => {
      console.log(e);
    })

    axios.get(process.env.VUE_APP_URL + "/v1/api/responses/" + this.$route.params.id)
    .then(response => {
      this.responses = response.data.responses;
    })
    .catch(e => {
      console.log(e);
    })
  },
  methods: {
    processResponse (e) {
      e.preventDefault();
      axios.post(process.env.VUE_APP_URL + `/v1/api/response`, {
        response: this.response,
        question_id: this.question.id,
        responderName: this.responderName
      })
      .then(response => {
        if(response.data.statusCode == 200){
          alert("Response Added Successfully");
          this.responses.push(response.data.body)

          this.response = "";
          this.responderName = "";
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

  #question-p {
    font-size: 30px;
  }

  #name-input {
    width: 250px;
  }

  #response-ta {
    width: 450px;
    height: 125px;
    font-size: 20px;
  }

  .response-cards {
    width: 500px;
    padding: 0px;
    line-height: 36px;
  }

  .response-p {
    margin: 10px;
  }

</style>
