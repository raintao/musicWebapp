import {ROUTER_QUERY} from './mutation-types'
import Axios from 'axios'
import api from '../diy/api'
export default{
  routerQuery({commit},query){
    commit(ROUTER_QUERY,query)
  },
  getSong ({commit, state}, id) {
    commit('openLoading')
    Axios.get(api.getSong(id)).then(res => {
      // 统一数据模型，方便后台接口的改变
      var url = res.data.data[0].url
      commit('setAudio')
      commit('setLocation', url)
    })
    .catch((error) => {     // 错误处理
      console.log(error)
      window.alert('获取歌曲信息出错！')
    })
  }
}
