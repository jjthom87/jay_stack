<template>
  <div style="background: gold;">
    <div class="d-flex flex-row-reverse">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item" style="margin-right: 15px;">
               <router-link to="/"><md-icon>home</md-icon></router-link>
            </li>
            <li class="nav-item">
               <router-link to="/post">Post Question</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <header>
      <div class="header jumbotron text-center" style="background: gold">
        <h1>Q&A</h1>
      </div>
    </header>
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

  .navbar {
    background: gold;
  }

  .header {
    background: gold;
    height: 135px;
  }

</style>
