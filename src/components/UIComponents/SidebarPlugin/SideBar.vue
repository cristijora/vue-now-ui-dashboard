<template>
  <div class="sidebar" :data-color="backgroundColor" :data-active-color="activeColor">
    <div class="logo">
      <a href="http://www.creative-tim.com" class="simple-text">
        Creative Tim
      </a>
    </div>
    <slot>

    </slot>
    <div class="sidebar-wrapper">
      <ul class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <router-link v-for="(link,index) in sidebarLinks"
                     :key="`${link}${index}`"
                     :to="link.path" tag="li"
                     :ref="link.name">
          <a>
            <i :class="link.icon"></i>

            <p>{{link.name}}
            </p>
          </a>
        </router-link>
      </ul>
    </div>
    <div class="sidebar-background" style="background-image: url(/static/img/blurred-image-1.jpg)"></div>
  </div>
</template>
<script>
  export default {
    props: {
      backgroundColor: {
        type: String,
        default: 'orange',
        validator: (value) => {
          let acceptedValues = ['orange', 'black', 'darkblue']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      activeColor: {
        type: String,
        default: 'success',
        validator: (value) => {
          let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      sidebarLinks: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        linkHeight: 60,
        activeLinkIndex: 0,

        windowWidth: 0,
        isWindows: false,
        hasAutoHeight: false
      }
    },
    methods: {
      findActiveLink () {
        this.sidebarLinks.find((element, index) => {
          let found = element.path === this.$route.path
          if (found) {
            this.activeLinkIndex = index
          }
          return found
        })
      }
    },
    mounted () {
      this.findActiveLink()
    },
    watch: {
      $route () {
        this.findActiveLink()
      }
    }
  }

</script>
<style>

</style>
