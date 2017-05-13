webpackJsonp([6],{130:function(t,e){},131:function(t,e){},132:function(t,e){},137:function(t,e,n){n(130);var i=n(10)(n(79),n(138),null,null);t.exports=i.exports},138:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"foot"},[n("div",{staticClass:"player-mini"},[n("div",{staticClass:"mini-content"},[n("audio",{attrs:{src:t.audio.location,id:"audioPlay"},on:{timeupdate:t.updateTime,canplay:t.canPlaySong,error:t.loadError,ended:t.next}}),t._v(" "),n("div",{staticClass:"cover",on:{click:t.showDetail}},[n("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{size:30}}),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"xmplogo",attrs:{src:t.audio.albumPic+"?param=100y100",alt:t.audio.name}})],1),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"name xmpname"},[t._v(t._s(t.audio.name))]),t._v(" "),n("div",{staticClass:"artist xmpartist"},[t._v(t._s(t.audio.singer))])]),t._v(" "),n("div",{staticClass:"control"},[n("mu-icon-button",{staticClass:"mini-btn player-list",on:{click:t.showList}}),t._v(" "),n("mu-icon-button",{staticClass:"mini-btn player",class:{pause:t.playing},on:{click:t.toggleStatus}}),t._v(" "),n("mu-icon-button",{staticClass:"mini-btn next",on:{click:t.next}})],1),t._v(" "),n("div",{staticClass:"pro"},[n("div",{staticClass:"pro-load proload",style:{"-webkit-transform":"translateX("+t.prBufferedTime+"%)"}}),t._v(" "),n("div",{staticClass:"pro-play proplay",style:{"-webkit-transform":"translateX("+t.prCurrentTime+"%)"}})])])]),t._v(" "),n("toast",{ref:"toast"}),t._v(" "),n("BottomSheet",{ref:"bottomSheet"})],1)},staticRenderFns:[]}},139:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"toast-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],staticClass:"toast-wrap"},[t._v(t._s(t.text))])])},staticRenderFns:[]}},140:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mu-bottom-sheet",{attrs:{open:t.bottomSheet},on:{close:t.closeBottomSheet}},[n("div",{staticClass:"title-wrapper"},[t._v("\n      播放列表（"+t._s(t.songList.length)+"）\n    ")]),t._v(" "),n("hr",{staticClass:"mu-divider"}),t._v(" "),n("div",{staticClass:"list-wrapper"},t._l(t.songList,function(e,i){return n("div",{staticClass:"list-item",class:{on:e.id==t.audio.id}},[n("div",{staticClass:"left",on:{click:function(e){t.play(i)}}},[n("span",{staticClass:"list-name"},[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"list-singer"},[t._v(" -"+t._s(e.singer)+" ")])]),t._v(" "),n("span",{staticClass:"list-btn",on:{click:function(e){t.remove(i)}}},[t._v("x")]),t._v(" "),n("hr",{staticClass:"mu-divider"})])}))])],1)},staticRenderFns:[]}},141:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("keep-alive",[n("router-view")],1),t._v(" "),n("Player",{directives:[{name:"show",rawName:"v-show",value:t.songList.length>0&&!t.showDetail,expression:"songList.length > 0 && !showDetail"}]})],1)},staticRenderFns:[]}},28:function(t,e,n){var i=n(10)(n(78),n(141),null,null);t.exports=i.exports},34:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i="ROUTER_QUERY"},49:function(t,e,n){"use strict";var i=n(88),o=n.n(i),a=n(18),s=n.n(a);s.a.defaults.timeout=5e3,s.a.interceptors.response.use(function(t){return 654===t.status&&window.alert("请求超时！"),t},function(t){return console.log("promise error:"+t),o.a.reject(t)}),e.a=s.a},50:function(t,e,n){"use strict";var i=n(7),o=n(142),a=n(28),s=n.n(a),r=function(t){return n.e(3).then(function(){return t(n(146))}.bind(null,n)).catch(n.oe)},u=function(t){return n.e(1).then(function(){return t(n(149))}.bind(null,n)).catch(n.oe)},c=function(t){return n.e(0).then(function(){return t(n(150))}.bind(null,n)).catch(n.oe)},l=function(t){return n.e(2).then(function(){return t(n(147))}.bind(null,n)).catch(n.oe)},d=function(t){return n.e(4).then(function(){return t(n(148))}.bind(null,n)).catch(n.oe)};i.default.use(o.a);var m=[{path:"/",component:s.a,children:[{path:"",redirect:"/player/rage"},{path:"/player",component:r,children:[{path:"rage",component:c},{path:"playList",component:l}]},{name:"playerDetail",path:"/playerDetail/:id",component:u},{path:"/playListDetail/:id",name:"playListDetail",component:d}]}];e.a=new o.a({routes:m,linkActiveClass:"my-active"})},51:function(t,e,n){"use strict";var i=n(7),o=n(11),a=n(18),s=(n.n(a),n(85)),r=n(83),u=n(84);i.default.use(o.d);var c={audio:{id:0,name:"咱们结婚吧",singer:"齐晨",albumPic:"https://p1.music.126.net/yFQShP8JdQ824I_Cm4tkOg==/47278999995384.jpg",location:"http://qnm.hunliji.com/n-LvZJP0teoKD9I40PDyXmbhuJQ=/FuzaaiqOdRXrzwJXLDUCHZRY6g0T.mp3",album:""},lyric:"",currentIndex:0,playing:!1,loading:!1,showDetail:!1,songList:[{id:0,name:"咱们结婚吧",singer:"齐晨",albumPic:"https://p1.music.126.net/yFQShP8JdQ824I_Cm4tkOg==/47278999995384.jpg",location:"http://qnm.hunliji.com/n-LvZJP0teoKD9I40PDyXmbhuJQ=/FuzaaiqOdRXrzwJXLDUCHZRY6g0T.mp3",album:""}],currentTime:0,tmpCurrentTime:0,durationTime:0,bufferedTime:0,change:!1};e.a=new o.d.Store({state:c,getters:u.a,actions:r.a,mutations:s.a})},52:function(t,e){},53:function(t,e){},54:function(t,e){},57:function(t,e,n){"use strict";var i="http://musicapi.duapp.com/api.php",o="https://api.imjad.cn/cloudmusic/";e.a={getUrl:function(t){return t?i+"?"+t:i},getSong:function(t){return i+"?type=url&id="+t},getPlayListByWhere:function(t,e,n,o,a){return i+"?type=topPlayList&cat="+t+"&offset="+n+"&limit="+a},getLrc:function(t){return o+"?type=lyric&id="+t},getPlayListDetail:function(t){return o+"?type=playlist&id="+t},getMv:function(t){return o+"?type=mv&id="+t},search:function(t){return o+"?type=search&s="+t}}},58:function(t,e,n){n(132);var i=n(10)(n(80),n(140),"data-v-76970726",null);t.exports=i.exports},59:function(t,e,n){n(131);var i=n(10)(n(81),n(139),"data-v-5699bf38",null);t.exports=i.exports},78:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),o=n.n(i),a=n(137),s=n.n(a),r=n(11);e.default={data:function(){return{toast:!1}},components:{Player:s.a},computed:o()({},n.i(r.a)(["songList","showDetail"]))}},79:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),o=n.n(i),a=n(11),s=n(59),r=n.n(s),u=n(58),c=n.n(u);e.default={data:function(){return{loadedTime:0,playerTime:0}},components:{Toast:r.a,BottomSheet:c.a},methods:o()({showDetail:function(){this.$router.push({name:"playerDetail",params:{id:this.audio.id}}),this.$store.commit("toggleDetail")},showList:function(){this.$refs.bottomSheet.show()}},n.i(a.b)(["play","pause","playNext"]),{canPlaySong:function(){},toggleStatus:function(){this.playing?(document.getElementById("audioPlay").pause(),this.$store.commit("pause")):(document.getElementById("audioPlay").play(),this.$store.commit("play"))},loadError:function(){document.getElementById("audioPlay").currentSrc?(this.$refs.toast.show("歌曲路径加载出错"),this.loading=!1,this.$store.commit("closeLoading")):console.log("APP 程序第一次加载")},next:function(){this.toggleStatus(),this.$store.commit("playNext")},updateTime:function(){var t=this,e=document.getElementById("audioPlay"),n=parseInt(e.currentTime);e.onsuspend=function(){e.buffered.length>0&&e.duration>0&&t.$store.commit("updateBufferedTime",parseInt(e.buffered.end(0)))},t.$store.commit("updateDurationTime",parseInt(e.duration)),this.change?(e.currentTime=this.tmpCurrentTime,this.$store.commit("setChange",!1)):this.$store.commit("updateCurrentTime",n)}}),computed:o()({},n.i(a.a)(["audio","change","playing","loading","currentTime","tmpCurrentTime"]),n.i(a.c)(["prBufferedTime","prCurrentTime"]))}},80:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),o=n.n(i),a=n(11);e.default={name:"list",data:function(){return{bottomSheet:!1}},methods:{closeBottomSheet:function(){this.bottomSheet=!1,document.querySelector(".playList")&&(document.querySelector(".playList").style.position="static")},show:function(){this.bottomSheet=!0,document.querySelector(".playList")&&(document.querySelector(".playList").style.position="fixed")},play:function(t){this.$store.commit("setAudioIndex",t)},remove:function(t){this.$store.commit("removeAudio",t)}},computed:o()({},n.i(a.a)(["songList","audio"]))}},81:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={name:"toast",data:function(){return{text:"",showing:!1,timer:null}},methods:{show:function(t,e){var n=this;this.text=t,this.showing=!0,this.timer&&clearInterval(this.timer),this.timer=setTimeout(function(){n.showing=!1},e||2e3)}}}},82:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),o=n(50),a=n(51),s=n(28),r=n.n(s),u=n(49),c=n(53),l=(n.n(c),n(56)),d=n.n(l),m=n(52),p=(n.n(m),n(54)),f=(n.n(p),n(55));n.n(f);i.default.prototype.$http=u.a,i.default.use(d.a),i.default.component(f.Button.name,f.Button),new i.default({el:"#app",router:o.a,store:a.a,render:function(t){return t(r.a)}})},83:function(t,e,n){"use strict";var i=n(34),o=n(18),a=n.n(o),s=n(57);e.a={routerQuery:function(t,e){(0,t.commit)(i.a,e)},getSong:function(t,e){var n=t.commit;t.state;n("openLoading"),a.a.get(s.a.getSong(e)).then(function(t){var e=t.data.data[0].url;n("setAudio"),n("setLocation",e)}).catch(function(t){console.log(t),window.alert("获取歌曲信息出错！")})}}},84:function(t,e,n){"use strict";e.a={prCurrentTime:function(t){return t.currentTime/t.durationTime*100},prBufferedTime:function(t){return t.bufferedTime/t.durationTime*100}}},85:function(t,e,n){"use strict";var i,o=n(89),a=n.n(o),s=n(34);e.a=(i={},a()(i,s.a,function(t,e){t.count+=e}),a()(i,"play",function(t){t.playing=!0}),a()(i,"pause",function(t){t.playing=!1}),a()(i,"toggleDetail",function(t){t.showDetail=!t.showDetail}),a()(i,"setAudio",function(t){t.audio=t.songList[t.currentIndex-1]}),a()(i,"setAudioIndex",function(t,e){t.audio=t.songList[e],t.currentIndex=e+1,console.log("当前播放的歌曲信息",t.audio),console.log("当前播放的是第"+t.currentIndex+"首歌曲")}),a()(i,"removeAudio",function(t,e){console.log(e),console.log(t.songList),console.log(t.currentIndex),t.songList.splice(e,1),console.log(t.songList),console.log(t.currentIndex),e==t.currentIndex-1&&(e===t.songList.length&&(e=0),t.audio=t.songList[e],t.currentIndex=e+1),0===t.songList.length&&(t.audio={id:0,name:"歌曲名称",singer:"演唱者",albumPic:"/static/player-bar.png",location:"",album:""},t.playing=!1)}),a()(i,"setChange",function(t,e){t.change=e}),a()(i,"setLocation",function(t,e){t.audio.location=e}),a()(i,"updateCurrentTime",function(t,e){t.currentTime=e}),a()(i,"updateDurationTime",function(t,e){t.durationTime=e}),a()(i,"updateBufferedTime",function(t,e){t.bufferedTime=e}),a()(i,"changeTime",function(t,e){t.tmpCurrentTime=e}),a()(i,"openLoading",function(t){t.loading=!0}),a()(i,"closeLoading",function(t){t.loading=!1}),a()(i,"resetAudio",function(t){t.currentTime=0}),a()(i,"playNext",function(t){t.currentIndex++,t.currentIndex>t.songList.length&&(t.currentIndex=1),t.audio=t.songList[t.currentIndex-1]}),a()(i,"playPrev",function(t){t.currentIndex--,t.currentIndex<1&&(t.currentIndex=t.songList.length),t.audio=t.songList[t.currentIndex-1]}),a()(i,"addToList",function(t,e){Array.prototype.concat.call(e).forEach(function(e){var n=!1;t.songList.forEach(function(i,o){i.id===e.id&&(n=!0,t.currentIndex=o+1)}),n||(t.songList.push(e),t.currentIndex=t.songList.length)})}),a()(i,"setLrc",function(t,e){t.lyric=e}),i)}},[82]);
//# sourceMappingURL=app.a28194b8319a5ffff2a7.js.map