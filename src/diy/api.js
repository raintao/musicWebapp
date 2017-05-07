const _baseUrl = 'http://musicapi.duapp.com/api.php'
const _baseUrl2 = 'https://api.imjad.cn/cloudmusic/'
// 发送请求时，重复使用的url可在这里统一修改
// 在需要使用的组件里 import api from '..'  api.getUrl(url)
export default {
  getUrl(promise){
    if(promise){
      return _baseUrl+'?'+promise
    }else {
      return _baseUrl
    }
  },
  getSong (id) {
    return _baseUrl + '?type=url&id=' + id
  },
  getPlayListByWhere (cat, order, offset, total, limit) {
    return _baseUrl + '?type=topPlayList&cat=' + cat + '&offset=' + offset + '&limit=' + limit
  },
  getLrc (id) {
    return _baseUrl2 + '?type=lyric&id=' + id
  },
  getPlayListDetail (id) {
    return _baseUrl2 + '?type=playlist&id=' + id
  },
  getMv (id) {
    return _baseUrl2 + '?type=mv&id=' + id
  },
  search (words) {
    return _baseUrl2 + '?type=search&s=' + words
  }
}
