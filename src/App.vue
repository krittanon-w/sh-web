<template>
  <div id="app" class="pusher x-full_height x-c_red" _mouseover="closeSidebar">
    <nprogress-container></nprogress-container>
    <top-sidebar></top-sidebar>
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import NprogressContainer from '@/components/Nprogress'
  import TopMenu from '@/components/TopMenu'

  export default {
    name: 'app',

    components: {
      NprogressContainer,
      TopMenu
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

<style lang="scss">
  #app{
  }
</style>
