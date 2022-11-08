"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{290:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(643),a=n(184),c=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#0a6344",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},wrapperClassName:"",visible:!0})}},961:function(e,t,n){n.r(t);var r=n(861),a=n(885),c=n(757),s=n.n(c),i=n(791),u=n(739),o=n(731),l=n(414),p=n(290),d=n(184);t.default=function(){var e,t,n=(0,i.useState)(null),c=(0,a.Z)(n,2),h=c[0],f=c[1],v=(0,i.useState)(!1),x=(0,a.Z)(v,2),j=x[0],g=x[1],m=(0,i.useState)(null),w=(0,a.Z)(m,2),k=w[0],y=w[1],Z=(0,u.UO)().movieId,b=(0,u.TH)();return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,(0,l.TP)(Z);case 4:t=e.sent,y(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f(e.t0);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.rU,{to:null!==(e=null===b||void 0===b||null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies",children:(0,d.jsx)("button",{type:"button",children:"Go back"})}),h&&(0,d.jsx)("p",{children:"Whoops, something went wrong..."}),j&&(0,d.jsx)(p.Z,{}),k&&(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{width:"300px",src:"https://image.tmdb.org/t/p/w500"+k.poster_path,alt:k.title}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{children:[k.title," / ",k.release_date.slice(0,4)]}),(0,d.jsxs)("p",{children:['"',k.tagline,'"']}),(0,d.jsxs)("p",{children:["User Score: ",Math.round(k.popularity)]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:k.overview}),(0,d.jsx)("h2",{children:"Genres:"}),(0,d.jsx)("ul",{children:k.genres.map((function(e){return(0,d.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)("hr",{}),(0,d.jsx)(u.j3,{})]})]})}},414:function(e,t,n){n.d(t,{JN:function(){return o},M1:function(){return d},TP:function(){return p},tx:function(){return h},z1:function(){return l}});var r=n(861),a=n(757),c=n.n(a),s=n(44),i="93fca4687d78764c2a220d92f59e9e96",u="https://api.themoviedb.org/3/",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("".concat(u,"trending/movie/day?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("".concat(u,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("".concat(u,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=961.33c82ccd.chunk.js.map