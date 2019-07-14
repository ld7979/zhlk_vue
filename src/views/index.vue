<template>
    <div class="index">
      <myheader></myheader>
      <div class="ind_left">
        <ul class="left_list">
          <li :class="{active:current===index}"  v-for="(item,index) of list" :key="index" >
            <a href="#/" @click="showSubmit(index)">{{item.title}}</a>
            <div v-show="showsub&&current===index">
              <p v-for="(tmp,ind) of item.subtitle" @click="showBg(ind)"><a :href="tmp.href" :class="{bg:curr===ind}">{{tmp.tit}}</a></p>
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
        {title:"总体概况",subtitle:[
          {tit:"陕西粮农集团收储板块",href:"#/"},
          {tit:"夏粮小麦收购状态",href:"#/"}
        ]},
        {title:"省储备情况",subtitle:[
          {tit:"商品粮",href:"#/prog"},
          {tit:"省级储备粮",href:"#/"}
        ]},
        {title:"收购情况",subtitle:[
          {tit:"小麦收购",href:"#/"},
          {tit:"玉米收获",href:"#/"},
          {tit:"稻谷收获",href:"#/"},
          {tit:"时实情况",href:"#/"}
        ]},
        {title:"销售情况",subtitle:[
          {tit:"总体情况",href:"#/"},
          {tit:"小麦销售",href:"#/"}
        ]},
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
        this.curr=""
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
