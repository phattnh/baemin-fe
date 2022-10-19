"use strict";(self.webpackChunkbaemin_fe=self.webpackChunkbaemin_fe||[]).push([[972],{3917:function(t,e,r){function n(t){return function(e){var r=(n=(0,u.q)()).isLoggedIn,n=n.userInfo,i=(0,a.TH)();return r?(r=e.children,e.userRole!==n.role&&"/"!==i.pathname?(0,c.jsx)(a.Fg,{to:"/",replace:!0}):(0,c.jsx)(t,(0,o.Z)((0,o.Z)({},(0,o.Z)({},e)),{},{children:r}))):(0,c.jsx)(a.Fg,{to:"/login",replace:!0})}}r.d(e,{Kf:function(){return i}});var o=r(1413),u=r(6885),a=(r(2791),r(7689)),c=r(184),i=n((function(t){return t.children}));n((function(t){return t.children}))},5824:function(t,e,r){r.d(e,{V:function(){return n}});var n={PUBLIC_URL:".",ASSETS_PATH:"".concat(".","/assets"),REACT_APP_API_DOMAIN_URL:"https://baemin-api.herokuapp.com/api",PORT:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_DOMAIN_URL:"https://baemin-api.herokuapp.com/api"}.PORT||8080,REACT_APP_WS_PATH:{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_DOMAIN_URL:"https://baemin-api.herokuapp.com/api"}.REACT_APP_WS_PATH||""}},7928:function(t,e,r){var n=r(1413),o=r(5671),u=r(3144);r=function(){function t(e){e=e.baseURL,(0,o.Z)(this,t),this.baseURL=void 0,this.controller=void 0,this.requestInit=void 0,this.baseURL=e,this.controller=new AbortController,this.requestInit={cache:"no-cache",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","Access-Control-Allow-Headers":"*"},credentials:"same-origin",redirect:"follow",referrerPolicy:"no-referrer"}}return(0,u.Z)(t,[{key:"get",value:function(t){var e=this.controller.signal;return fetch("".concat(this.baseURL,"/").concat(t),(0,n.Z)((0,n.Z)({},this.requestInit),{},{method:"GET",signal:e})).then((function(t){return t.json()})).catch((function(t){throw new Error(t)}))}},{key:"post",value:function(t,e){var r=this.controller.signal;return fetch("".concat(this.baseURL,"/").concat(t),(0,n.Z)((0,n.Z)({},this.requestInit),{},{method:"POST",body:JSON.stringify(e),signal:r})).then((function(t){return t.json()})).catch((function(t){throw new Error(t)}))}},{key:"put",value:function(t,e){var r=this.controller.signal;return fetch("".concat(this.baseURL,"/").concat(t),(0,n.Z)((0,n.Z)({},this.requestInit),{},{method:"PUT",body:JSON.stringify(e),signal:r})).then((function(t){return t.json()})).catch((function(t){throw new Error(t)}))}},{key:"patch",value:function(t,e){var r=this.controller.signal;return fetch("".concat(this.baseURL,"/").concat(t),(0,n.Z)((0,n.Z)({},this.requestInit),{},{method:"PATCH",body:JSON.stringify(e),signal:r})).then((function(t){return t.json()})).catch((function(t){throw new Error(t)}))}},{key:"delete",value:function(t,e){var r=this.controller.signal;return fetch("".concat(this.baseURL,"/").concat(t),(0,n.Z)((0,n.Z)({},this.requestInit),{},{method:"DELETE",body:JSON.stringify(e),signal:r})).then((function(t){return t.json()})).catch((function(t){throw new Error(t)}))}},{key:"abort",value:function(){this.controller.abort()}}]),t}();e.Z=r},7972:function(t,e,r){function n(){var t=void 0===(t=(0,u.KS)().data)?[]:t;return(0,a.jsx)("div",{children:t.map((function(t){return(0,a.jsx)("div",{children:t.customerName})}))})}r.r(e),r.d(e,{default:function(){return c}});var o=r(3917),u=r(6098),a=(e=r(2791),r(184)),c=e.memo((function(){return(0,a.jsx)(o.Kf,{userRole:"admin",children:(0,a.jsx)(n,{})})}))},208:function(t,e,r){r.d(e,{q:function(){return u}});var n=r(1413),o=(e=r(885),r=r(1113),{isLoggedIn:!1,userInfo:{id:"-1",username:"",password:"",role:"guest",name:""}}),u=(r=(0,r.D)((function(t,e){return(0,n.Z)((0,n.Z)({},o),{},{actionLoggedIn:function(e){return t({userInfo:e,isLoggedIn:!0})},actionLogout:function(){return t((0,n.Z)({},o))}})}),"useAuthenStore"),(0,e.Z)(r,1)[0])},6885:function(t,e,r){r.d(e,{q:function(){return n.q}});var n=r(208)},5590:function(t,e,r){r.d(e,{LV:function(){return h},zk:function(){return p}});var n=r(4165),o=r(5861),u=r(5671),a=r(3144),c=r(9073),i=function(){function t(e){(0,u.Z)(this,t),this.database=void 0,this.db=void 0,this.database=e}var e,r,i,s,f,d,h,p,l;return(0,a.Z)(t,[{key:"createObjectStore",value:(l=(0,o.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.X3(this.database,1,{upgrade:function(t){e.forEach((function(e){t.objectStoreNames.contains(e)||t.createObjectStore(e,{autoIncrement:!0,keyPath:"id"})}))}});case 2:return this.db=t.sent,t.abrupt("return",this);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"getRecord",value:(p=(0,o.Z)((0,n.Z)().mark((function t(e,r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(o=(o=this.db).transaction(e,"readonly")).objectStore(e),t.next=5,o.get(r);case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),t,this)}))),function(t,e){return p.apply(this,arguments)})},{key:"getAllRecord",value:(h=(0,o.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(r=(r=this.db).transaction(e,"readonly")).objectStore(e),t.next=5,r.getAll();case 5:if(t.t0=t.sent,t.t0){t.next=8;break}t.t0=[];case 8:return r=t.t0,t.abrupt("return",r);case 10:case"end":return t.stop()}}),t,this)}))),function(t){return h.apply(this,arguments)})},{key:"addRecord",value:(d=(0,o.Z)((0,n.Z)().mark((function t(e,r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(o=(o=this.db).transaction(e,"readwrite")).objectStore(e),t.next=5,o.add(r);case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),t,this)}))),function(t,e){return d.apply(this,arguments)})},{key:"addRecordByKey",value:(f=(0,o.Z)((0,n.Z)().mark((function t(e,r,o){var u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=(u=(u=this.db).transaction(e,"readwrite")).objectStore(e),t.next=5,u.add(r,o);case 5:return u=t.sent,t.abrupt("return",u);case 7:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return f.apply(this,arguments)})},{key:"putBulkRecord",value:(s=(0,o.Z)((0,n.Z)().mark((function t(e,r){var o,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=(u=this.db).transaction(e,"readwrite"),o=u.objectStore(e),u=r.map((function(t){return o.add(t)})),t.next=6,Promise.all(u);case 6:return t.abrupt("return",this.getAllRecord(e));case 7:case"end":return t.stop()}}),t,this)}))),function(t,e){return s.apply(this,arguments)})},{key:"updateByKey",value:(i=(0,o.Z)((0,n.Z)().mark((function t(e,r){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(o=(o=this.db).transaction(e,"readwrite")).objectStore(e),t.next=5,o.put(r);case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),t,this)}))),function(t,e){return i.apply(this,arguments)})},{key:"deleteRecord",value:(r=(0,o.Z)((0,n.Z)().mark((function t(e,r){var o,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(o=(o=this.db).transaction(e,"readwrite")).objectStore(e),t.next=5,o.get(r);case 5:if(u=t.sent){t.next=8;break}return t.abrupt("return",u);case 8:return t.next=10,o.delete(r);case 10:return t.abrupt("return",r);case 11:case"end":return t.stop()}}),t,this)}))),function(t,e){return r.apply(this,arguments)})},{key:"clearTable",value:(e=(0,o.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(r=(r=this.db).transaction(e,"readwrite")).objectStore(e),t.next=5,r.clear();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),t}(),s="order",f="baemin-".concat(s),d=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e,r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new i(f),r=[s],t.next=4,e.createObjectStore(r);case 4:return e=t.sent,t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:return r=t.sent,t.next=5,r.addRecord(s,e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:return e=t.sent,t.next=5,e.getAllRecord(s);case 5:return e=t.sent,t.abrupt("return",e||[]);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},8286:function(t,e,r){r.d(e,{KS:function(){return d},hQ:function(){return f},xv:function(){return h}});var n=r(4165),o=r(5861),u=r(7408),a=(e=r(7892),r.n(e)),c=r(6885),i=r(5590),s=r(1087),f=function(){var t=(0,u.useQueryClient)();return(0,u.useMutation)(function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s._)(e);case 2:return r=(r=t.sent).data,t.next=6,(0,i.LV)(r);case 6:return t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{onSuccess:function(e){console.log("order here",e),t.invalidateQueries(["order-history"])}})},d=function(){return(0,u.useQuery)({queryKey:["order-history"],queryFn:function(){return(0,i.zk)()}})},h=function(){var t=(0,c.q)().userInfo,e=d().data;return{orders:(void 0===e?[]:e).filter((function(e){return e.userId===t.id})).sort((function(t,e){return a()(t.createdTime).isBefore(e.createdTime)?1:-1}))}}},1087:function(t,e,r){r.d(e,{_:function(){return o}});e=r(5824);var n=new(r(7928).Z)({baseURL:"".concat(e.V.REACT_APP_API_DOMAIN_URL,"/order")}),o=function(t){return n.put("",t)}},6098:function(t,e,r){r.d(e,{KS:function(){return n.KS},xv:function(){return n.xv}}),r(5590),r(1087);var n=r(8286)}}]);