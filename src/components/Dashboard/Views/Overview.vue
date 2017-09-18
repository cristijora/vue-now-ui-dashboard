<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <chart-card title="Email Statistics"
                      sub-title="Last Campaign Performance"
                      chart-type="Pie"
                      chart-classes="ct-perfect-fourth"
                      :chart-data="emailStatsChart.data">
            <template slot="legend">
              <i class="fa fa-circle text-gray"></i> Open
              <i class="fa fa-circle text-primary"></i> Bounce
              <i class="fa fa-circle text-warning"></i> Unsubscribe
            </template>
          </chart-card>
        </div>
        <div class="col-md-8">
          <chart-card title="Users Behavior"
                      sub-title="24 Hours performance"
                      :chart-data="usersChart.data"
                      :chart-options="usersChart.options"
                      :chart-responsive-options="usersChart.responsiveOptions"
          >
            <div class="statistics-container">
              <div class="statistics">
                <p class="description">NASDAQ: AAPL</p>
                <h3>127.33</h3>
                <h6>OCT 2:16 PM EDT</h6>
              </div>
              <div class="statistics-badge">
              <span class="badge badge-primary">
                  <i class="now-ui-icons media-2_sound-wave"></i>
                  1 Year
              </span>
              </div>
            </div>

            <template slot="stats">
              <i class="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
            </template>
          </chart-card>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <chart-card title="2014 Sales"
                      sub-title="All products including Taxes"
                      chart-type="Bar"
                      :chart-data="salesChart.data"
                      :chart-options="salesChart.options"
                      :chart-responsive-options="salesChart.responsiveOptions">
            <template slot="legend">
              <i class="fa fa-circle text-gray"></i> Tesla Model S
              <i class="fa fa-circle text-primary"></i> BMW 5 Series
            </template>
            <template slot="stats">
              <i class="now-ui-icons ui-1_check"></i> Data information certified
            </template>
          </chart-card>
        </div>
        <div class="col-md-6">
          <Card>
            <template slot="header">
              <h5 class="title">Tasks</h5>
              <p class="category">Backend development</p>
            </template>
            <n-table :data="tableData.data"
                     :columns="tableData.columns">
              <template slot="columns"></template>

              <template scope="props">
                <td>
                  <Checkbox v-model="props.item.checked"></Checkbox>
                </td>
                <td>{{props.item.title}}</td>
                <td class="td-actions text-right">
                  <button type="button" rel="tooltip" title=""
                          class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral"
                          data-original-title="Edit Task">
                    <i class="now-ui-icons ui-2_settings-90"></i>
                  </button>
                  <button type="button" rel="tooltip" title=""
                          class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral"
                          data-original-title="Remove">
                    <i class="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                </td>
              </template>
            </n-table>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
              </div>
            </div>
          </Card>

        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import Checkbox from 'src/components/UIComponents/Inputs/Checkbox.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import Table from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  export default {
    components: {ChartCard, 'n-table': Table, Checkbox, Card},
    data(){
      return {
        emailStatsChart: {
          data: {
            labels: ['62%','32%','10%'],
            series: [62, 32, 10]
          }
        },
        usersChart: {
          data: {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
              [287, 385, 490, 492, 554, 586, 698, 695, 752]
            ]
          },
          options: {
            low: 0,
            high: 800,
            chartPadding: 0,
            showArea: true,
            height: "245px",
            axisX: {
              showGrid: false,
            },
            axisY: {
              showGrid: false,
            },
            lineSmooth: this.$Chartist.Interpolation.simple({
              divisor: 6
            }),
            showLine: false,
            showPoint: true,
            fullWidth: true
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                }
              }
            }]
          ]
        },
        salesChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
              [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0];
                }
              }
            }]
          ]
        },
        tableData: {
          columns:['name','test'],
          data: [
            {title: 'Sign contract for "What are conference organizers afraid of?"', checked: false},
            {title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true},
            {title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit', checked: true},
            {title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false},
            {title: 'Read "Following makes Medium better"', checked: false},
            {title: 'Unfollow 5 enemies from twitter', checked: false}
          ]
        }
      }
    },
  }
</script>
<style>

</style>
