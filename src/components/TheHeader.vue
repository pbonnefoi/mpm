<template>
  <header class="mdl-layout__header mdl-layout__header--transparent">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">{{ sitename }}</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <router-link to="/" class="mdl-navigation__link">Home</router-link> |
        <router-link to="/about" class="mdl-navigation__link">About</router-link>
      </nav>
      <form action="#">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
          <label class="mdl-button mdl-js-button mdl-button--icon" for="searchFilter">
            <i class="material-icons">Search</i>
          </label>
          <div class="mdl-textfield__expandable-holder">
            <input v-model="filter" type="text" class="mdl-textfield__input" id="searchFilter" placeholder="Search">
            <label for="searchFilter" class="mdl-textfield__label">Search</label>
          </div>
        </div>
      </form>
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
.mdl-layout__header--transparent {
  color: #2c3e50;
  .mdl-layout__header-row .mdl-navigation__link {
    color: #2c3e50;
  }
}
</style>
