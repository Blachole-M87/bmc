(this.webpackJsonpbmccomplain=this.webpackJsonpbmccomplain||[]).push([[5],{288:function(e,t,a){"use strict";a.r(t);var n=a(12),i=a(16),c=a(262),r=a.n(c),s=a(264),l=a(9),o=a(94),d=a(272),p=a.n(d),j=a(274),u=a.n(j),b=a(1),h=a(44),x=a.n(h),O=a(289),m=a(293),f=a(294),v=a(295),g=a(296),y=a(297),N=a(298),w=a(301),S=a(302),C=a(0),k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};t.default=function(){var e=Object(b.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],d=Object(b.useState)(!1),j=Object(l.a)(d,2),h=j[0],D=j[1];x.a.defaults.baseURL="http://localhost:3050",Object(b.useEffect)((function(){x.a.get("/heavenlybodies").then((function(e){return c(e.data)}))}),[]);var I=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={id:a.id,title:R.values.title,properties:R.values.properties},e.next=4,x.a.post("/heavenlybodies",n);case 4:i=e.sent,c(a.concat(i.data)),console.log(i.data),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("/heavenlybodies/".concat(t));case 2:n=a.filter((function(e){return e.id!==t})),c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(b.useState)({id:"",etitle:"",eproperties:""}),J=Object(l.a)(A,2),T=J[0],F=J[1],L=function(e){F(Object(i.a)(Object(i.a)({},T),{},Object(n.a)({},e.target.name,e.target.value)))},P=function(){var e=Object(s.a)(r.a.mark((function e(t,n,i){var s,l,o,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=function(e){return e.id===t},l=a.findIndex(s),o={id:a[l].id=t,title:a[l].title=n,properties:a[l].properties=i},x.a.patch("/heavenlybodies/".concat(t),o),d=a.splice(l,1,o),console.log(d),c(a);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),R=Object(o.a)({initialValues:{title:"",properties:""},onAddData:I});return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"crudapi",children:Object(C.jsxs)("div",{className:"addbodies",children:[Object(C.jsxs)("form",{onSubmit:I,children:[Object(C.jsx)("div",{className:"text",children:Object(C.jsx)("input",{type:"text",name:"title",placeholder:"Star Name",value:R.values.title,onChange:R.handleChange})}),Object(C.jsx)("div",{className:"text",children:Object(C.jsx)("input",{type:"text",name:"properties",placeholder:"It's Specialities",value:R.values.properties,onChange:R.handleChange})}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{className:"addbutton",type:"submit",children:"ADD"})})]}),Object(C.jsx)(O.a,{component:m.a,children:Object(C.jsxs)(f.a,{sx:{minWidth:500},"aria-label":"simple table",children:[Object(C.jsx)(v.a,{children:Object(C.jsxs)(g.a,{children:[Object(C.jsx)(y.a,{className:"headings",children:"ID"}),Object(C.jsx)(y.a,{className:"headings",align:"right",children:"Title"}),Object(C.jsx)(y.a,{className:"headings",align:"right",children:"Properties"}),Object(C.jsx)(y.a,{className:"headings",align:"right",children:"Action"})]})}),Object(C.jsx)(N.a,{children:a.map((function(e){return Object(C.jsxs)(g.a,{children:[Object(C.jsx)(y.a,{children:e.id}),Object(C.jsx)(y.a,{align:"right",children:e.title}),Object(C.jsx)(y.a,{align:"right",children:e.properties}),Object(C.jsxs)(y.a,{align:"right",children:[Object(C.jsx)(p.a,{onClick:function(){return E(e.id)}}),Object(C.jsx)(u.a,{onClick:function(){return function(e){console.log(e),D(!0),F({id:e.id,etitle:e.title,eproperties:e.properties}),console.log(e.id,e.title,e.properties)}(e)}})]})]},e.id)}))})]})})]})}),Object(C.jsx)("div",{children:Object(C.jsx)(S.a,{open:h,onClose:function(){return D(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(C.jsx)(w.a,{sx:k,children:Object(C.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),void P(T.id,T.etitle,T.eproperties)},children:[Object(C.jsx)("div",{className:"text",children:Object(C.jsx)("input",{type:"text",name:"etitle",placeholder:"Edit Star Name",value:T.etitle,onChange:L})}),Object(C.jsx)("div",{className:"text",children:Object(C.jsx)("input",{type:"text",name:"eproperties",placeholder:"Edit It's Specialities",value:T.eproperties,onChange:L})}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{className:"addbutton",type:"submit",children:"EDIT"})})]})})})})]})}}}]);
//# sourceMappingURL=5.6b7704fe.chunk.js.map