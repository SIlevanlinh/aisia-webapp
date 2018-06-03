<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" alt=""> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './assets/styles/sass/aisia.scss';
  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background: #F6F6F6;
  }
</style>