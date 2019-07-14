<template>
  <div class="wheat_main">
    <div class="wheat_left">
      <div class="price">
        <div class="cny">
          <p>¥</p>
        </div>
        <div class="wheat_price">
          <p>收购均价 ：<span>2.5</span>元/kg</p>
          <p>当日均价 ：<span style="color:#efee7f">2.5</span>元/kg</p>
        </div>
      </div>
      <div class="cstmrtype">
        <p>客户类型</p>
        <div style="width:380px;height:380px;margin-left:-40px;" ref="chart1"></div>
      </div>
    </div>
    <div class="wheat_content"></div>
    <div class="wheat_right">
      <div class="Price_dispersion">
        <p>价格分布</p>
        <div style="width:380px;height:380px;margin:-20px 0 0 -40px" ref="chart2"></div>
      </div>
      <div class="Price_action">
        <p>价格走势</p>
        <div style="width:380px;height:220px;margin-top:50px" ref="chart3"></div>
        <div class="legend">
          <span></span>
          <span>最高价格</span>
          <span style="background:#34b173;"></span>
          <span>平均价格</span>
          <span style="background:#d0465d;"></span>
          <span>最低价格</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods:{
    initCharts () {
      let myChart2 = this.$echarts.init(this.$refs.chart2)
      // 绘制图表
      myChart2.setOption({
        series: [{
          type: 'pie',
          radius: [60, 80],
          center: ['50%', '50%'],
          color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], 
          data: [
            {
              value: 10.68,
              name: '12.1-12.2'
            },
            {
              value: 30.67,
              name: '大于12.2'
            },
            {
              value: 35.81,
              name: '小于12.0'
            },
            {
              value: 25.8,
              name: '2.1-2.2'
            }
          ],
          label: {
            normal: {
              formatter: ['{c|{c}%}', '{b|{b}}'].join('\n'),
              rich: {
                c: {
                  color: '#24c6df',
                  fontSize: 22,
                  fontWeight:'bold',
                  lineHeight: 5
                },
                b: {
                  color: '#fff',
                  fontSize: 15,
                  height: 40
                }
              }
            }
          },
        }]
      })
    },
    myCharts () {
      let myChart1 = this.$echarts.init(this.$refs.chart1)
      // 绘制图表
      myChart1.setOption({
        series: [{
          type: 'pie',
          radius: [60, 80],
          center: ['50%', '50%'],
          color: ['#fff45c', '#ad3e4c', '#59daff', '#39c97c'], 
          data: [
            {
              value: 210,
              name: '粮食贸易公司'
            },
            {
              value: 300,
              name: '粮食储备库'
            },
            {
              value: 350,
              name: '经纪人'
            },
            {
              value: 400,
              name: '农户'
            }
          ]
        }]
     });
    },
    myChart () {
      let myChart3 = this.$echarts.init(this.$refs.chart3)
      // 绘制图表
      myChart3.setOption({
        title: {
          text: '价格(元/kg)',
          textStyle:{
            color:'#fff',
            fontSize:15
          }
        },
        grid: {
          left: '10%',   //距离左边的距离
          right: '20%', //距离右边的距离
          bottom: '20%',//距离下边的距离
          top: '20%' //距离上边的距离
        }, 
        textStyle:{
          color:'#fff',       
          fontSize:14,     //大小
          align:'center'   //水平对齐
        },
        xAxis:  {
          type: 'category',
          boundaryGap: false,
          data: ['07-08','07-09','07-10','07-11','07-12'],
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
            type:'line',
            data:[2.55,2.65,2.65,2.65,2.45],
            lineStyle:{
              normal:{
                color:'#dfd758'
              }
            }
          },
          {
            type:'line',
            data:[2.45,2.45,2.45,2.5,2.45],
            lineStyle:{
              normal:{
                color:'#34b173'
              }
            }
          },
          {
            type:'line',
            data:[2.27,2.27,2.27,2.39,2.45],
            lineStyle:{
              normal:{
                color:'#d0465d'
              }
            }
          }
        ]
      });
    },
  },
  mounted(){
    this.initCharts()
    this.myCharts()
    this.myChart()
  }
}
</script>


<style>
@import '../assets/css/wheatAcq.css';
</style>
