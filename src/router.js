import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import main from './components/main'
import proGrain from './components/proGrain'
import ssqk from './components/ssqk'
import wheatAcq from './components/wheatAcq'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index,children:[
      {path:"/wheat",component:wheatAcq},
      {path:"/ssqk",component:ssqk},
      {path:"/prog",component:proGrain},
      {path:"/",component:main},
    ]},
    
  ]
})
