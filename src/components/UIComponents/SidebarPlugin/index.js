import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Dashboard',
      icon: 'now-ui-icons design_app',
      path: '/admin/overview'
    },
    {
      name: 'User Profile',
      icon: 'now-ui-icons users_single-02',
      path: '/admin/user'
    },
    {
      name: 'Table List',
      icon: 'now-ui-icons text_align-center',
      path: '/admin/tables'
    },
    {
      name: 'Typography',
      icon: 'now-ui-icons files_paper',
      path: '/admin/typography'
    },
    {
      name: 'Icons',
      icon: 'now-ui-icons objects_diamond',
      path: '/admin/icons'
    },
    {
      name: 'Maps',
      icon: 'now-ui-icons location_pin',
      path: '/admin/maps'
    }
  ],
  displaySidebar (value) {
    // we simulate the window Resize so the charts will get updated in realtime.
    const simulateWindowResize = setInterval(() => {
      window.dispatchEvent(new Event('resize'))
    }, 180)

    // we stop the simulation of Window Resize after the animations are completed
    setTimeout(() => {
      clearInterval(simulateWindowResize)
    }, 1000)

    if(value){
      document.body.classList.add('nav-open')
    } else{
      document.body.classList.remove('nav-open')
    }
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
