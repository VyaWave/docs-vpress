(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{168:function(t,s,i){},226:function(t,s,i){t.exports=i.p+"assets/img/play.4615e8bc.svg"},227:function(t,s,i){t.exports=i.p+"assets/img/pause.a4ca21bf.svg"},228:function(t,s,i){"use strict";i(168)},237:function(t,s,i){"use strict";i.r(s);const a=i(226),e=i(227);var o={data:()=>({audio:null,playing:!1}),computed:{icon(){return this.playing?e:a}},methods:{loadMusic(){this.audio||(this.audio=document.getElementById("bg-music"));const t=()=>{this.audio&&"function"==typeof this.audio.play&&this.audio.play().catch(t=>{console.log("%c     ","background-image: url('http://media0.giphy.com/media/MOWPkhRAUbR7i/giphy.gif'); background-repeat: no-repeat; background-size: 250px 113px; font-size: 113px;","Relaxed, There Is No Error, Just Need Some User Touch!",t)}),this.playing=!0,document.body.removeEventListener("click",t)};document.body.addEventListener("click",t)},musicHandler(){this.audio&&(this.playing?(this.audio.pause(),this.playing=!1):(this.audio.play(),this.playing=!0))}},mounted(){this.loadMusic()}},n=(i(228),i(4)),c=Object(n.a)(o,(function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"music-player"},[s("img",{staticClass:"playerComtrols",attrs:{src:this.icon},on:{click:this.musicHandler}}),this._v(" "),s("audio",{staticClass:"bg-music",attrs:{id:"bg-music",controls:"false",autoplay:"autoplay",loop:"",download:"false"}},[s("source",{attrs:{src:this.$withBase("/time-travel.mp3")}})])])}),[],!1,null,"1304f298",null);s.default=c.exports}}]);