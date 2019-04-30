<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
export default {
  name: 'App'
}
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  min-height: 100%;
  /* margin-top: 60px; */
}
</style>
