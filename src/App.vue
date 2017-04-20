<template>
  <div id="app">
    <Headers></Headers>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store'
import Headers from './components/Headers'
export default {
  store,
  components: {
    Headers
  }
}
</script>

<style lang='scss'>
html {
  height: 100%;
}

body {
    font-family: sans-serif;
    line-height: 1.5;
    font-size: 16px;
    color: #333;
    background-color: #eff2f7;
    -webkit-user-select: none;
    -webkit-text-size-adjust: 100%;
    width: 100%;
    overflow-x: hidden
}

</style>
