import TopSidebarComponent from './TopSidebarComponent.vue'

const TopSidebar = {
  install(Vue, options) {
    if (this.installed) return
    this.installed = true
    console.log('after install',this.installed)
    // Vue.component('TopSidebar', TopSidebarComponent)
    // Vue.directive(MyDirective.name, MyDirective)
    // Object.assign({}, defaultsOptions, options)
    // 1. add global method or property
    // Vue.toggle = function () {
    //   // something logic ...
    //   console.log("hello")
    // }

    // 2. add a global asset
    // Vue.directive('my-directive', {
    //   bind (el, binding, vnode, oldVnode) {
    //     // something logic ...
    //   }
    // })

    // 3. inject some component options
  	// Vue.mixin({
    //   created() {
    //     console.log('TopSidebar Created!',this.installed)
    //   }
    // })

    var topSidebar = {
      beforeCreate (vm) {
        this.$vm = vm
        console.log('555')
      },
      toggle() {
        $('#xi-top_sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle')
      },
      hide() {
        $('#xi-top_sidebar').sidebar('hide')
      },
      show() {
        $('#xi-top_sidebar').sidebar('show')
      }
    }

    Vue.component('top-sidebar', TopSidebarComponent)

    // 4. add an instance method
    Vue.prototype.$topSidebar = topSidebar

  }
}

export default TopSidebar



