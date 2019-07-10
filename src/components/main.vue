<template>
  <div>
    <div class="ind_main">
      <div class="m_detail">
        <div class="m_intr">
          <p>详情介绍</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏粮小麦收入情况夏</p>
        </div>
        <div class="m_cangku">
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
            <div style="width:170px;height:170px" ref="chart"></div>
          </div>
          <div class="ck_right">
            <p><img src="images/storage_capacity2.png" alt=""></p>
            <p>7.95</p>
            <p>可用仓容</p>
          </div>
        </div>
      </div>
      <div class="m_map"></div>

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
　　  let myChart = this.$echarts.init(this.$refs.chart);
　  　// 绘制图表
　  　myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [{
          name:'总仓容',
          type:'pie',
          radius: ['80%', '90%'],
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
          // data:[
          //     {value:60,name:"可用仓容",itemStyle:{color:'#36f482'}},
          //     {value:40,name:"已用仓容",itemStyle:{color:'#fe6666'}}
          // ]
        }]
　　  });
　　}
　},
　mounted () {
　　this.initCharts();
　}
}
</script> 

<style>
@import '../assets/css/main.css'
</style>

