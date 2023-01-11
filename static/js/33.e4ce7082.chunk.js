"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{33:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var t,a,o,i,s,c,u,p,d,l,f,x=r(861),m=r(439),v=r(757),h=r.n(v),g=r(791),Z=r(689),b=r(390),w=r(483),j=r(168),k=r(444),y=r(87),P=k.ZP.main(t||(t=(0,j.Z)(["\n  padding: 48px 16px;\n  max-width: 1240px;\n  margin: 0 auto;\n"]))),_=(0,k.ZP)(y.rU)(a||(a=(0,j.Z)(["\n  display: inline-block;\n  padding: 6px 16px;\n  border: none;\n  border-radius: 5px;\n  background-color: #dc1818;\n  color: #000000;\n  cursor: pointer;\n  outline: none;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n\n  :hover,\n  :focus {\n    background-color: #dc1818;\n    color: #ffffff;\n  }\n"]))),U=k.ZP.div(o||(o=(0,j.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 30px;\n  margin-bottom: 32px;\n  @media (min-width: 480px) {\n    grid-template-columns: 200px 1fr;\n  }\n  @media (min-width: 768px) {\n    grid-template-columns: 300px 1fr;\n  }\n"]))),F=k.ZP.img(i||(i=(0,j.Z)(["\n  border-radius: 5px;\n"]))),C=k.ZP.h1(s||(s=(0,j.Z)(["\n  margin-bottom: 16px;\n"]))),N=k.ZP.p(c||(c=(0,j.Z)(["\n  display: inline-block;\n  margin-bottom: 16px;\n  background-color: #dc1818;\n  color: #ffffff;\n  padding: 2px 6px;\n  border-radius: 5px;\n"]))),R=k.ZP.h2(u||(u=(0,j.Z)(["\n  margin-bottom: 16px;\n"]))),S=k.ZP.p(p||(p=(0,j.Z)(["\n  margin-bottom: 16px;\n"]))),A=k.ZP.h3(d||(d=(0,j.Z)(["\n  margin-bottom: 16px;\n"]))),M=(0,k.ZP)(y.rU)(l||(l=(0,j.Z)(["\n  color: #000000;\n  display: inline-block;\n  margin-bottom: 16px;\n\n  :hover,\n  :focus {\n    color: #dc1818;\n  }\n"]))),O=k.ZP.p(f||(f=(0,j.Z)(["\n  padding: 32px 16px;\n  font-size: 32px;\n  text-align: center;\n  color: #dc1818;\n"]))),T=r(184);function z(){var n,e,r,t,a,o,i=(0,g.useState)({}),s=(0,m.Z)(i,2),c=s[0],u=s[1],p=(0,g.useState)(""),d=(0,m.Z)(p,2),l=d[0],f=d[1],v=(0,g.useState)(!1),j=(0,m.Z)(v,2),k=j[0],y=j[1],z=(0,Z.TH)();console.log(z.state);var D=(0,Z.UO)().movieId;(0,g.useEffect)((function(){if(D){var n=function(){var n=(0,x.Z)(h().mark((function n(){var e,r,t,a,o,i,s;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y(!0),n.prev=1,n.next=4,(0,b.Pg)(D);case 4:e=n.sent,r=e.poster_path,t=e.name,a=e.title,o=e.overview,i=e.genres,s=e.vote_average,u({poster_path:r,name:t||void 0,title:a||void 0,vote_average:s.toFixed(1),overview:o,genres:i.map((function(n){return n.name+" "}))}),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),f(n.t0.message);case 17:return n.prev=17,y(!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[1,14,17,20]])})));return function(){return n.apply(this,arguments)}}();n()}}),[D]);var G=l.length>0,q=c.poster_path,E=c.name,H=c.title,I=c.vote_average,J=c.overview,K=c.genres;return(0,T.jsx)(T.Fragment,{children:G?(0,T.jsxs)(O,{children:[(0,T.jsx)("p",{children:"File was not found!"}),(0,T.jsx)("p",{children:"Please, try again later!"})]}):(0,T.jsx)(P,{children:k?(0,T.jsx)(w.a,{}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(_,{to:null!==(n=null===(e=z.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go back"}),(0,T.jsxs)(U,{children:[(0,T.jsx)(F,{src:q?"https://image.tmdb.org/t/p/w500".concat(q):"https://media.istockphoto.com/id/1191001701/photo/popcorn-and-clapperboard.jpg?s=612x612&w=0&k=20&c=iUkFTVuU8k-UCcZDxczTWs6gkRa0nAMihp2Jf_2ASKM=",alt:E||H}),(0,T.jsxs)("div",{children:[(0,T.jsx)(C,{children:E||H||"No info"}),(0,T.jsxs)(N,{children:["Rating: ",I||"Not found"]}),(0,T.jsx)(R,{children:"Overview:"}),(0,T.jsx)(S,{children:J||"Not found"}),(0,T.jsx)(A,{children:"Genres:"}),(0,T.jsx)("p",{children:K||"Others"})]})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)(A,{children:"Additional information"}),(0,T.jsxs)("ul",{children:[(0,T.jsx)("li",{children:(0,T.jsx)(M,{to:"cast",state:{from:null!==(r=null===(t=z.state)||void 0===t?void 0:t.from)&&void 0!==r?r:"/"},children:"Cast"})}),(0,T.jsx)("li",{children:(0,T.jsx)(M,{to:"reviews",state:{from:null!==(a=null===(o=z.state)||void 0===o?void 0:o.from)&&void 0!==a?a:"/"},children:"Reviews"})})]})]}),(0,T.jsx)(Z.j3,{})]})})})}},390:function(n,e,r){r.d(e,{Df:function(){return s},M1:function(){return p},Pg:function(){return u},UN:function(){return c},tx:function(){return d}});var t=r(861),a=r(757),o=r.n(a),i=r(263);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"f785eee6664a474771b5bfb7f34a07af"};var s=function(){var n=(0,t.Z)(o().mark((function n(){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day",{params:{page:1}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie",{params:{query:e,page:1}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=33.e4ce7082.chunk.js.map