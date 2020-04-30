<template>
  <div class="d-flex align-content-center">
    <form class="md-layout" id="postForm" @submit.prevent="processForm">
      <md-card class="md-layout-item md-size-50 md-small-size-50">
        <md-card-header>
          <div class="md-title">Post Question</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-50">
              <label for="title">Title</label>
              <input type="text" v-model="articleTitle"/>
            </div>
            <div class="md-layout-item md-small-size-50">
              <label for="question">Question</label>
              <textarea type="text" v-model="articleBody"></textarea>
            </div>
          </div>
        </md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-primary">Create Post</md-button>
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
