<template>
  <div>
    <footer class="bg-light py-5">
      <div class="container">
        <p class="d-flex justify-content-center">
          <router-link id="home-link" to="/"><md-icon>home</md-icon></router-link>
          <router-link to="/post">Post Question</router-link>
        </p>
        <div class="small text-muted text-center">Copyright &copy; 2020 - Q&A</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="css">

  footer {
    bottom: 0;
    width: 100%;
    background: gold;
  }

  #home-link {
    margin-right: 15px;
  }

</style>
