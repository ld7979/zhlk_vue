import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import main from './components/main'
import proGrain from './components/proGrain'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index,children:[
      {path:"/prog",component:proGrain},
      {path:"/",component:main},
    ]},
    
  ]
})
