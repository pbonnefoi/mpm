<template>
  <div class="masterpiece">
    <div class="container">
      <div class="row">
        <div class="col-md-12" v-for="masterpieceItem in masterpiece" v-bind:key="masterpieceItem.nid">
          <div class="card-body bg-white">
            <h2><span class="text-dark small">{{ masterpieceItem.title }}</span></h2>
            <p>{{ masterpieceItem.date }}</p>
            <div class="description" v-html="masterpieceItem.description"></div>
          </div>
          <div class="mb-4 box-shadow bg-white">
            <div class="card-body">
              <img :src="masterpieceItem.image" :alt="masterpieceItem.title" class="card-img-top">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        computed: mapState({
            masterpiece: state => state.all
        }),
        mounted () {
            console.log('mounted');
            this.$store.dispatch('getSingleMasterpiece', this.$route.params.masterpieceID)
        },
    };
</script>
