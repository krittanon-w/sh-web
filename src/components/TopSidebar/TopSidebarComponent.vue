<template>
  <div ref="xi-top_sidebar" id="xi-top_sidebar" class="ui top sidebar ui segment" >
    <div class="ui center aligned page grid">
      <div class="one column row">
        <div class="sixteen wide column">
          <i class="inverted big black cube icon"></i>
          <h3 class="ui header x-f_os_l x-font-weight-slim_ x-title">SMART HELMET</h3>
        </div>
      </div>
      <slot>
        <div class="three column divided row">
          <div class="column">
            <img class="ui wireframe image" src="https://semantic-ui.com/images/wireframe/media-paragraph.png">
          </div>
          <div class="column">
            <img class="ui wireframe image" src="https://semantic-ui.com/images/wireframe/media-paragraph.png">
          </div>
          <div class="column">
            <img class="ui wireframe image" src="https://semantic-ui.com/images/wireframe/media-paragraph.png">
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topSidebar',
    data() {
      return {
        msg: 'test'
      }
    },
    beforeCreate() {

    },

    methods: {
      // toggle() {
      //   $('#xi-top_sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle')
      // },
      // hide() {
      //   $('#xi-top_sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle')
      // },
      // show() {
      //   $('#xi-top_sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle')
      // }
    }
  }
</script>

<style lang="scss" scoped>
  #x-top_sidebar {}

  .x-title {
    letter-spacing: normal;
    word-spacing: normal;
    margin:15px 0 15px 0 !important;
  }
</style>
