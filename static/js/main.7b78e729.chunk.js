(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),i=(n(14),n(8)),s=n(5),o=n(1),u=n(4),m=function(e){var t=e.list,n=(e.setIsEditting,e.clearList),a=e.deleteItem,r=e.editItem;return c.a.createElement("div",{className:"grocery-list"},t.map((function(e){return c.a.createElement("article",{className:"grocery-item",key:e.id},c.a.createElement("p",{className:"title"},e.title),c.a.createElement("div",{className:"btn-container"},c.a.createElement("button",{type:"button",className:"edit-btn",onClick:function(){return r(e.id)}}," ",c.a.createElement(u.a,null)),c.a.createElement("button",{type:"button",className:"delete-btn",onClick:function(){return a(e.id)}},c.a.createElement(u.b,null))))})),c.a.createElement("button",{className:"clear-btn",onClick:function(){return n()}},"Clear Items"))},d=function(e){var t=e.type,n=e.msg,r=e.removeAlert,l=e.list;return Object(a.useEffect)((function(){var e=setTimeout((function(){r()}),3e3);return function(){return clearTimeout(e)}}),[l]),c.a.createElement("p",{className:"alert alert-".concat(t)},n)};var f=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),u=Object(o.a)(l,2),f=u[0],b=u[1],g=Object(a.useState)(!1),E=Object(o.a)(g,2),p=E[0],v=E[1],O=Object(a.useState)(null),y=Object(o.a)(O,2),j=y[0],N=y[1],h=Object(a.useState)({show:!1,msg:"",type:""}),I=Object(o.a)(h,2),S=I[0],k=I[1],w=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";k({show:e,msg:t,type:n})};return Object(a.useEffect)((function(){localStorage.setItem("list",JSON.stringify(f))}),[f]),c.a.createElement("section",{className:"section-center"},c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),n)if(n&&p)w(!0,"Item updated","success"),b(f.map((function(e){return e.id===j?Object(s.a)(Object(s.a)({},e),{},{title:n}):e}))),v(!1),r(""),N(null);else{w(!0,"Item added","success");var t={id:(new Date).getTime().toString(),title:n};b([].concat(Object(i.a)(f),[t])),r("")}else w(!0,"empty value","danger")},className:"grocery-form"},S.show&&c.a.createElement(d,Object.assign({},S,{removeAlert:w,list:f})),c.a.createElement("h3",null,"Grocery List"),c.a.createElement("div",{className:"form-control"},c.a.createElement("input",{type:"text",className:"grocery",placeholder:"e.g. Eggs",value:n,onChange:function(e){return r(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"submit-btn"},p?"edit":"submit"))),c.a.createElement("div",{className:"grocery-container"},f.length>0?c.a.createElement(m,{list:f,setIsEditting:v,clearList:function(){w(!0,"List has been cleared","danger"),b([])},deleteItem:function(e){w(!0,"Item deleted","danger");var t=f.filter((function(t){return t.id!==e}));b(t)},editItem:function(e){var t=f.find((function(t){return t.id===e}));v(!0),N(e),r(t.title)}}):null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.7b78e729.chunk.js.map