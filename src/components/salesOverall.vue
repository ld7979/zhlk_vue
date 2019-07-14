<template>
    <div class="sall_main">
      <div class="sall_left">
        <div class="left_sum">
          <ul class="sum_list">
            <li>
              <img src="images/sales_01.png" alt="">
              <span>累计销售 : <b>1111</b>吨</span>
            </li>
            <li>
              <img style="margin-left:15px" src="images/sales_02.png" alt="">
              <span>销售总金额 : <b>2222</b>吨</span>
            </li>
            <li>
              <img src="images/sales_03.png" alt="">
              <span>累计合同 : <b>3333</b>吨</span>
            </li>
            <li>
              <img src="images/sales_04.png" alt="">
              <span>累计车辆 : <b>4444</b>吨</span>
            </li>
            <li>
              <img src="images/sales_05.png" alt="">
              <span>累计客户 : <b>5555</b>吨</span>
            </li>
          </ul>
        </div>
        <div class="left_count">
          <p>数量</p>
          <div style="width:300px;height:300px;margin:-110px 0 0 10px" ref="chart1"></div>
        </div>
        <div class="left_price">
          <p>金额</p>
          <div style="width:300px;height:300px;margin:-110px 0 0 10px" ref="chart2"></div>
        </div>
      </div>
      <div class="sall_content"></div>
      <div class="sall_right">
        <div class="right_count">
          <p>数量</p>
          <div style="width:400px;height:300px;margin:30px 0 0 10px" ref="chart3"></div>
        </div>
        <div class="right_count" style="margin-top:30px;">
          <p>数量</p>
          <div style="width:400px;height:300px;margin:30px 0 0 10px" ref="chart4"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default{
  data () {
    return {}
  },
  methods:{
    myChart () {
      let myChart1 = this.$echarts.init(this.$refs.chart1);
      // 绘制图表
      myChart1.setOption({
        legend: {
          bottom:"bottom",
          data: ['小麦','玉米','水稻'],
          textStyle:{
            color:'#fff',
          }
        },
        series : [
          {
            type: 'pie',
            radius : '33%',
            center: ['50%', '70%'],
            data:[
              {value:400, name:'小麦',itemStyle:{color:'#fff45c'}},
              {value:500, name:'玉米',itemStyle:{color:'#59daff'}},
              {value:200, name:'水稻',itemStyle:{color:'#39c97c'}}
            ],
            label: {
              normal: {
                formatter: ['{c|{c}吨}'].join('\n'),
                rich: {
                  c: {
                    color: '#fff',
                    fontSize: 15
                  }
                },
              }
            },
          }
        ]
      })
    },
    myCharts () {
      let myChart2 = this.$echarts.init(this.$refs.chart2);
      // 绘制图表
      myChart2.setOption({
        legend: {
          bottom:"bottom",
          data: ['小麦','玉米','水稻'],
          textStyle:{
            color:'#fff',
          }
        },
        series : [
          {
            type: 'pie',
            radius : '33%',
            center: ['50%', '70%'],
            data:[
              {value:400, name:'小麦',itemStyle:{color:'#fff45c'}},
              {value:500, name:'玉米',itemStyle:{color:'#59daff'}},
              {value:200, name:'水稻',itemStyle:{color:'#39c97c'}}
            ],
            label: {
              normal: {
                formatter: ['{c|{c}元}'].join('\n'),
                rich: {
                  c: {
                    color: '#fff',
                    fontSize: 15
                  }
                },
              }
            },
          }
        ]
      })
    },
    initCharts () {
      let myChart3 = this.$echarts.init(this.$refs.chart3);
      // 绘制图表
      myChart3.setOption({
        legend: {
          data: ['小麦', '玉米', '稻谷'],
          left: 'center',
          bottom: 'bottom',
          textStyle:{
            color:'#fff'
          }
        },
        title: {
          text: '数量(吨)',
          textStyle:{
            color:'#fff',
            fontSize:15
          }
        },
        grid: {
          x: 28,   //距离左边的距离left
          x2: 40, //距离右边的距离right
          y2:60,//距离下边的距离bottom
          y:40 //距离上边的距离top
        }, 
        xAxis:  {
          name:'月份',
          type: 'category',
          boundaryGap: false,
          data: ['12','1','2','3','4','5'],
          axisLine:{  //x轴线
            show:true,
            lineStyle: {
              color: '#ffffff'
            }
          },
        },
        yAxis: {
          type: 'value',
          min: 2.2,
          max: 2.7,
          splitLine: {
            show:false,     //y网格线
          },
          axisLine: {
            show:true,
            lineStyle: {
              color:'#ffffff'  //Y轴颜色
            }
          }
        },
        series: [
          {
            name: '稻谷',
            type: 'line',
            data: [2.27,2.68,2.52,2.56,2.5,2.52],
            areaStyle: {
                normal: {
                    type: 'default',
                    color:'#59daff'
                }
            },
            lineStyle: {
              normal: {
                width: 1,
                color:'#59daff'
              }
            },
            itemStyle: {
              normal: {
                color: '#59daff'
              }
            },
              smooth: true
          },
          {
            name: '小麦',
            type: 'line',
            data: [2.45,2.5,2.46,2.48,2.46,2.45],
            areaStyle: {
              normal: {
                type: 'default',
                color:'#42dc89'
              }
            },
            lineStyle: {
              normal: {
                width: 1,
                color:'#42dc89'
              }
            },
            itemStyle: {
              normal: {
                color: '#42dc89'
              }
            },
            smooth: true
          },
          {
            name: '玉米',
            type: 'line',
            data: [2.27,2.35,2.27,2.4,2.25,2.45],
            areaStyle: {
              normal: {
                type: 'default',
                color:'#f5ec6a'
              }
            },
            lineStyle: {
              normal: {
                width: 1,
                color:'#f5ec6a'
              }
            },
            itemStyle: {
              normal: {
                color: '#f5ec6a'
              }
            },
            smooth: true
          },
        ]
      })
    },
    initChart () {
      let myChart4 = this.$echarts.init(this.$refs.chart4);
      // 绘制图表
      myChart4.setOption({
        legend: {
          data: ['小麦', '玉米', '稻谷'],
          left: 'center',
          bottom: 'bottom',
          textStyle:{
            color:'#fff'
          }
        },
        title: {
          text: '价格(元/kg)',
          textStyle:{
            color:'#fff',
            fontSize:15
          }
        },
        grid: {
          x: 28,   //距离左边的距离left
          x2: 40, //距离右边的距离right
          y2:60,//距离下边的距离bottom
          y:40, //距离上边的距离top
        }, 
        xAxis:  {
          name:'月份',
          type: 'category',
          boundaryGap: false,
          data: ['12','1','2','3','4','5'],
          axisLine:{  //x轴线
            show:true,
            lineStyle: {
              color: '#ffffff'
            }
          },
        },
        yAxis: {
          type: 'value',
          min: 2.2,
          max: 2.7,
          splitLine: {
            show:false,     //y网格线
          },
          axisLine: {
            show:true,
            lineStyle: {
              color:'#ffffff'  //Y轴颜色
            }
          }
        },
        series: [
          {
            name: '稻谷',
            type: 'line',
            data: [2.45,2.5,2.46,2.48,2.46,2.45],
            areaStyle: {
                normal: {
                    type: 'default',
                    color:'#59daff'
                }
            },
            lineStyle: {
              normal: {
                width: 1,
                color:'#59daff'
              }
            },
            itemStyle: {
              normal: {
                color: '#59daff'
              }
            },
              smooth: true
          },
          {
            name: '小麦',
            type: 'line',
            data: [2.27,2.68,2.52,2.56,2.5,2.52],
            areaStyle: {
              normal: {
                type: 'default',
                color:'#42dc89'
              }
            },
            lineStyle: {
              normal: {
                width: 1,
                color:'#42dc89'
              }
            },
            itemStyle: {
              normal: {
                color: '#42dc89'
              }
            },
            smooth: true
          },
          {
            name: '玉米',
            type: 'line',
            data: [2.27,2.35,2.27,2.4,2.25,2.45],
            areaStyle: {
              normal: {
                type: 'default',
                color:'#f5ec6a'
              }
            },
            lineStyle: {
              normal: {
                width: 1,
                color:'#f5ec6a'
              }
            },
            itemStyle: {
              normal: {
                color: '#f5ec6a'
              }
            },
            smooth: true
          },
        ]
      })
    }
  },
  mounted(){
    this.myChart()
    this.myCharts()
    this.initCharts()
    this.initChart()
  }
}
</script>

<style>
  @import '../assets/css/salesOverall.css'
</style>