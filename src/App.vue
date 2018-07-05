<template>
  <div id="app" v-on:mousemove="onDocumentMouseMove">
    <canvas ref="canvas" id="cube"></canvas>
    <TheHeader/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
    import TheHeader from '@/components/TheHeader.vue'; // @ is an alias to /src
    import TheFooter from '@/components/TheFooter.vue'; // @ is an alias to /src
    import * as THREE from 'three'
    export default {
        components: {
            TheHeader,
            TheFooter,
        },
        mounted() {
            this.mouseX = 0, this.mouseY = 0;
            this.initTHREE();
        },
        methods: {
            initTHREE() {
                var scene = new THREE.Scene();
                scene.background = new THREE.Color( 0xffffff );

                var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
                camera.position.y = 3;

                var renderer = new THREE.WebGLRenderer({
                    canvas: this.$refs.canvas
                });

                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setSize( window.innerWidth, window.innerHeight );

                var geometry = new THREE.BoxBufferGeometry( 30, 15, 15 );
                var edges = new THREE.EdgesGeometry( geometry );
                var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
                scene.add( line );

                camera.position.z = 4;

                var animate = function () {
                    requestAnimationFrame( animate );
                    camera.position.x += ( this.mouseX - camera.position.x ) * 0.05;
                    camera.position.y += ( - this.mouseY - camera.position.y ) * 0.05;
                    camera.lookAt( scene.position );
                    renderer.render(scene, camera);
                }.bind(this);

                animate();
            },
            onDocumentMouseMove( event ) {
                var windowHalfX = window.innerWidth / 2;
                var windowHalfY = window.innerHeight / 2;
                this.mouseX = ( event.clientX - windowHalfX ) / 10000;
                this.mouseY = ( event.clientY - windowHalfY ) / 10000;
            }
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
    overflow-y: scroll;
  }
  #cube {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
  * {
    position: relative;
  }
  .box-shadow {
    box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
  }
</style>
