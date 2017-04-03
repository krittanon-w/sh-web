<template>
  <div id="xi-dashboard" class="x-c_pink_ x-full_height x-of_scroll x-light-free">
    <!--<div class="ui container_ x-c_blue x-ratio_app">-->
      <router-view></router-view>
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    components: {

    },

    data() {
      return {
        // msg: 'Welcome to Your Vue.js App'
      }
    },

    created() {
      // let els = this.$refs
      // console.log(els)
    },

    methods: {
      // toggleTopMenu() {
      // this.$topSidebar.toggle()
      // $('#topMenu').sidebar('setting', 'transition', 'overlay').sidebar('toggle')
      // }
    }
  }
</script>

<style lang="scss" scoped>
  #xi-dashboard {
    // background-color: #F6F6F6; //ac
    background-color: #303F44; //fb
    > div.x-ratio_app {
      padding-top: calc(60px + 20px);
      height: calc(100% - 20px);
    }
    > div.x-ratio_imp {
      padding-top: 70px;
      height: calc(100% - 0px);
    }
  }
</style>
