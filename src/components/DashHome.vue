<template>
  <div id="xi-home" class="ui container x-c_red x-full_height_ x-ratio_app_">
    ssfsd
  </div>
</template>

<script>
  export default {
    name: 'DashHome',
    components:{

    },

    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },

    created() {
      // let els = this.$refs
      // console.log(els)
    },

    methods: {
      toggleTopMenu() {
        this.$topSidebar.toggle()
        // $('#topMenu').sidebar('setting', 'transition', 'overlay').sidebar('toggle')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #xi-home{
    margin-top: calc(60px + 20px);
    height: calc(100% - 60px - 20px - 20px);
  }
</style>
