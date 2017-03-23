<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-button @click="visible = true">Button</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>

<script>
var test = 'test'
  export default {
    name: 'app',
  
    data: function() {
      return {
        visible: false,
        test
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
