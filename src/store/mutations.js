import {ROUTER_QUERY} from './mutation-types'

export default{
  [ROUTER_QUERY](state,query){
    state.count+=query;
  },
  play (state) {
    state.playing = true
  },
  pause (state) {
    state.playing = false
  },
  toggleDetail (state) {
    state.showDetail = !state.showDetail
  },
  setAudio (state) {
    state.audio = state.songList[state.currentIndex - 1]
  },
  setAudioIndex (state, index) {
    state.audio = state.songList[index]
    state.currentIndex = index + 1
  },
  removeAudio (state, index) {
    state.songList.splice(index, 1)
    if (index === state.songList.length) {
      index--
    }
    state.audio = state.songList[index]
    state.currentIndex = index + 1
    if (state.songList.length === 0) {
      state.audio = {
        'id': 0,
        'name': '歌曲名称',
        'singer': '演唱者',
        'albumPic': '/static/player-bar.png',
        'location': '',
        'album': ''
      }
      state.playing = false
    }
  },
  setChange (state, flag) {
    state.change = flag
  },
  setLocation (state, location) {
    state.audio.location = location
  },
  updateCurrentTime (state, time) {
    state.currentTime = time
  },
  updateDurationTime (state, time) {
    state.durationTime = time
  },
  updateBufferedTime (state, time) {
    state.bufferedTime = time
  },
  changeTime (state, time) {
    state.tmpCurrentTime = time
  },
  openLoading (state) {
    state.loading = true
  },
  closeLoading (state) {
    state.loading = false
  },
  resetAudio (state) {
    state.currentTime = 0
  },
  playNext (state) { // 播放下一曲
    state.currentIndex++
    if (state.currentIndex > state.songList.length) {
      state.currentIndex = 1
    }
    state.audio = state.songList[state.currentIndex - 1]
  },
  playPrev (state) { // 播放上一曲
    state.currentIndex--
    if (state.currentIndex < 1) {
      state.currentIndex = state.songList.length
    }
    state.audio = state.songList[state.currentIndex - 1]
  },
  addToList (state, songs) {
    var items = Array.prototype.concat.call(songs)
    items.forEach(item => {
      var flag = false
      state.songList.forEach(function (element, index) { // 检测歌曲重复
        if (element.id === item.id) {
          flag = true
          state.currentIndex = index + 1
        }
      })
      if (!flag) {
        state.songList.push(item)
        state.currentIndex = state.songList.length
      }
    })
  },
  setLrc (state, lrc) {
    state.lyric = lrc
  }
}
