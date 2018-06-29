<template>
  <header>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">{{ sitename }}</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link to="/" class="p-2 text-dark">Home</router-link> |
        <router-link to="/about" class="p-2 text-dark">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
    export default {
        data() {
            return {
                sitename: 'MPM',
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
