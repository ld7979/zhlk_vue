<template>
    <div class="index">
      <myheader></myheader>
      <div class="ind_left">
        <ul class="left_list">
          <li :class="{active:current===index}"  v-for="(item,index) of list" :key="index" >
            <a href="#" @click="showSubmit(index)">{{item.title}}</a>
            <div v-show="showsub&&current===index">
              <p v-for="(tmp,ind) of item.subtitle" @click="showBg(ind)"><a href="#" :class="{bg:curr===ind}">{{tmp}}</a></p>
            </div>
          </li>
        </ul>
      </div>
      <router-view/>
    </div>
</template>
<script>
import myheader from '../components/header'
export default{
  data () {
　　return {
      list:[
        {title:"总体概况",subtitle:["陕西粮农集团收储板块","夏粮小麦收购状态"]},
        {title:"省储备情况",subtitle:["商品粮","省级储备粮"]},
        {title:"收购情况",subtitle:["小麦收购","玉米收获","稻谷收获","时实情况"]},
        {title:"销售情况",subtitle:["总体情况","小麦销售"]},
      ],
      current:"",
      curr:"",
      showsub:false
    };
　},
  components:{myheader},
　methods: {
    showSubmit(index){
      if(!this.showsub){
        this.current=index
        this.showsub=true
      }else{
        this.current=""
        this.showsub=false
      }
    },
    showBg(ind){
      if(!this.showsub){
        this.curr=""
      }else{
        this.curr=ind
      }
    }
　}
}
</script> 

<style>
@import '../assets/css/index.css'
</style>
