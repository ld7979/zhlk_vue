import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import main from './components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index,children:[
      {path:"/",component:main},
    ]},
    
  ]
})
