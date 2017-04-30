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
  showDetail: false, //是否详情页显示
  songList: [{
    'id':276904,
    'name': '没那么简单',
    'singer': '黄小琥',
    'albumPic':"https://p1.music.126.net/Ef5zTpxojJJwHH_kIC2NAw==/85761906972218.jpg",
    'location': "http://m7.music.126.net/20170430204005/15f6a62a9e3af70b255eed68ee9738e0/ymusic/8bde/d080/5182/177b76111f07b21dc196de7af5a0446b.mp3",
    'album': ''
  }],    // 播放列表
  currentTime: 0,  //当前播放的时间
  tmpCurrentTime: 0,
  durationTime: 0,  //歌曲总时长
  bufferedTime: 0,  //缓存时长
  change: false   // 判断是更改的时间还是播放的时间
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
