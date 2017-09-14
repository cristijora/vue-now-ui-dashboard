<template>
  <card>
    <template slot="header">
      <slot name="title">
        <h5 class="title">{{title}}</h5>
      </slot>
      <slot name="subTitle">
        <p class="category">
          {{subTitle}}
        </p>
      </slot>
    </template>
    <div>
      <slot></slot>
      <div :id="chartId" class="ct-chart" :class="chartClasses"></div>
      <div class="footer">
        <div class="legend">
          <slot name="legend"></slot>
        </div>
        <hr>
        <div class="stats">
          <slot name="stats"></slot>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
  import Card from './Card.vue'

  export default {
    name: 'chart-card',
    components: {Card},
    props: {
      title: {
        type: String,
        default: 'Chart title'
      },
      subTitle: {
        type: String,
        default: 'Subtitle'
      },
      chartType: {
        type: String,
        default: 'Line' // Line | Pie | Bar
      },
      chartClasses: {
        type: String,
        default: ''
      },
      chartOptions: {
        type: Object,
        default: () => {
          return {}
        }
      },
      chartResponsiveOptions: {
        type: Array,
        default: () => {
          return []
        }
      },
      chartData: {
        type: Object,
        default: () => {
          return {
            labels: [],
            series: []
          }
        }
      }
    },
    data () {
      return {
        chartId: 'no-id',
        chart: {}
      }
    },
    methods: {
      /***
       * Initializes the chart by merging the chart options sent via props and the default chart options
       */
      initChart () {
        const chartIdQuery = `#${this.chartId}`
        this.chart = this.$Chartist[this.chartType](chartIdQuery, this.chartData, this.chartOptions, this.chartReponsiveOptions)
        if (this.chartType === 'Line') {
          this.animateLineChart()
        }
        else if (this.chartType === 'Bar') {
          this.animateBarChart()
        }
      },
      /***
       * Assigns a random id to the chart
       */
      updateChartId () {
        var currentTime = new Date().getTime().toString()
        var randomInt = this.getRandomInt(0, currentTime)
        this.chartId = `div_${randomInt}`
      },
      getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      },
      animateLineChart (chart) {
        let seq = 0
        let durations = 500
        let delays = 80
        this.chart.on('draw', (data) => {
          if (data.type === 'line' || data.type === 'area') {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: this.$Chartist.Svg.Easing.easeOutQuint
              }
            })
          } else if (data.type === 'point') {
            seq++
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            })
          }
        })
        seq = 0
      },
      animateBarChart () {
        let seq = 0
        let durations = 500
        let delays = 80
        this.chart.on('draw', (data) => {
          if (data.type === 'bar') {
            seq++
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            })
          }
        })
      }
    },
    mounted () {
      this.updateChartId()
      this.$nextTick(this.initChart)
    }
  }

</script>
<style>

</style>
