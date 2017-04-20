import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Axios from 'axios'

Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等

// ui框架
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './public/theme.less'
Vue.use(MuseUI)

new Vue({
    el: "#app",
    router,
    store,
    render:(h)=>h(App)
})
