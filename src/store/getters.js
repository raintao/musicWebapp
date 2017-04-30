export default{
  prCurrentTime: state => {
    return state.currentTime / state.durationTime * 100
  },
  prBufferedTime: state => {
    return state.bufferedTime / state.durationTime * 100
  }
}
