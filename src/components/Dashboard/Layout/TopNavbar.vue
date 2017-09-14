<template>
  <nav class="navbar navbar-toggleable-md bg-white">
    <div class="container">
      <button type="button" class="navbar-toggler navbar-toggler-right"
              data-toggle="collapse"
              data-target="#navigation" aria-controls="navigation-index" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button>
      <div class="navbar-minimize">
        <button type="button" class="navbar-toggler"
                :class="{toggled: $sidebar.showSidebar}"
                @click="toggleSidebar">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <a class="navbar-brand" href="#" v-if="$route"> {{$route.name}} </a>
      <div class="collapse navbar-collapse justify-content-end" id="navigation">

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <p class="hidden-lg hidden-md">Account</p>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <p>
                Dropdown
              </p>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <p class="hidden-lg hidden-md">Log out</p>
            </a>
          </li>
        </ul>


      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
