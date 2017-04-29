import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Axios from './diy/axios'

Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等

//重置样式
import './public/reset.css'

// 全部加载ui框架

// muse-ui
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// import './public/theme.less'
// Vue.use(MuseUI)

// mint-ui
// import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css';
// Vue.use(MintUI);


// 按需加载
// muse-ui  base.less加载基础的样式
import 'muse-components/styles/base.less'
import appBar from 'muse-components/appBar'
import iconButton from 'muse-components/iconButton'
import flatButton from 'muse-components/flatButton'
import avatar from 'muse-components/avatar'
import {bottomNav, bottomNavItem} from 'muse-components/bottomNav'
import {retina} from 'muse-components/utils'

// retina() // 1px 处理方案

Vue.component(appBar.name, appBar)
Vue.component(iconButton.name, iconButton)
Vue.component(flatButton.name, flatButton)
Vue.component(avatar.name, avatar)
Vue.component(bottomNav.name, bottomNav)
Vue.component(bottomNavItem.name, bottomNavItem)



// mint-ui
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);


new Vue({
    el: "#app",
    router,
    store,
    render:(h)=>h(App)
})
