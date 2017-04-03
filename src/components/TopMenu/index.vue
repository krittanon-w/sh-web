<template>
  <div id="xi-top_menu" class="ui fixed inverted menu">
    <div class="ui container x-c_red_">
      <div href="#" class="header item">
        <i class="inverted big white cube icon"></i>
        <h3 class="x-no_margin x-f_os_l">Smart Helmet</h3>
      </div>
      <!--<a href="#" class="active_ item">Home</a>-->
      <!--<div class="ui simple dropdown item">
              Dropdown <i class="dropdown icon"></i>
              <div class="menu">
                <a class="item" href="#">Link Item</a>
                <a class="item" href="#">Link Item</a>
                <div class="divider"></div>
                <div class="header">Header Item</div>
                <div class="item">
                  <i class="dropdown icon"></i> Sub Menu
                  <div class="menu">
                    <a class="item" href="#">Link Item</a>
                    <a class="item" href="#">Link Item</a>
                  </div>
                </div>
                <a class="item" href="#">Link Item</a>
              </div>
            </div>-->
      <div class="right item">
        <div href="#" class="item">
          <h4 class="x-f_os_l">Krittanon.w</h4>
        </div>
        <div href="#" class="item">
          <img id="xi-avatar" class="ui avatar image x-no_margin" src="https://semantic-ui.com/images/avatar2/large/matthew.png">
        </div>
        <!--<div href="#" class="item">
          <button class="ui teal basic inverted button x-btn_rounded icon" @click="toggleTopSidebar"><i class="icon settings"></i></button>
        </div>-->
        <div href="#" class="item">
          <button class="ui teal basic inverted button x-btn_rounded" @click="this.$topSidebar.show">Menu</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    components: {

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
      // toggleTopMenu() {
      //   this.$topSidebar.toggle()
      //   // $('#topMenu').sidebar('setting', 'transition', 'overlay').sidebar('toggle')
      // }
      toggleTopSidebar() {
        this.$topSidebar.toggle()
      }
    }
  }
</script>

<style lang="scss" scoped>
  $b_bg: #233A50;
  $b2_bg: #005264;
  #xi-top_menu {
    background-color: $b2_bg;
    height: 60px;
    .item::before {
      display: none;
    }
    .right>.item {
      padding-right: 0px;
    }
    // #xi-avatar_warper {
    //   padding:0;
    // }\
  }

  #xi-avatar {
    width: 35px;
    height: 35px;
  }
</style>
