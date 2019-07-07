<template>
    <div>
      <div style="width:500px;height:500px" ref="chart"></div>
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
　  　console.log(this.$refs.chart)
　  　// 绘制图表
　  　myChart.setOption({
　　    title : {
            text: '某站点用户访问来源',
            x:'center'
        },
        series : [
            {
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'省级储备',itemStyle:{color:'#ff0'}},
                    {value:310, name:'城市储备',itemStyle:{color:'#f0f'}},
                    {value:234, name:'商品粮',itemStyle:{color:'#f00'}},
                    {value:135, name:'中央储备',itemStyle:{color:'#0ff'}}
                ]
            }
        ] 
　　  });
　　}
　},
　mounted () {
　　this.initCharts();
　}
}
</script> 

<style>

</style>
