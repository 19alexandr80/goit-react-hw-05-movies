"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{443:function(e,r,t){t.d(r,{S:function(){return p}});var n=t(861),a=t(671),c=t(144),u=t(757),o=t.n(u),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="6d070ee2b82df1d970d23eca62ef69da",p=function(){function e(){(0,a.Z)(this,e)}return(0,c.Z)(e,[{key:"getAll",value:function(){var e=(0,n.Z)(o().mark((function e(){var r,t,n=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,s.Z.get("/trending/all/day?language=en-US/&api_key=".concat(i,"&page=").concat(r));case 4:return t=e.sent,e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getFilmId",value:function(){var e=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"?language=en-US/&api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},{key:"getCast",value:function(){var e=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits?language=en-US/&api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},{key:"getReviews",value:function(){var e=(0,n.Z)(o().mark((function e(r){var t,n,a=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.prev=1,e.next=4,s.Z.get("/movie/".concat(r,"/reviews?language=en-US/&api_key=").concat(i,"&page=").concat(t));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()},{key:"getMovies",value:function(){var e=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?query=".concat(r,"&include_adult=false&language=en-US/&api_key=").concat(i,"&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()}]),e}()},186:function(e,r,t){t.r(r);var n=t(861),a=t(439),c=t(757),u=t.n(c),o=t(791),s=t(689),i=t(443),p=t(184),l=new i.S;r.default=function(){var e=(0,o.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],i=(0,s.UO)();return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.getReviews(i.movieId);case 3:if(r=e.sent){e.next=7;break}return alert("sorry no information yet"),e.abrupt("return");case 7:c(r.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.messeng);case 13:return e.prev=13,e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[i.movieId]),(0,p.jsx)(p.Fragment,{children:0!==t.length?(0,p.jsx)("ul",{children:t.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:e.author}),(0,p.jsx)("p",{children:e.content})]},e.id)}))}):(0,p.jsx)("h3",{children:"Sorry no reviews yet"})})}}}]);
//# sourceMappingURL=186.9fb9ba29.chunk.js.map