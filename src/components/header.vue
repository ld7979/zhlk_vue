<template>
  <div>
    <div class="header_bg">
      <div class="head_left">
        <span>智慧粮库运营监管平台</span>
      </div>
      <div class="heder_main">
        <a href="#/">
          <img src="images/logo.png" alt="">
        </a>
        <span>夏粮小麦收购情况</span>
      </div>
      <div class="head_right">
        <p style="top:35px;right:300px;">2019年2月14日</p>
        <p style="top:35px;right:230px;">星期四</p>
        <p style="top:20px;right:65px;font-size:40px;">{{nowTime}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      nowTime:""
    }
  },
  methods:{
    getTime(){
      setInterval(()=>{
        this.nowTime = new Date().toLocaleString().split("午")[1];
      },1000)
    }
  },
  created(){
    this.getTime();
  }
}
</script>

<style>
@import '../assets/css/header.css' 
</style>  

