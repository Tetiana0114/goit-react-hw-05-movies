"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[30],{290:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(643),a=n(184),s=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#0a6344",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},wrapperClassName:"",visible:!0})}},30:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(861),a=n(885),s=n(757),i=n.n(s),c=n(791),u=n(731),o=n(739),l=n(414),d=n(290),p="MovieDetails_btn__7L5IF",f="MovieDetails_btn_svg__ZXLWM",h="MovieDetails_info__qv2SI",v="MovieDetails_text_info__LkRJp",x="MovieDetails_highlighted_text__c3LcM",m="MovieDetails_list__dbNMP",_="MovieDetails_list_item__rcrs7",g=n(68),j="AdditionalInfo_list_item__hdr04",w="AdditionalInfo_title__T-xFI",k=n(184),y=function(){var e,t,n=(0,o.TH)();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h2",{className:w,children:"Additional information:"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{className:j,children:(0,k.jsx)(u.rU,{to:"cast",state:{from:null===(e=n.state)||void 0===e?void 0:e.from},children:"Cast"})}),(0,k.jsx)("li",{className:j,children:(0,k.jsx)(u.rU,{to:"reviews",state:{from:null===(t=n.state)||void 0===t?void 0:t.from},children:"Reviews"})})]}),(0,k.jsx)("hr",{})]})},b=function(){var e,t,n=(0,c.useState)(null),s=(0,a.Z)(n,2),j=s[0],w=s[1],b=(0,c.useState)(!1),Z=(0,a.Z)(b,2),N=Z[0],M=Z[1],S=(0,c.useState)(null),U=(0,a.Z)(S,2),P=U[0],D=U[1],I=(0,o.UO)().movieId,C=(0,o.TH)();(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.prev=1,e.next=4,(0,l.TP)(I);case 4:t=e.sent,D(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w(e.t0);case 11:return e.prev=11,M(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[I]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u.rU,{to:null!==(e=null===C||void 0===C||null===(t=C.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies",children:(0,k.jsx)("button",{type:"button",className:p,children:(0,k.jsx)(g.Umd,{size:32,className:f})})}),j&&(0,k.jsx)("p",{children:"Whoops, something went wrong..."}),N&&(0,k.jsx)(d.Z,{}),P&&(0,k.jsxs)("div",{className:h,children:[(0,k.jsx)("img",{width:"300px",src:"https://image.tmdb.org/t/p/w500"+P.poster_path,alt:P.title}),(0,k.jsxs)("div",{className:v,children:[(0,k.jsxs)("h1",{children:[P.title," / ",P.release_date.slice(0,4)]}),""!==P.tagline&&(0,k.jsxs)("p",{className:x,children:['"',P.tagline,'"']}),(0,k.jsxs)("p",{children:["User Score: ",(0,k.jsx)("span",{className:x,children:Math.round(P.popularity)})]}),(0,k.jsx)("h2",{children:"Overview"}),(0,k.jsx)("p",{children:P.overview}),(0,k.jsx)("h2",{children:"Genres:"}),(0,k.jsx)("ul",{className:m,children:P.genres.map((function(e){return(0,k.jsx)("li",{className:_,children:e.name},e.id)}))})]})]}),(0,k.jsx)("hr",{}),(0,k.jsxs)("div",{children:[(0,k.jsx)(y,{}),(0,k.jsx)(o.j3,{})]})]})}},414:function(e,t,n){n.d(t,{JN:function(){return o},M1:function(){return p},TP:function(){return d},tx:function(){return f},z1:function(){return l}});var r=n(861),a=n(757),s=n.n(a),i=n(44),c="93fca4687d78764c2a220d92f59e9e96",u="https://api.themoviedb.org/3/",o=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("".concat(u,"trending/movie/day?api_key=").concat(c));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("".concat(u,"search/movie?api_key=").concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("".concat(u,"movie/").concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=30.692c757e.chunk.js.map