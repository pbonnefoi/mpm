<template>
  <div class="masterpiece">
    <div class="container">
      <div class="row">
        <div class="col-md-12" v-for="masterpieceItem in masterpiece">
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
