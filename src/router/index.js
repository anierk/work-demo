import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/home/HelloWorld.vue'
import Layout from '@/pages/layout.vue'
import DataImport from './dataImport/dataImport'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/manage',
      name: 'manage',
      component: Layout,
      children:[
        ...DataImport,
        // ...DataService,
        // ...DataAccredit,
        // ...DataSupplier,
        // ...UserManage,
        // ...DataCount,
        // ...SystemManage
      ]
    }
  ]
})
