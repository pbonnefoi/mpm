<template>
  <div class="masterpiece">
    <div class="container">
      <div class="row">
        <div class="col-md-12" v-for="masterpieceItem in masterpiece">
          <div class="card mb-12 box-shadow">
            <div class="card-body">
              <h2><span class="badge badge-light badge-pill">{{ masterpieceItem.title }}</span></h2>
              <p>{{ masterpieceItem.date }}</p>
              <div class="description" v-html="masterpieceItem.description"></div>
              <img :src="masterpieceItem.image" :alt="masterpieceItem.title" class="card-img-top">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import * as global from '@/global';
    export default {
        data() {
            return {
                masterpiece: '',
            }
        },
        mounted() {
            this.getMasterpiece();
        },
        methods: {
            getMasterpiece() {
                this.$http.get(global.apiBaseUrl + global.getMasterpieceSingleAPIUrl + this.$route.params.masterpieceID + global.getFormatUrl).then(response => {
                    this.masterpiece = response.body;
                }, response => {
                    console.log(response.body);
                });
            }
        },
    };
</script>
