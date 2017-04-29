import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'


// import mainMsg  from '../pages/main/msg.vue'
const mainWork = r => require.ensure([], () => r(require('../pages/index.vue')),'mainWork')



Vue.use(Router)

const routes = [{

  path:'/',component:App,
  children:[
    { path: "",redirect:"/mainWork" },
    { path: "/mainWork",component: mainWork}
  ]
}]

export default new Router({
    routes,linkActiveClass:"my-active"
})
