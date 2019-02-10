// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Map from '@/components/Map'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      name:'Map',
      component:Map
    }
  ]
})
