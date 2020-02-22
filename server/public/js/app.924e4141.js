(function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("Logo",{staticClass:"logo"}),n("h2",[e._v("What to do...")]),n("todo-list")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"input-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],staticClass:"todo-input",attrs:{type:"text",placeholder:"What needs to be done"},domProps:{value:e.newTodo},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createTodo(t)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}}),n("button",{staticClass:"active",on:{click:e.createTodo}},[e._v("Enter")])]),e.error?n("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),n("transition-group",{attrs:{name:"fade","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutRight"}},e._l(e.todosFiltered,(function(t){return n("div",{key:t._id,staticClass:"todo-item"},[n("div",{staticClass:"todo-item-left"},[n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(n){var r=t.completed,o=n.target,a=!!o.checked;if(Array.isArray(r)){var c=null,i=e._i(r,c);o.checked?i<0&&e.$set(t,"completed",r.concat([c])):i>-1&&e.$set(t,"completed",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(t,"completed",a)}}})]),t.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"todo.title"},{name:"focus",rawName:"v-focus"}],staticClass:"todo-item-edit",attrs:{type:"text"},domProps:{value:t.title},on:{blur:function(n){return e.doneEdit(t)},keyup:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.doneEdit(t)},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:e.cancelEdit(t)}],input:function(n){n.target.composing||e.$set(t,"title",n.target.value)}}}):n("div",{staticClass:"todo-item-label",class:{completed:t.completed},on:{dblclick:function(n){return e.editTodo(t)}}},[e._v(e._s(t.title))])]),n("h6",{staticClass:"date"},[e._v(e._s(t.createdAt.getDate()+"/"+t.createdAt.getMonth()+"/"+t.createdAt.getFullYear()))]),n("div",{staticClass:"remove-item",on:{click:function(n){return e.deleteTodo(t._id)}}},[e._v("×")])])})),0),n("div",{staticClass:"extra-container"},[n("div",[n("label",{staticClass:"checkbox"},[n("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:!e.anyRemaining},on:{change:e.checkAllTodos}}),e._v(" Check All ")])]),n("div",[e._v(e._s(e.remaining)+" items left")])]),n("div",{staticClass:"extra-container"},[n("div",[n("button",{class:{active:"all"==e.filter},on:{click:function(t){e.filter="all"}}},[e._v("All")]),n("button",{class:{active:"active"==e.filter},on:{click:function(t){e.filter="active"}}},[e._v("Active")]),n("button",{class:{active:"completed"==e.filter},on:{click:function(t){e.filter="completed"}}},[e._v("Completed")])]),n("div",[n("transition",{attrs:{name:"fade"}},[e.showClearCompletedButton?n("button",{on:{click:e.clearCompleted}},[e._v("Clear Completed")]):e._e()])],1)]),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer-copyright"},[n("h6",[e._v("© Matteo Fenu 2020")])])}],s=(n("4de4"),n("4160"),n("498a"),n("159b"),n("96cf"),n("1da1")),u=(n("d81d"),n("5530")),l=n("d4ec"),d=n("bee2"),f=n("bc3a"),p=n.n(f),m="api/todos/",v=function(){function e(){Object(l["a"])(this,e)}return Object(d["a"])(e,null,[{key:"getTodos",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(m);case 3:return t=e.sent,n=t.data,e.abrupt("return",n.map((function(e){return Object(u["a"])({},e,{createdAt:new Date(e.createdAt)})})));case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"createTodo",value:function(e){return p.a.post(m,{title:e})}},{key:"deleteTodo",value:function(e){return p.a.delete("".concat(m).concat(e))}},{key:"updateTodo",value:function(e,t){return p.a.patch("".concat(m).concat(e),{title:t})}}]),e}(),h=v,g={name:"todo-list",data:function(){return{newTodo:"",beforeEditCache:"",filter:"all",error:"",todos:[]}},computed:{remaining:function(){return this.todos.filter((function(e){return!e.completed})).length},anyRemaining:function(){return 0!=this.remaining},todosFiltered:function(){return"all"==this.filter?this.todos:"active"==this.filter?this.todos.filter((function(e){return!e.completed})):"completed"==this.filter?this.todos.filter((function(e){return e.completed})):this.todos},showClearCompletedButton:function(){return this.todos.filter((function(e){return e.completed})).length>0}},directives:{focus:{inserted:function(e){e.focus()}}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.getTodos();case 3:e.todos=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{createTodo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.newTodo.trim().length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,h.createTodo(e.newTodo);case 4:return t.next=6,h.getTodos();case 6:e.todos=t.sent,e.newTodo="";case 8:case"end":return t.stop()}}),t)})))()},editTodo:function(e){this.beforeEditCache=e.title,e.editing=!0},doneEdit:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return""==e.title.trim()&&(e.title=t.beforeEditCache),n.next=3,h.updateTodo(e._id,e.title);case 3:return n.next=5,h.getTodos();case 5:t.todos=n.sent,e.editing=!1;case 7:case"end":return n.stop()}}),n)})))()},cancelEdit:function(e){e.title=this.beforeEditCache,e.editing=!1},deleteTodo:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,h.deleteTodo(e);case 2:return n.next=4,h.getTodos();case 4:t.todos=n.sent;case 5:case"end":return n.stop()}}),n)})))()},checkAllTodos:function(){this.todos.forEach((function(e){return e.completed=event.target.checked}))},clearCompleted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.todos.filter((function(e){return!0===e.completed})),n.forEach(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.deleteTodo(t._id);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.next=4,h.getTodos();case 4:e.todos=t.sent;case 5:case"end":return t.stop()}}),t)})))()}}},b=g,w=(n("ed30"),n("2877")),k=Object(w["a"])(b,c,i,!1,null,null,null),y=k.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{"enable-background":"new 0 0 2500 2165.1",viewBox:"0 0 2500 2165.1",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"m1538.7 0-288.7 500-288.7-500h-961.3l1250 2165.1 1250-2165.1z",fill:"#8e98f0"}}),n("path",{attrs:{d:"m1538.7 0-288.7 500-288.7-500h-461.3l750 1299 750-1299z",fill:"#435466"}})])},_=[],C={},T=Object(w["a"])(C,x,_,!1,null,null,null),O=T.exports,j={name:"App",components:{TodoList:y,Logo:O}},E=j,R=(n("034f"),Object(w["a"])(E,o,a,!1,null,null,null)),A=R.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(A)}}).$mount("#app")},"85ec":function(e,t,n){},"89d2":function(e,t,n){},ed30:function(e,t,n){"use strict";var r=n("89d2"),o=n.n(r);o.a}});
//# sourceMappingURL=app.924e4141.js.map