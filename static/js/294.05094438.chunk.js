"use strict";(self.webpackChunkbaemin_fe=self.webpackChunkbaemin_fe||[]).push([[294],{1017:function(e,t,n){function r(e){var t=e.className,n=e.isCenterAbsolute;e=(0,i.Z)(e,a);return(0,c.jsx)("div",(0,o.Z)((0,o.Z)({className:"".concat(n&&"h-8 flex items-center justify-center"," ").concat(t)},e),{},{children:(0,c.jsx)("i",{className:"fa-solid fa-spinner fa-spin-pulse fa-xl text-primary-color"})}))}var o=n(1413),i=n(4925),s=n(2791),c=n(184),a=["className","isCenterAbsolute"];r.defaultProps={className:"",isCenterAbsolute:!0},t.Z=s.memo(r)},3917:function(e,t,n){function r(e){return function(t){var n=(r=(0,i.q)()).isLoggedIn,r=r.userInfo,a=(0,s.TH)();return n?(n=t.children,t.userRole!==r.role&&"/"!==a.pathname?(0,c.jsx)(s.Fg,{to:"/",replace:!0}):(0,c.jsx)(e,(0,o.Z)((0,o.Z)({},(0,o.Z)({},t)),{},{children:n}))):(0,c.jsx)(s.Fg,{to:"/login",replace:!0})}}n.d(t,{Kf:function(){return a}});var o=n(1413),i=n(6885),s=(n(2791),n(7689)),c=n(184),a=r((function(e){return e.children}));r((function(e){return e.children}))},5824:function(e,t,n){n.d(t,{V:function(){return r}});var r={PUBLIC_URL:".",ASSETS_PATH:"".concat(".","/assets"),REACT_APP_API_DOMAIN_URL:"https://baemin-api.herokuapp.com/api",PORT:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_DOMAIN_URL:"https://baemin-api.herokuapp.com/api"}.PORT||8080,REACT_APP_WS_PATH:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_DOMAIN_URL:"https://baemin-api.herokuapp.com/api"}.REACT_APP_WS_PATH||""}},7928:function(e,t,n){var r=n(1413),o=n(5671),i=n(3144);n=function(){function e(t){t=t.baseURL,(0,o.Z)(this,e),this.baseURL=void 0,this.controller=void 0,this.requestInit=void 0,this.baseURL=t,this.controller=new AbortController,this.requestInit={cache:"no-cache",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","Access-Control-Allow-Headers":"*"},credentials:"same-origin",redirect:"follow",referrerPolicy:"no-referrer"}}return(0,i.Z)(e,[{key:"get",value:function(e){var t=this.controller.signal;return fetch("".concat(this.baseURL,"/").concat(e),(0,r.Z)((0,r.Z)({},this.requestInit),{},{method:"GET",signal:t})).then((function(e){return e.json()})).catch((function(e){throw new Error(e)}))}},{key:"post",value:function(e,t){var n=this.controller.signal;return fetch("".concat(this.baseURL,"/").concat(e),(0,r.Z)((0,r.Z)({},this.requestInit),{},{method:"POST",body:JSON.stringify(t),signal:n})).then((function(e){return e.json()})).catch((function(e){throw new Error(e)}))}},{key:"put",value:function(e,t){var n=this.controller.signal;return fetch("".concat(this.baseURL,"/").concat(e),(0,r.Z)((0,r.Z)({},this.requestInit),{},{method:"PUT",body:JSON.stringify(t),signal:n})).then((function(e){return e.json()})).catch((function(e){throw new Error(e)}))}},{key:"patch",value:function(e,t){var n=this.controller.signal;return fetch("".concat(this.baseURL,"/").concat(e),(0,r.Z)((0,r.Z)({},this.requestInit),{},{method:"PATCH",body:JSON.stringify(t),signal:n})).then((function(e){return e.json()})).catch((function(e){throw new Error(e)}))}},{key:"delete",value:function(e,t){var n=this.controller.signal;return fetch("".concat(this.baseURL,"/").concat(e),(0,r.Z)((0,r.Z)({},this.requestInit),{},{method:"DELETE",body:JSON.stringify(t),signal:n})).then((function(e){return e.json()})).catch((function(e){throw new Error(e)}))}},{key:"abort",value:function(){this.controller.abort()}}]),e}();t.Z=n},208:function(e,t,n){n.d(t,{q:function(){return i}});var r=n(1413),o=(t=n(885),n=n(1113),{isLoggedIn:!1,userInfo:{id:"-1",username:"",password:"",role:"guest",name:""}}),i=(n=(0,n.D)((function(e,t){return(0,r.Z)((0,r.Z)({},o),{},{actionLoggedIn:function(t){return e({userInfo:t,isLoggedIn:!0})},actionLogout:function(){return e((0,r.Z)({},o))}})}),"useAuthenStore"),(0,t.Z)(n,1)[0])},6885:function(e,t,n){n.d(t,{q:function(){return r.q}});var r=n(208)},1294:function(e,t,n){function r(){return(0,a.jsx)("div",{children:"Welcome to baemin!"})}function o(){switch((0,s.q)().userInfo.role){case"customer":return(0,a.jsx)(_,{});case"admin":return(0,a.jsx)(f,{});default:return(0,a.jsx)(r,{})}}n.r(t),n.d(t,{default:function(){return j}});var i=n(3917),s=n(6885),c=(t=n(2791),n(6731)),a=n(184),u=t.memo((function(){return(0,a.jsx)(c.rU,{to:"/setting",children:(0,a.jsx)("i",{className:"fa-solid fa-bars text-lg"})})})),l=t.memo((function(e){return e=e.leftTitle,(0,a.jsxs)("div",{className:"flex gap-4 p-2 justify-between items-center",children:[(0,a.jsxs)("div",{className:"grid gap-2 items-center location",children:[(0,a.jsx)("i",{className:"fa-solid fa-location-dot text-primary-color text-base"}),(0,a.jsx)("div",{className:"text-base font-medium",children:e})]}),(0,a.jsxs)("div",{className:"grid gap-4 grid-cols-2",children:[(0,a.jsx)(c.rU,{to:"/message",children:(0,a.jsx)("i",{className:"fa-regular fa-envelope text-lg"})}),(0,a.jsx)(u,{})]})]})})),f=t.memo((function(){return(0,a.jsx)("div",{children:(0,a.jsx)(l,{leftTitle:"Admin page"})})})),d=n(1017),h=n(4165),m=n(5861),g=n(7408),p=n(5824),v=new(n(7928).Z)({baseURL:"".concat(p.V.REACT_APP_API_DOMAIN_URL,"/category")}),x=t.memo((function(){var e,t=(0,g.useQuery)({queryFn:(e=(0,m.Z)((0,h.Z)().mark((function e(){var t;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),queryKey:["categories"]}),n=t.isLoading;t=void 0===(t=t.data)?[]:t;return(0,a.jsxs)("div",{className:"grid grid-cols-4 gap-4 items-center justify-center mt-4",children:[n&&(0,a.jsx)(d.Z,{}),t.map((function(e){var t=e.id,n=e.name;e=e.imgURL;return(0,a.jsxs)(c.rU,{className:"",to:"/merchant?categoryId=".concat(t),children:[(0,a.jsx)("div",{className:"h-24",children:(0,a.jsx)("img",{src:e,alt:n})}),(0,a.jsx)("div",{className:"text-center",children:n})]},t)}))]})})),_=t.memo((function(){return(0,a.jsxs)("div",{className:"home-page",children:[(0,a.jsx)(l,{leftTitle:"Topaz City"}),(0,a.jsx)(x,{})]})})),j=t.memo((function(){return(0,a.jsx)(i.Kf,{userRole:"customer",children:(0,a.jsx)(o,{})})}))}}]);