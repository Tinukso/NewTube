(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57b9cdc0"],{"14ad":function(t,e,i){"use strict";var a=i("8336"),s=i("b0af"),o=i("62ad"),n=i("0fd9"),r=(i("14d9"),function(){var t=this,e=t._self._c;return e(n["a"],{attrs:{justify:"center",align:"center"}},[e(o["a"],{attrs:{cols:"12"}},[e(s["a"],{staticClass:"mx-auto",attrs:{"max-width":"500"}},[e(n["a"],{attrs:{justify:"center"}},[e(o["a"],{staticStyle:{"text-align":"center"},attrs:{cols:"10"}},[t._v(" 你还没有登录，请登录后查看 ")])],1),e(n["a"],{attrs:{justify:"center"}},[e(o["a"],{staticStyle:{"text-align":"center"},attrs:{cols:"10"}},[e(a["a"],{attrs:{"x-large":"",outlined:"",color:"indigo"},on:{click:()=>this.$router.push("/login")}},[t._v("登录")])],1)],1)],1)],1)],1)}),l=[],c={name:"NoLoginShow"},d=c,u=i("2877"),p=Object(u["a"])(d,r,l,!1,null,null,null);e["a"]=p.exports},4342:function(t,e,i){"use strict";i.r(e);var a=i("62ad"),s=i("a523"),o=i("ce7e"),n=i("891e"),r=i("0fd9"),l=function(){var t=this,e=t._self._c;return e(s["a"],{attrs:{"fill-height":""}},[null==this.$store.state.userInfo?e("NoLoginShow"):e("div",[e(r["a"],[e(a["a"],[e("h3",[t._v("播放历史")])])],1),e(r["a"],[e(a["a"],[e(o["a"])],1)],1),e(r["a"],t._l(t.videoList,(function(t){return e(a["a"],{key:t.id,attrs:{cols:"12"}},[e("HistoryCard",{attrs:{video:t}})],1)})),1),e(r["a"],{attrs:{justify:"center"}},[e(n["a"],{attrs:{length:t.length},on:{input:t.pageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1),e(a["a"],[t._v("   ")])],1)},c=[],d=i("14ad"),u=i("cc20"),p=i("adda"),h=function(){var t=this,e=t._self._c;return e(r["a"],[e(a["a"],{attrs:{cols:"3"}},[e("router-link",{attrs:{to:`/video/${t.video.articleEntity.id}?seek=${t.video.playRecordingEntity.videoTime}`}},[e(p["a"],{staticClass:"white--text align-end",attrs:{src:t.video.articleEntity.imgUrl,"aspect-ratio":"1.77","max-width":"400"}},[e("span",{staticStyle:{"background-color":"rgba(0,0,0,0.4)","border-radius":"5px"}},[t._v(" "+t._s(t.TimeUtil.timeCover(t.videoInfo.articleEntity.duration))+" ")])])],1)],1),e(a["a"],[e(r["a"],[e("router-link",{attrs:{to:`/video/${t.video.articleEntity.id}?seek=${t.video.playRecordingEntity.videoTime}`}},[e("h3",[t._v(t._s(t.video.articleEntity.title))])])],1),e(r["a"],{staticStyle:{color:"#606060","fount-size":"12px"}},[e("strong",[t._v("观看到： "+t._s(t.TimeUtil.timeCover(t.video.playRecordingEntity.videoTime))+" ")]),t._v("    播放时间："+t._s(t.TimeUtil.renderTime(t.video.playRecordingEntity.updateTime))+" ")]),e(r["a"],{staticStyle:{color:"#606060","fount-size":"12px"}},[e("span",{staticStyle:{"margin-top":"8px"}},[t._v("播放设备： ")]),e(u["a"],{staticClass:"ma-2",attrs:{color:"primary",small:""}},[t._v(" "+t._s(t.getUaInfo(t.video.playRecordingEntity.ua))+" ")])],1),e(r["a"],{staticStyle:{color:"#606060","fount-size":"12px"}},[t._v(" "+t._s(t.video.articleEntity.describes)+" ")])],1)],1)},v=[],g=i("9878"),y=i("2b80"),m={name:"History",props:{video:{type:Object,default:()=>{}}},data(){return{parser:y,TimeUtil:g["a"],videoInfo:this.video}},methods:{getUaInfo(t){const e=y(t);return`操作系统：${e.os.name} ${e.os.version} 浏览器：${e.browser.name} ${e.browser.major}`}}},f=m,_=i("2877"),b=Object(_["a"])(f,h,v,!1,null,null,null),x=b.exports,T={name:"History",components:{NoLoginShow:d["a"],HistoryCard:x},data(){return{videoList:[],page:1,size:20,length:1}},created(){this.init()},methods:{init(){fetch(`/api/user/playrecording/list?page=${this.page}&limit=${this.size}`,{headers:{"Content-Type":"application/json; charset=UTF-8","X-XSRF-TOKEN":this.$cookies.get("XSRF-TOKEN")},method:"GET",credentials:"include"}).then(t=>t.json()).then(t=>{this.videoList=t.data.list,this.page=t.data.currPage,this.length=t.data.totalPage}).catch(t=>null)},pageChange(t){this.page=t,this.init(this.type),this.$vuetify.goTo(0)}}},w=T,E=Object(_["a"])(w,l,c,!1,null,null,null);e["default"]=E.exports}}]);