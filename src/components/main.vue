<template>
  <div>
    <div class="ind_main">
      <div class="m_detail">
        <div class="m_intr">
          <p>详情介绍</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏</p>
        </div>
        <div class="m_cangku clearfix">
          <div class="ck_left">
            <p><img src="images/storage_capacity.png" alt=""></p>
            <p>58.72</p>
            <p>已用仓容</p>
          </div>
          <div class="ck_content">
            <div class="ck_tit">
              <p>总仓容</p>
              <p>67.67</p>
              <p>万吨</p>
            </div>
            <div style="width:170px;height:170px" ref="chart1"></div>
          </div>
          <div class="ck_right">
            <p><img src="images/storage_capacity2.png" alt=""></p>
            <p>7.95</p>
            <p>可用仓容</p>
          </div>
        </div>
        <div class="m_cangku clearfix">
          <div class="ck_left">
            <p><img src="images/house.png" alt=""></p>
            <p>73.93</p>
            <p>已用仓容</p>
          </div>
          <div class="ck_content">
            <div class="ck_tit">
              <p>总仓容</p>
              <p>7.95</p>
              <p>个</p>
            </div>
            <div style="width:170px;height:170px" ref="chart2"></div>
          </div>
          <div class="ck_right">
            <p><img src="images/house2.png" alt=""></p>
            <p>7.95</p>
            <p>可用仓容</p>
          </div>
        </div>
      </div>
      <div class="m_map"></div>
      <div class='m_right'>
        <div class="right_top">
          <p>分类</p>
          <div style="width:350px;height:350px;margin-top:-30px" ref="chart3"></div>
        </div>
        <div class="right_bottom">
          <p>分类</p>
          <div style="width:350px;height:350px;margin-top:-20px" ref="chart4"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default{
  data () {
　　return {};
　},
　methods: {
　　initCharts () {
　　  let myChart1 = this.$echarts.init(this.$refs.chart1);
　  　// 绘制图表
　  　myChart1.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [{
          name:'总仓容',
          type:'pie',
          radius: ['90%', '100%'],
          label: {
              show: false
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
              {value:30,name:"可用仓容",itemStyle:{color:'#36f482'}},
              {value:70,name:"已用仓容",itemStyle:{color:'#fe6666'}}
          ]
        }]
　　  });
　　},
　　initChart () {
　　  let myChart2 = this.$echarts.init(this.$refs.chart2);
　  　// 绘制图表
　  　myChart2.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [{
          name:'总仓容',
          type:'pie',
          radius: ['90%', '100%'],
          label: {
              show: false
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
              {value:60,name:"可用仓容",itemStyle:{color:'#36f482'}},
              {value:40,name:"已用仓容",itemStyle:{color:'#fe6666'}}
          ]
        }]
　　  });
　　},
　　myChart () {
　　  let myChart3 = this.$echarts.init(this.$refs.chart3);
　  　// 绘制图表
　  　myChart3.setOption({
        tooltip: {
          trigger: 'item',
          show:false
        },
        legend: {
          orient: 'vertical',
          bottom:'bottom',
          data:['商品粮','中央储备','地市储备','省级储备'],
          textStyle:{
              color:'#fff',
          }
        },
        color:['#36f482','#fff770','#59c6ff','#ff7171'],
        series: [
          {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '50%'],
            avoidLabelOverlap: false,
            data:[
              {value:222, name:'商品粮'},
              {value:222, name:'中央储备'},
              {value:234, name:'地市储备'},
              {value:135, name:'省级储备'}
            ]
          }
        ]
　　  });
　　},
　　inChart () {
　　  let myChart4 = this.$echarts.init(this.$refs.chart4);
　  　// 绘制图表
      var xData = ['芝罘区','福山区','莱山区','牟平区','海阳市','莱阳市','蓬莱市'];
      var y1Data = [100,200,300,330,220,150,260];
　  　myChart4.setOption({
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
              fontSize: 10,
              color: '#fff',
              margin: 15,
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
              fontSize: 15,
              color: '#fff',
              margin: 15
            },
            max: 350,
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
            //   normal: {
            //     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            //       offset: 0,
            //       color: "#4889fb" // 0% 处的颜色
            //     }, {
            //       offset: 1,
            //       color: "#15b3ff" // 100% 处的颜色
            //     }], false)
            //   }
              color:'#58abf4'
            },
            barWidth: '45%',
            data: y1Data
          },
        ] 
　　  });
　　}
　},
　mounted () {
　　this.initCharts();
　　this.initChart();
　　this.myChart();
　　this.inChart();
　}
}
</script> 

<style>
@import '../assets/css/main.css'
</style>

