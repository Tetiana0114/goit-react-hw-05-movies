"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[275],{275:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),a=n(885),c=n(757),u=n.n(c),s=n(791),i=n(739),o=n(414),p=n(290),f={list:"Cast_list__GlWio",text:"Cast_text__P2vgu"},l=n(184),h=function(){var t=(0,s.useState)(null),e=(0,a.Z)(t,2),n=e[0],c=e[1],h=(0,s.useState)([]),d=(0,a.Z)(h,2),v=d[0],m=d[1],x=(0,s.useState)(!1),g=(0,a.Z)(x,2),w=g[0],k=g[1],_=(0,i.UO)().movieId,y=0===v.length;(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k(!0),t.prev=1,t.next=4,(0,o.M1)(_);case 4:e=t.sent,m(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),c(t.t0);case 11:return t.prev=11,k(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[_]);return(0,l.jsxs)("div",{children:[n&&(0,l.jsx)("p",{children:"Whoops, something went wrong..."}),w&&(0,l.jsx)(p.Z,{}),y?(0,l.jsx)("p",{className:f.text,children:"We don't have cast for this movie."}):(0,l.jsx)("ul",{className:f.list,children:v.map((function(t){return(0,l.jsxs)("li",{className:f.list_item,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+t.profile_path,alt:"",width:"120px"}),(0,l.jsx)("h3",{children:t.name}),(0,l.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})]})}},290:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(643),a=n(184),c=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#0a6344",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},wrapperClassName:"",visible:!0})}},414:function(t,e,n){n.d(e,{JN:function(){return o},M1:function(){return l},TP:function(){return f},tx:function(){return h},z1:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(44),s="93fca4687d78764c2a220d92f59e9e96",i="https://api.themoviedb.org/3/",o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(i,"trending/movie/day?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(i,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(i,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=275.5abc9fde.chunk.js.map