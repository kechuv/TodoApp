(function(e){function t(t){for(var o,r,a=t[0],c=t[1],u=t[2],d=0,l=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==i[a]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i={app:0},s=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0f2dbc40":"577ebf37","chunk-3f947e1e":"0970d502","chunk-f14c515e":"94967518"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0f2dbc40":1,"chunk-3f947e1e":1,"chunk-f14c515e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-0f2dbc40":"1d97ac82","chunk-3f947e1e":"d694473a","chunk-f14c515e":"09e54930"}[e]+".css",i=c.p+o,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var u=s[a],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===i))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){u=l[a],d=u.getAttribute("data-href");if(d===o||d===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[e],f.parentNode.removeChild(f),n(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=a(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/TodoApp/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0361":function(e,t,n){"use strict";var o=n("92f9"),r=n.n(o);r.a},"3ef6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("NewVersion")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"newVersion"}},[e.updateExists?n("div",{attrs:{id:"refresh"},on:{click:e.refreshApp}},[n("span",[e._v("New version available! Click here to update.")])]):e._e()])},a=[],c={data:function(){return{refreshing:!1,registration:null,updateExists:!1}},created:function(){var e=this;document.addEventListener("swUpdated",this.showRefreshUI,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(function(){e.refreshing||(e.refreshing=!0,window.location.reload())}))},methods:{showRefreshUI:function(e){this.registration=e.detail,this.updateExists=!0},refreshApp:function(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage("skipWaiting")}}},u=c,d=(n("63db"),n("2877")),l=Object(d["a"])(u,s,a,!1,null,"103c716c",null),f=l.exports,p={components:{NewVersion:f}},h=p,v=(n("cf25"),Object(d["a"])(h,r,i,!1,null,null,null)),m=v.exports,g=n("2909"),T=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main"}},[n("main",{staticClass:"container"},[n("router-view")],1)])},w=[],O=(n("6d33"),{}),E=Object(d["a"])(O,b,w,!1,null,"87d1b316",null),_=E.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"todos"}},[e._m(0),n("div",{staticClass:"new-container"},[n("TodoForm",{attrs:{id:"new",label:"Add a Todo:"},on:{saveTodo:e.saveNewTodo}})],1),n("div",{staticClass:"todo-list"},[n("TodoFilters",{staticClass:"filters",attrs:{tabs:e.tabs,total:e.todoCounter},on:{newFilter:function(t){e.filter=t}}}),n("TodoList",{attrs:{todos:e.filterTodos},on:{editTodo:e.saveEditTodo,deleteTodo:e.deleteTodo}})],1)])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"repo-link"},[n("a",{staticClass:"link",attrs:{href:"https://github.com/kechuv/TodoApp",target:"_blank"}},[e._v("Repo @ Github")])])}],D=(n("4de4"),n("d3b7"),n("96cf"),n("1da1")),x=n("5530"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Loading...")])},S=[],A={},N=A,C=Object(d["a"])(N,j,S,!1,null,"17f216f9",null),R=C.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Error!")])},P=[],F={},$=F,I=Object(d["a"])($,L,P,!1,null,"05976484",null),V=I.exports,B=n("2f62"),M=function(){return{component:n.e("chunk-f14c515e").then(n.bind(null,"0d3f")),loading:R,error:V}},U={name:"todos",components:{TodoForm:function(){return n.e("chunk-3f947e1e").then(n.bind(null,"550a"))},TodoFilters:function(){return n.e("chunk-0f2dbc40").then(n.bind(null,"1cc8"))},TodoList:M},data:function(){return{tabs:["All","Active","Done"],filter:"All"}},computed:Object(x["a"])({},Object(B["c"])({allTodos:"todos/allTodos",doneTodos:"todos/doneTodos",activeTodos:"todos/activeTodos"}),{filterTodos:function(){return"Active"==this.filter?this.activeTodos:"Done"==this.filter?this.doneTodos:this.allTodos},todoCounter:function(){return this.filterTodos.length}}),methods:Object(x["a"])({},Object(B["b"])(["todos/saveNewTodo","todos/saveEditTodo","todos/setTodoDone","todos/deleteTodo"]),{saveNewTodo:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this["todos/saveNewTodo"]({value:t,done:!1});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),saveEditTodo:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this["todos/saveEditTodo"](t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),deleteTodo:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this["todos/deleteTodo"](t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()})},J=U,q=(n("0361"),Object(d["a"])(J,k,y,!1,null,"19c457e1",null)),G=q.exports,W=[{path:"/",name:"default",component:_,children:[{path:"",component:G}]}],H=W;o["a"].use(T["a"]);var K=Object(g["a"])(H),z=new T["a"]({mode:"history",base:"/TodoApp/",routes:K,scrollBehavior:function(){return{x:0,y:0}}}),Q=z,X={loading:!1},Y={isLoading:function(e){return e.loading}},Z={SET_LOADING:function(e,t){e.loading=t}},ee={},te={namespaced:!0,state:X,getters:Y,mutations:Z,actions:ee},ne=(n("99af"),n("d81d"),{todos:localStorage.todos?JSON.parse(localStorage.todos):[]}),oe={allTodos:function(e){return e.todos},doneTodos:function(e){return e.todos.filter((function(e){return e.done}))},activeTodos:function(e){return e.todos.filter((function(e){return!e.done}))}},re={ADD_TODO:function(e,t){e.todos=[].concat(Object(g["a"])(e.todos),[t])},EDIT_TODO:function(e,t){e.todos=e.todos.map((function(e){return e.index!==t.index?e:t}))},DELETE_TODO:function(e,t){e.todos=e.todos.filter((function(e){return e.index!==t}))},ORDER_TODOS:function(e){e.todos=e.todos.map((function(e,t){return e.index=t,e}))},SAVE_TODOS:function(e){localStorage.todos=JSON.stringify(e.todos)}},ie={saveNewTodo:function(e,t){return new Promise((function(n){t.index=e.state.todos.length||0,e.commit("ADD_TODO",t),e.commit("ORDER_TODOS"),e.commit("SAVE_TODOS"),n()}))},saveEditTodo:function(e,t){return new Promise((function(n){e.commit("EDIT_TODO",t),e.commit("SAVE_TODOS"),n()}))},deleteTodo:function(e,t){return new Promise((function(n){e.commit("DELETE_TODO",t),e.commit("ORDER_TODOS"),e.commit("SAVE_TODOS"),n()}))}},se={namespaced:!0,state:ne,getters:oe,mutations:re,actions:ie};o["a"].use(B["a"]);var ae=new B["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{app:te,todos:se}}),ce=n("9483");Object(ce["a"])("".concat("/TodoApp/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(e){console.log("Service worker has been registered."),setInterval((function(){e.update()}),36e5)},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:Q,store:ae,render:function(e){return e(m)}}).$mount("#app")},"63db":function(e,t,n){"use strict";var o=n("7007"),r=n.n(o);r.a},"6d33":function(e,t,n){"use strict";var o=n("3ef6"),r=n.n(o);r.a},7007:function(e,t,n){},"92f9":function(e,t,n){},cf25:function(e,t,n){"use strict";var o=n("fea6"),r=n.n(o);r.a},fea6:function(e,t,n){}});
//# sourceMappingURL=app.a4391007.js.map