(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[509],{381:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/protected",function(){return t(8315)}])},8315:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return d}});var r=t(5666),s=t.n(r),i=t(5893),c=t(7294),u=t(3299),o=t(6661);function a(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Access Denied"}),(0,i.jsx)("p",{children:(0,i.jsx)("a",{href:"/api/auth/signin",onClick:function(n){n.preventDefault(),(0,u.signIn)()},children:"You must be signed in to view this page"})})]})}function f(n,e,t,r,s,i,c){try{var u=n[i](c),o=u.value}catch(a){return void t(a)}u.done?e(o):Promise.resolve(o).then(r,s)}function d(){var n=(0,u.useSession)(),e=n.data,t="loading"===n.status,r=(0,c.useState)(),d=r[0],h=r[1];return(0,c.useEffect)((function(){var n;(n=s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/examples/protected");case 2:return e=n.sent,n.next=5,e.json();case 5:(t=n.sent).content&&h(t.content);case 7:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,s){var i=n.apply(e,t);function c(n){f(i,r,s,c,u,"next",n)}function u(n){f(i,r,s,c,u,"throw",n)}c(void 0)}))})()}),[e]),t?null:e?(0,i.jsxs)(o.Z,{children:[(0,i.jsx)("h1",{children:"Protected Page"}),(0,i.jsx)("p",{children:(0,i.jsx)("strong",{children:d||"\xa0"})})]}):(0,i.jsx)(o.Z,{children:(0,i.jsx)(a,{})})}}},function(n){n.O(0,[661,774,888,179],(function(){return e=381,n(n.s=e);var e}));var e=n.O();_N_E=e}]);