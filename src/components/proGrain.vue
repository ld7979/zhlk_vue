<template>
  <div class="prog">
    <div class="prog_left">
      <div class="pleft_top">
        <p>省储备粮</p>
        <div style="width:200px;height:200px;margin:15px 0 0 50px" ref="chart1"></div>
        <div class="pt_wheat">
          <div>
            <p><img src="images/wheat.png" alt=""></p>
            <p>58.72</p>
            <p>小麦</p>
          </div>
          <div>
            <p><img src="images/corn.png" alt=""></p>
            <p style="color:#fef86e">7.95</p>
            <p style="background: #544d30;">玉米</p>
          </div>
          <div>
            <p><img src="images/rice.png" alt=""></p>
            <p style="color:#01e0ff">7.95</p>
            <p style="background: #075f85;">水稻</p>
          </div>
        </div>
      </div>
      <div class="pleft_bottom">
        <p>品种数量</p>
        <div style="width:300px;height:300px;margin:15px 0 0 20px" ref="chart2"></div>
      </div>
    </div>
    <div class="prog_map"></div>
    <div class="prog_right">
      <div class="count">
        <p>数量分布</p>
      </div>
      <div style="width:300px;height:300px;margin:-60px 0 0 -5px" ref="chart3"></div>
      <ul class="">
        <li>123</li>
        <li>123</li>
        <li>123</li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {}
  },
  methods:{
    myChart () {
  　　 let myChart1 = this.$echarts.init(this.$refs.chart1);
  　   // 绘制图表
  　   myChart1.setOption({
          series: [
            {
              zlevel: 1,
              type: 'pie',
              label: {
                normal: {
                  show: false
                }
              },
            },
            {
              type: 'pie',
              radius: [77, 83],
              data: [{
                "value": '410',
                itemStyle:{color:'#fff770'},
                "label": {
                  "normal": {
                    "show": true,
                    "formatter": '{c|总量} \n  {b|67.67} \n {a|万吨}',
                    rich: {
                      c: {
                          color: '#04e7f7',
                          fontSize: 18,
                          lineHeight: 30
                      },
                      b: {
                          color: '#04e7f7',
                          fontSize: 50,
                          lineHeight:60,
                          fontFamily:'经典综艺体简'
                      },
                      a: {
                          align: 'center',
                          color: '#fff',
                          fontSize: 14,
                          height: 30
                      }
                    },
                    "position": "center"
                  }
                }
              }]
            }
          ]
  　　 });
　　 },
    inChart () {
　　  let myChart2 = this.$echarts.init(this.$refs.chart2);
　  　// 绘制图表
      var xData = ['小麦','玉米','水稻'];
      var y1Data = [220,190,280];
　  　myChart2.setOption({
        grid: {
            left: '15%',
            right: '10%',
            top: '20%',
            bottom: '20%',
          },
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 14,
              color: '#fff',
              interval:0
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#fff',//左边线的颜色
                width:'2'//坐标线的宽度
              }
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                color: '#fff'
              }
            },
            axisLabel: {
              fontSize: 12,
              color: '#fff',
              margin: 15
            },
            max: 300,
            min: 0,
            scale : true,
            splitNumber :6,
          },
        ],
        series: [
          {
            type:'bar',
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              color:'#58abf4'
            },
            barWidth: '30%',
            data: y1Data
          },
        ] 
　　  });
    },
    myCharts () {
  　　 let myChart3 = this.$echarts.init(this.$refs.chart3);
  　   // 绘制图表
  　   myChart3.setOption({
          series: [
            {
              type:'pie',
              radius: ['0%', '35%'],
              label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                }
              },
              labelLine: {
                normal: {
                    show: false
                }
              },
              data:[
                {value:335,itemStyle:{color:'#35f482'}}
              ]
            }
          ]
  　　 });
　　 },
　},
  mounted(){
    this.myChart()
    this.myCharts()
    this.inChart()
  }
}
</script>

<style>
@import '../assets/css/proGrain.css'
</style>
