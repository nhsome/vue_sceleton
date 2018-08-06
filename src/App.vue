<template>
  <div id="app">
    <my-menu/>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import {$, jQuery} from 'jquery'
import bootstrap from 'bootstrap'

export default {
  name: 'App',
  components: {
    'my-menu': Menu,
  }
}
</script>

<style lang="scss">
// $theme-colors: (
//   "primary": #0074d9,
//   "danger": #ff4136,
//   "success": #00ff00
// );

@import '../node_modules/bootstrap/scss/bootstrap.scss';

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
</style>
