import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'


// import mainMsg  from '../pages/main/msg.vue'
const player = r => require.ensure([], () =>r(require('../pages/index.vue')),'player')
const playerDetail = r => require.ensure([], () =>r(require('../pages/playerDetail')),'playerDetail')
const rage = r => require.ensure([], () =>r(require('../pages/rage')),'rage')
const playList = r => require.ensure([], () =>r(require('../pages/playList')),'playList')
const playListDetail = r => require.ensure([], () =>r(require('../pages/playListDetail')),'playListDetail')



Vue.use(Router)

const routes = [{

  path:'/',component:App,
  children:[
    { path: "",redirect:"/player/rage" },
    { path: "/player",component: player,
      children:[
        // 流行
        {path:'rage',component:rage},
        // 全部歌单
        {path:'playList',component:playList}

      ]
    },
    {
      name: 'playerDetail',
      path: '/playerDetail/:id',
      component:playerDetail
    }, {
    path: '/playListDetail/:id',
    name: 'playListDetail',
    component: playListDetail
  }]
}]

export default new Router({
    routes,linkActiveClass:"my-active"
})
