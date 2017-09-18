<template>
  <Card class="card-user">
    <img slot="image" src="static/img/bg5.jpg" alt="..."/>
    <div class="author">
      <a href="#">
        <img class="avatar border-gray" src="static/img/ryan.jpg" alt="...">
        <h5 class="title">Mike Andrew</h5>
      </a>
      <p class="description">
        michael23
      </p>
    </div>
    <p class="description text-center">
      "Lamborghini Mercy <br>
      Your chick she so thirsty <br>
      I'm in that two seat Lambo"
    </p>

    <template slot="footer">
      <hr>
      <div class="button-container">
        <button href="#" class="btn btn-neutral btn-icon btn-round btn-lg">
          <i class="fa fa-facebook-square"></i>
        </button>
        <button href="#" class="btn btn-neutral btn-icon btn-round btn-lg">
          <i class="fa fa-twitter"></i>
        </button>
        <button href="#" class="btn btn-neutral btn-icon btn-round btn-lg">
          <i class="fa fa-google-plus-square"></i>
        </button>
      </div>
    </template>
  </Card>
</template>
<script>
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    components: {Card},
    data () {
      return {
        details: [
          {
            title: '12',
            subTitle: 'Files'
          },
          {
            title: '2GB',
            subTitle: 'Used'
          },
          {
            title: '24,6$',
            subTitle: 'Spent'
          }
        ]
      }
    },
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    }
  }

</script>
<style>

</style>
