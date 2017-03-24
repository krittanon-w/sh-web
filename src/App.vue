<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <img src="./assets/logo.png">
    <el-button @click="visible = true">Button</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>

<script>
  import NprogressContainer from '@/components/Nprogress'

  export default {
    name: 'app',

    components: {
      NprogressContainer
    },

    data() {
      return {
        visible: false
      }
    },

    created() {

    }
  }
</script>

<style lang="css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
