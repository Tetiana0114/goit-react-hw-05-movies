"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[234],{290:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(643),a=n(184),c=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#0a6344",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},wrapperClassName:"",visible:!0})}},234:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(885),c=n(757),u=n.n(c),s=n(791),i=n(739),o=n(414),p=n(290),f="Reviews_list__okdpy",l="Reviews_author__CqYAZ",h="Reviews_text__EqLvx",v=n(184),d=function(){var e=(0,s.useState)(null),t=(0,a.Z)(e,2),n=t[0],c=t[1],d=(0,s.useState)([]),x=(0,a.Z)(d,2),w=x[0],m=x[1],g=(0,s.useState)(!1),k=(0,a.Z)(g,2),_=k[0],y=k[1],Z=(0,i.UO)().movieId,b=0===w.length;return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,(0,o.tx)(Z);case 4:t=e.sent,m(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c(e.t0);case 11:return e.prev=11,y(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]),(0,v.jsxs)("div",{children:[n&&(0,v.jsx)("p",{children:"Whoops, something went wrong..."}),_&&(0,v.jsx)(p.Z,{}),b?(0,v.jsx)("p",{className:h,children:"We don't have any reviews for this movie."}):(0,v.jsx)("ul",{className:f,children:w.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsxs)("h3",{children:["Author: ",(0,v.jsx)("span",{className:l,children:e.author})]}),(0,v.jsx)("p",{children:e.content})]},e.id)}))})]})}},414:function(e,t,n){n.d(t,{JN:function(){return o},M1:function(){return l},TP:function(){return f},tx:function(){return h},z1:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(44),s="93fca4687d78764c2a220d92f59e9e96",i="https://api.themoviedb.org/3/",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(i,"trending/movie/day?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(i,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(i,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=234.94ec24fb.chunk.js.map