import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state={
  audio:{
    'id':0,
    'name': '歌曲名称',
    'singer': '演唱者',
    'albumPic': './static/player-bar.png',
    'location': '',
    'album': ''
  },
  lyric: '', //歌词
  currentIndex: 0, // 当前播放的歌曲位置
  playing: false, // 是否正在播放
  loading: false, // 是否正在加载中
  showDetail: false,
  songList: [],    // 播放列表
  currentTime: 0,
  tmpCurrentTime: 0,
  durationTime: 0,
  bufferedTime: 0,
  change: false   // 判断是更改的时间还是播放的时间
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
