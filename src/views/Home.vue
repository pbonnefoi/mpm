<template>
  <div class="home">
    <div class="mdl-layout__content">      
      <transition-group name="fade-drop" tag="div" class="mdl-grid">
        <div class="mdl-cell mdl-cell--4-col" v-for="masterpiece in filteredMasterpieces" v-bind:key="masterpiece.nid" v-if="!loading" >
          <div class="mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text"><router-link :to="{ name: 'masterpiece', params: { masterpieceID: masterpiece.nid }}" class="text-dark small">{{ masterpiece.title }}</router-link></h2>
            </div>
            <img :src="masterpiece.image" :alt="masterpiece.title" class="card-img-top">
          </div>
        </div>
      </transition-group>
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--6-col">
          <a v-if="page > 0" v-on:click="onClickPrevious" href="#" class="p-2 text-dark router-link-exact-active router-link-active">< Previous</a>
        </div>
        <div class="mdl-cell mdl-cell--6-col">
          <a v-on:click="onClickNext" href="#" class="p-2 text-dark router-link-exact-active router-link-active">Next ></a>
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
                page: 0,
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
            },
            onClickPrevious() {
                this.loading = true;
                this.page--;
                this.$http.get(global.apiBaseUrl + global.getMasterpiecesAPIUrl + global.getFormatUrl + '&page=' + this.page).then(response => {
                    this.loading = false;
                    this.masterpieces = response.body;
                }, response => {
                    console.log(response.body);
                });
            },
            onClickNext() {
                this.loading = true;
                console.log(this.page);
                this.page++;
                console.log(this.page);
                this.$http.get(global.apiBaseUrl + global.getMasterpiecesAPIUrl + global.getFormatUrl + '&page=' + this.page).then(response => {
                    this.loading = false;
                    this.masterpieces = response.body;
                }, response => {
                    console.log(response.body);
                });
            }
        },
    };
</script>

<style lang="scss">
  .fade-drop-item {
    transition: all 1s;
  }
  .fade-drop-enter, .fade-drop-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .form-control-mpm {
    border-radius: 0 !important;
    border: none !important;
  }
</style>