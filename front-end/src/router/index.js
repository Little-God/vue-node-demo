import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/admin/List'
import Form from '@/components/admin/Form'
import Admin from '@/components/Admin'
import Action from '@/components/Action'
import Actionlist from '@/components/action/Actionlist'
import Addaction from '@/components/action/Addaction'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    }, {
      path: '/admin',
      redirect:'/admin/list',
      name: 'admin',
      component: Admin,
      meta:{
        title:'商品'
      },
      children: [
        {
          path:'/admin/list',
          name:'list',
          component: List,
          meta:{
            title:'商品列表'
          },
        },
        {
          path:'/admin/form',
          name:'form',
          component: Form,
          meta:{
            title:'添加商品'
          },
        }
      ]
    },{
      path:'/action',
      name: 'action',
      redirect:'/action/actionlist',
      component: Action,
      meta:{
        title: '活动'
      },
      children: [
        {
          path: '/action/actionlist',
          name: 'actionlist',
          component: Actionlist,
          meta: {
            title: '活动列表'
          }
        },{
          path: '/action/addaction',
          name: 'addaction',
          component: Addaction,
          meta: {
            title: '添加活动'
          }
        }

      ]
    }
  ]
})
