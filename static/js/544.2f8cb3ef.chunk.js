"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{290:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(643),a=e(184),c=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#0a6344",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},wrapperClassName:"",visible:!0})}},174:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(731),a=e(739),c=e(184),u=function(n){var t=n.movies,e=(0,a.TH)();return(0,c.jsx)("ul",{children:t&&t.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},544:function(n,t,e){e.r(t);var r=e(861),a=e(885),c=e(757),u=e.n(c),i=e(791),s=e(414),o=e(290),p=e(174),f=e(184);t.default=function(){var n=(0,i.useState)(null),t=(0,a.Z)(n,2),e=t[0],c=t[1],l=(0,i.useState)([]),v=(0,a.Z)(l,2),d=v[0],h=v[1],m=(0,i.useState)(!1),x=(0,a.Z)(m,2),g=x[0],w=x[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),n.prev=1,n.next=4,(0,s.JN)();case 4:t=n.sent,h(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),c(n.t0);case 11:return n.prev=11,w(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)("main",{children:[e&&(0,f.jsx)("p",{children:"Whoops, something went wrong..."}),(0,f.jsx)("h1",{children:"Trending today:"}),g&&(0,f.jsx)(o.Z,{}),d&&(0,f.jsx)(p.Z,{movies:d})]})}},414:function(n,t,e){e.d(t,{JN:function(){return o},M1:function(){return l},TP:function(){return f},tx:function(){return v},z1:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(44),i="93fca4687d78764c2a220d92f59e9e96",s="https://api.themoviedb.org/3/",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(s,"trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(s,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(s,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.2f8cb3ef.chunk.js.map