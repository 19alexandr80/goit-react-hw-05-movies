"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{443:function(e,t,r){r.d(t,{S:function(){return p}});var n=r(861),a=r(671),c=r(144),u=r(757),o=r.n(u),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="6d070ee2b82df1d970d23eca62ef69da",p=function(){function e(){(0,a.Z)(this,e)}return(0,c.Z)(e,[{key:"getAll",value:function(){var e=(0,n.Z)(o().mark((function e(){var t,r,n=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,s.Z.get("/trending/all/day?language=en-US/&api_key=".concat(i,"&page=").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"getFilmId",value:function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"?language=en-US/&api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getCast",value:function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/credits?language=en-US/&api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getReviews",value:function(){var e=(0,n.Z)(o().mark((function e(t){var r,n,a=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.prev=1,e.next=4,s.Z.get("/movie/".concat(t,"/reviews?language=en-US/&api_key=").concat(i,"&page=").concat(r));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovies",value:function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?query=".concat(t,"&include_adult=false&language=en-US/&api_key=").concat(i,"&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},983:function(e,t,r){r.r(t);var n=r(433),a=r(861),c=r(439),u=r(757),o=r.n(u),s=r(791),i=r(689),p=r(87),l=r(443),v=r(184),f=new l.S;t.default=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),r=t[0],u=t[1],l=(0,i.TH)();return(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.getAll();case 3:t=e.sent,u((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(t.results))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.messeng);case 10:return e.prev=10,e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ul",{children:r.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(p.rU,{to:"/movies/".concat(e.id),state:{from:l},children:e.original_name?e.original_name:e.original_title})},e.id)}))})})}}}]);
//# sourceMappingURL=983.94a44669.chunk.js.map