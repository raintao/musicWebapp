import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'


// import mainMsg  from '../pages/main/msg.vue'
const player = r => require.ensure([], () =>r(require('../pages/index.vue')),'player')
const playerDetail = r => require.ensure([], () =>r(require('../pages/playerDetail')),'playerDetail')



Vue.use(Router)

const routes = [{

  path:'/',component:App,
  children:[
    // { path: "",redirect:"/player" },
    { path: "/player",component: player},
    {
      name: 'playerDetail',
      path: '/playerDetail/:id',
      component:playerDetail
    }
  ]
}]

export default new Router({
    routes,linkActiveClass:"my-active"
})
