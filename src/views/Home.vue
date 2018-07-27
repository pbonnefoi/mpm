<template>
  <div class="home">
    <div class="mdl-layout__content">
      <transition-group name="fade-drop" tag="div" class="mdl-grid">
        <div class="mdl-cell mdl-cell--4-col" v-for="masterpieceItem in masterpiece" v-bind:key="masterpieceItem.nid" v-if="!loading" >
          <div class="mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text"><router-link :to="{ name: 'masterpiece', params: { masterpieceID: masterpieceItem.nid }}" class="text-dark small">{{ masterpieceItem.title }}</router-link></h2>
            </div>
            <img :src="masterpieceItem.image" :alt="masterpieceItem.title" class="card-img-top">
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
    import { mapState, mapActions } from 'vuex'
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
            this.$store.dispatch('getAllMasterpieces', this.$route.params.masterpieceID)
        },
        computed: mapState({
                masterpiece: state => state.all
        }),
        methods: {
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