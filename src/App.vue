<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
    import TheHeader from '@/components/TheHeader.vue'; // @ is an alias to /src
    import TheFooter from '@/components/TheFooter.vue'; // @ is an alias to /src
    export default {
        components: {
            TheHeader,
            TheFooter,
        },
    };
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  overflow: scroll;
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>
