<template>
  <div class="map-container">
    <div id="map"></div>
  </div>
</template>
<script>
  import {API_KEY} from './Maps/API_KEY'
  import GoogleMapsLoader from 'google-maps'
  GoogleMapsLoader.KEY = API_KEY
  export default {
    methods:{
      initMap(google){
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428)
        var mapOptions = {
          zoom: 13,
          center: myLatlng,
          scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
          styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
        }
        var map = new google.maps.Map(document.getElementById('map'), mapOptions)

        var marker = new google.maps.Marker({
          position: myLatlng,
          title: 'Hello World!'
        })

        // To add the marker to the map, call setMap();
        marker.setMap(map)
      }
    },
    mounted () {
      GoogleMapsLoader.load((google) => {
        this.initMap(google)
      })
    }
  }

</script>
<style>

</style>
