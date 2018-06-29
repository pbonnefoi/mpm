<template>
  <div class="home">
    <div class="container" v-if="loading">
      <transition name="loading">
        <p class="badge badge-secondary badge-pill loading-class">Loading...</p>
      </transition>
    </div>
    <div class="container" v-if="!loading">
      <form class="form-group row">
        <div class="col-md-8">
          <label for="searchFilter" class="sr-only">Search</label>
          <input v-model="filter" type="text" class="form-control form-control-lg" id="searchFilter" placeholder="Search">
        </div>
      </form>
      <div class="row">
        <div class="col-md-4" v-for="masterpiece in filteredMasterpieces">
          <div class="card mb-4 box-shadow">
            <div class="card-body" v-b-popover.hover="'I am popover content!'" data-html="true" :title="masterpiece.date">
              <h2><router-link :to="{ name: 'masterpiece', params: { masterpieceID: masterpiece.nid }}" class="badge badge-light badge-pill">{{ masterpiece.title }}</router-link></h2>
              <img :src="masterpiece.image" :alt="masterpiece.title" class="card-img-top">
            </div>
          </div>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
    import * as global from '@/global';
    export default {
        data() {
            return {
                masterpieces: [],
                filter: '',
                gridColumns: ['title', 'image'],
                loading: false,
            }
        },
        mounted() {
            this.getMainMasterpiecesList();
        },
        computed: {
            filteredMasterpieces() {
                var masterpieces = this.masterpieces.filter((masterpiece) => {
                    return masterpiece.title.toLowerCase().includes(this.filter.toLowerCase());
                });
                return masterpieces;
            }
        },
        methods: {
            getMainMasterpiecesList() {
                this.loading = true;
                this.$http.get(global.apiBaseUrl + global.getMasterpiecesAPIUrl + global.getFormatUrl).then(response => {
                    this.loading = false;
                    this.masterpieces = response.body;
                }, response => {
                    console.log(response.body);
                });
                $('[data-toggle="tooltip"]').tooltip()
            },
        },
    };
</script>

<style lang="scss">
  .loading-class {
    background-color: forestgreen;
    font-size: 40px;
  }
  .loading-enter-active, .loading-leave-active {
    transition: opacity .5s;
  }
  .loading-enter, .loading-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>