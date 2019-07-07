<template>
    <div class="index">
      <myheader></myheader>
      <div class="ind_left">
        <ul class="left_list">
          <li class="active">
            <a href="#">总体概况</a>
            <div>
              <p>
                <a href="#">陕西粮农集团收储板块</a>
              </p>
              <p>
                <a href="#">夏粮小麦收购状态</a>
              </p>
            </div>
          </li>
          <li>
            <a href="#">省储备情况</a>
            <div>
              <p>
                <a href="#">商品粮</a>
              </p>
              <p>
                <a href="#">省级储备粮</a>
              </p>
            </div>
          </li>
          <li>
            <a href="#">收购情况</a>
            <div>
              <p>
                <a href="#">小麦收购</a>
              </p>
              <p>
                <a href="#">玉米收获</a>
              </p>
              <p>
                <a href="#">稻谷收获</a>
              </p>
              <p>
                <a href="#">时实情况</a>
              </p>
            </div>
          </li>
          <li>
            <a href="#">销售情况</a>
            <div>
              <p>
                <a href="#">总体情况</a>
              </p>
              <p>
                <a href="#">小麦销售</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="ind_main"></div>
    </div>
</template>
<script>
import myheader from '../components/header'
export default{
  data () {
　　return {};
　},
  components:{myheader},
　methods: {
　}
}
</script> 

<style>
@import '../assets/css/index.css'
</style>
