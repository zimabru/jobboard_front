(this.webpackJsonptest_joboard_task03=this.webpackJsonptest_joboard_task03||[]).push([[0],{105:function(e,t,n){},206:function(e,t,n){},216:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(22),s=n.n(c),o=(n(206),n(4)),r=n(23),l=n(5),d=n(322),j=n(323),u=n(313),h=n(324),m=n(25),b=n(321),p=n(319),O=n(2);function x(){var e=Object(m.f)(),t=Object(a.useState)(null),n=Object(l.a)(t,2),i=n[0],c=n[1],s=function(e){c(Object(r.a)(Object(r.a)({},i),{},Object(o.a)({},e.target.name,e.target.value.trim())))};return Object(O.jsx)("div",{style:{width:"40%",margin:"20% auto"},children:Object(O.jsx)("form",{onSubmit:function(t){t.preventDefault();var n=new Headers;n.append("Content-Type","application/json"),console.log(i),fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/register",{headers:n,method:"post",body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(t){var n,a,i;localStorage.setItem("data",JSON.stringify(t)),console.log("Here in the fetch",t),1===(null===(n=t[0])||void 0===n?void 0:n.role)?e.push("admin"):2===(null===(a=t[0])||void 0===a?void 0:a.role)||3===(null===(i=t[0])||void 0===i?void 0:i.role)?e.push("user"):e.push("error")}))},children:Object(O.jsxs)(d.a,{elevation:23,children:[Object(O.jsx)(p.a,{textAlign:"center",gutterBottom:!0,variant:"h5",component:"div",children:"Login"}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(u.a,{style:{marginBottom:"5%"},fullWidth:!0,type:"text",label:"email",name:"email",size:"small",variant:"outlined",onChange:s}),Object(O.jsx)(u.a,{fullWidth:!0,label:"password",name:"password",size:"small",type:"password",variant:"outlined",onChange:s})]}),Object(O.jsx)(j.a,{children:Object(O.jsx)(h.a,{fullWidth:!0,color:"secondary",type:"submit",variant:"contained",children:"Log in"})})]})})})}n(216);var f=n(35),g=n(317),v=n(314);n(105);function y(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],c=n[1],s=function(){c(!1)},d=Object(m.f)(),j=localStorage.getItem("data"),b=localStorage.getItem("update"),p=JSON.parse(j),x=function(){localStorage.removeItem("update");d.push("admin")},f=Object(a.useState)(null),y=Object(l.a)(f,2),C=y[0],N=y[1],_=function(e){var t;b?N(Object(r.a)(Object(r.a)({},C),{},Object(o.a)({},e.target.name,e.target.value.trim()))):N(Object(r.a)(Object(r.a)({},C),{},(t={},Object(o.a)(t,e.target.name,e.target.value.trim()),Object(o.a)(t,"role",2),t)))};function w(e){e.preventDefault();var t=new Headers({"Content-Type":"application/json",Accept:"application/json"});b?(fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/user/"+b,{headers:t,method:"put",body:JSON.stringify(C)}).then((function(e){return console.log(e),e.json()})).catch((function(e){console.error("PUT FETCH",e)})),x()):(c(!0),fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/user",{headers:t,method:"post",body:JSON.stringify(C)}).then((function(e){return e.json()})))}return Object(O.jsxs)("div",{className:"registerMain",children:[Object(O.jsx)("h1",{children:b?"Update User number: "+b:"Enter Your Information Login"}),Object(O.jsx)(g.a,{open:i,autoHideDuration:6e3,onClose:s,children:Object(O.jsx)(v.a,{onClose:s,severity:"success",sx:{width:"100%"},children:"User Create With Success!"})}),Object(O.jsxs)("form",{className:"registerMain_form",onSubmit:w,children:[Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"email",label:"Email",type:"email",variant:"outlined",onChange:_}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"password",label:"Password",type:"password",variant:"outlined",onChange:_}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"lastName",label:"First Name",type:"text",variant:"outlined",onChange:_}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"firstName",label:"Last Name",type:"text",variant:"outlined",onChange:_}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"birthday",type:"date",variant:"outlined",onChange:_}),b&&Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"role",type:"number",variant:"outlined",label:"user(2)/recruiter(3)",min:2,max:3,onChange:_}),Object(O.jsxs)("div",{className:"registerMain_buttons",children:[Object(O.jsx)(h.a,{className:"registerMain_button",onClick:null!==p&&1===p[0].role?x:function(){d.push("/")},children:"Back"}),Object(O.jsxs)(h.a,{className:"registerMain_button",onClick:w,autoFocus:!0,children:[" ",b?"UPDATE":"CREATE"," "]})]})]})]})}var C=function(){return Object(O.jsx)("div",{children:"This page doesn't exist."})},N=n(65),_=n.n(N),w=n(66),S=n.n(w),F=n(67),k=n(68),M=n.n(k);function A(){var e=Object(m.f)(),t=Object(a.useState)(null),n=Object(l.a)(t,2),i=n[0],c=n[1],s=function(){e.push("registerApplication")};Object(a.useEffect)((function(){var e=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/job_application",{headers:e}).then((function(e){return e.json()})).then((function(e){c(e)}))}),[]);var o=[{field:"id_job",headerName:"Job",width:100},{field:"id_user",headerName:"User",width:100},{field:"motivation",headerName:"Motivation",width:100},{field:"email",headerName:"Email",width:100},{field:"lastName",headerName:"Last name",width:130},{field:"firstName",headerName:"First name",width:130},{field:"birthday",headerName:"Birthday",width:160},{field:"delete",headerName:"Delete",width:160,renderCell:function(){return Object(O.jsx)(h.a,{onClick:function(){return window.location.reload(!1)},children:Object(O.jsx)(_.a,{})})}},{field:"Modify",headerName:"Modify",width:160,renderCell:function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)(S.a,{})})}}],r=function(e){var t=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/job_application/"+e,{headers:t,method:"DELETE"}).then((function(e){return e.json()}))};return Object(O.jsxs)("div",{style:{height:400,width:"70%",margin:"0 auto",marginTop:"5%"},children:[Object(O.jsx)("h1",{children:"Job Application"}),null!==i&&Object(O.jsx)(F.a,{rows:i,getRowId:function(e){return e.id_job},onCellClick:function(e){var t=e.row.id_job;"delete"===e.field?r(t):(localStorage.setItem("update",e.id),s(),console.log(e))},columns:o,pageSize:5,rowsPerPageOptions:[5]}),Object(O.jsx)(h.a,{onClick:s,type:"submit",startIcon:Object(O.jsx)(M.a,{}),children:"Add Application"})]})}function T(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(m.f)(),s=function(){c.push("register")};Object(a.useEffect)((function(){var e=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/user",{headers:e}).then((function(e){return e.json()})).then((function(e){i(e)}))}),[]);var o=[{field:"id_user",headerName:"ID",width:70},{field:"firstName",headerName:"First name",width:130},{field:"lastName",headerName:"Last name",width:130},{field:"birthday",headerName:"Birthday",width:160},{field:"role",headerName:"Role",width:160},{field:"delete",headerName:"Delete",width:160,renderCell:function(){return Object(O.jsxs)(h.a,{onClick:function(){return window.location.reload(!1)},children:[Object(O.jsx)(_.a,{})," "]})}},{field:"Modify",headerName:"Modify",width:160,renderCell:function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)(S.a,{})})}}],r=function(e){var t=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/user/"+e.id,{headers:t,method:"DELETE"}).then((function(e){return e.json()}))};return Object(O.jsxs)("div",{style:{height:400,width:"70%",margin:"0 auto",marginTop:"5%"},children:[Object(O.jsx)("h1",{children:"Table User"}),null!==n&&Object(O.jsx)(F.a,{rows:n,getRowId:function(e){return e.id_user},onCellClick:function(e){"delete"===e.field?r(e):(localStorage.setItem("update",e.id),s(),console.log(e))},columns:o,pageSize:5,rowsPerPageOptions:[5]}),Object(O.jsx)(h.a,{onClick:s,type:"submit",startIcon:Object(O.jsx)(M.a,{}),children:"Add User"})]})}n(219);function E(){var e=Object(m.f)();var t=JSON.parse(localStorage.getItem("data"));return Object(O.jsx)("header",{children:Object(O.jsx)("div",{children:Object(O.jsxs)("div",{class:"container",children:[Object(O.jsx)("img",{src:"#",alt:"logo",class:"logo"}),Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("span",{onClick:function(){e.push("/user/modifyUser")},children:null!==t&&t[0].firstName})}),null!==t&&3===t[0].role&&Object(O.jsx)("li",{children:Object(O.jsx)("span",{onClick:function(){localStorage.clear(),e.push("/registerAdvertisement")},children:"POST"})}),Object(O.jsx)("li",{onClick:function(){localStorage.clear(),e.push("/")},children:Object(O.jsx)("span",{style:{cursor:"pointer"},children:" Log out"})})]})})]})})})}function I(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(m.f)(),s=function(){c.push("registerCompany")};Object(a.useEffect)((function(){var e=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/company",{headers:e}).then((function(e){return e.json()})).then((function(e){i(e)}))}),[]);var o=[{field:"id_company",headerName:"id_company",width:70},{field:"name",headerName:"name",width:130},{field:"address",headerName:"address",width:130},{field:"web_site",headerName:"web_site",width:160},{field:"delete",headerName:"Delete",width:160,renderCell:function(){return Object(O.jsxs)(h.a,{onClick:function(){return window.location.reload(!1)},children:[Object(O.jsx)(_.a,{})," "]})}},{field:"Modify",headerName:"Modify",width:160,renderCell:function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)(S.a,{})})}}],r=function(e){var t=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/company/"+e.id,{headers:t,method:"DELETE"}).then((function(e){return e.json()}))};return Object(O.jsx)("div",{children:Object(O.jsx)("div",{children:Object(O.jsx)("div",{children:Object(O.jsxs)("div",{style:{height:400,width:"70%",margin:"0 auto",marginTop:"5%"},children:[Object(O.jsx)("h1",{children:"Table Company"}),null!==n&&Object(O.jsx)(F.a,{rows:n,getRowId:function(e){return e.id_company},onCellClick:function(e){"delete"===e.field?r(e):(localStorage.setItem("update",e.id),s(),console.log(e))},columns:o,pageSize:5,rowsPerPageOptions:[5]}),Object(O.jsx)(h.a,{onClick:s,type:"submit",startIcon:Object(O.jsx)(M.a,{}),children:"Add Company"})]})})})})}function D(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(m.f)(),s=function(){c.push("registerAdvertisement")};Object(a.useEffect)((function(){var e=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/advertisement",{headers:e}).then((function(e){return e.json()})).then((function(e){i(e)}))}),[]);var o=[{field:"id_advertisement",headerName:"id_advertisement",width:70},{field:"title",headerName:"title",width:130},{field:"description",headerName:"description",width:130},{field:"user_id",headerName:"user_id",width:160},{field:"company_id",headerName:"company_id",width:160},{field:"release_date",headerName:"release_date",width:160},{field:"delete",headerName:"Delete",width:160,renderCell:function(){return Object(O.jsx)(h.a,{onClick:function(){return window.location.reload(!1)},children:Object(O.jsx)(_.a,{})})}},{field:"Modify",headerName:"Modify",width:160,renderCell:function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)(S.a,{})})}}],r=function(e){var t=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/advertisement/"+e.id,{headers:t,method:"DELETE"}).then((function(e){return e.json()}))};return Object(O.jsx)("div",{children:Object(O.jsx)("div",{children:Object(O.jsxs)("div",{style:{height:400,width:"70%",margin:"0 auto",marginTop:"5%"},children:[Object(O.jsx)("h1",{children:"Table AdvertisementTable"}),null!==n&&Object(O.jsx)(F.a,{rows:n,getRowId:function(e){return e.id_advertisement},onCellClick:function(e){"delete"===e.field?r(e):(console.log("ID advertisemnet",e),localStorage.setItem("update",e.id),s(),console.log(e))},columns:o,pageSize:5,rowsPerPageOptions:[5]}),Object(O.jsx)(h.a,{onClick:s,type:"submit",startIcon:Object(O.jsx)(M.a,{}),children:"Add Advertisement"})]})})})}function H(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(E,{}),Object(O.jsx)(T,{}),Object(O.jsx)("div",{style:{marginTop:"20%"},children:Object(O.jsx)(A,{})}),Object(O.jsx)("div",{style:{marginTop:"20%"},children:Object(O.jsx)(I,{})}),Object(O.jsx)("div",{style:{marginTop:"20%"},children:Object(O.jsx)(D,{})})]})}var J=n(326);n(220),n(221);function q(e){var t=Object(m.f)(),n=Object(a.useState)(null),i=Object(l.a)(n,2);i[0],i[1];return Object(O.jsx)("div",{className:"page__card",children:Object(O.jsxs)(J.a,{sx:{marginTop:"20px"},className:"myCustomPropretie01",children:[Object(O.jsxs)(b.a,{children:[Object(O.jsx)(p.a,{variant:"h3",color:"text.secondary",gutterBottom:!0,align:"left",children:e.title}),Object(O.jsx)(p.a,{variant:"body2",noWrap:!0,children:e.description})]}),Object(O.jsx)("div",{onClick:function(){localStorage.setItem("id_advertisement",e.id_advertisement),t.push("/learnmore")},children:Object(O.jsx)(h.a,{children:"Learn More"})}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center"}})]})})}var P=n(166),L=n.n(P),U=n(81);n(222);function B(e){var t=Object(a.useState)(null),n=Object(l.a)(t,2),i=n[0],c=n[1],s=Object(a.useState)(!0),d=Object(l.a)(s,2),j=d[0],u=d[1],h=Object(a.useState)(null),m=Object(l.a)(h,2),b=m[0],p=m[1],x=function(e){e.preventDefault(),console.log(e.target.value),p(Object(r.a)(Object(r.a)({},b),{},Object(o.a)({},e.target.name,e.target.value.trim())))},f=function(e){if(console.log("Handle Submit"),b){var t=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/search/"+b.domaine+"/"+b.contract,{headers:t}).then((function(e){return e.json()})).then((function(e){c(e),console.log(e)}))}};return Object(a.useEffect)((function(){c({});var e=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/advertisement",{headers:e}).then((function(e){return e.json()})).then((function(e){c(e),console.log(e)})).finally((function(){u(!1)}))}),[]),console.log(e),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("form",{className:"dashBoard__form",onSubmit:f,children:Object(O.jsxs)("div",{className:"dashBoard__phrase",children:[Object(O.jsx)("p",{className:"dashBoard__titre",children:"I searching for a job in "}),Object(O.jsxs)("select",{className:"dashBoard__select",onChange:x,name:"domaine",children:[Object(O.jsx)("option",{value:"hotel",children:"hotel"}),Object(O.jsx)("option",{value:"building",children:"building"}),Object(O.jsx)("option",{selected:!0,value:"software",children:"Software"}),Object(O.jsx)("option",{value:"marketing",children:"Marketing"}),Object(O.jsx)("option",{value:"administation",children:"Administation"})]}),Object(O.jsx)("p",{className:"dashBoard_titre",children:"for a"}),Object(O.jsxs)("select",{className:"dashBoard__select",onChange:x,name:"contract",children:[Object(O.jsx)("option",{value:"traineeship",children:"traineeship"}),Object(O.jsx)("option",{value:"internship",children:"internship"}),Object(O.jsx)("option",{selected:!0,value:"permanent contract",children:"permanent contract"}),Object(O.jsx)("option",{value:"fixed-term",children:"fixed-term"})]}),Object(O.jsx)(U.a,{onClick:f,children:Object(O.jsx)(L.a,{})})]})}),!j&&i.map((function(e,t){return Object(O.jsx)(q,{id_advertisement:e.id_advertisement,title:e.title,description:e.description},t)}))]})}function W(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(E,{}),Object(O.jsx)(B,{})]})}var R=n(235);function Y(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],c=function(){i(!1)},s=Object(m.f)(),d=localStorage.getItem("data"),j=localStorage.getItem("update"),b=JSON.parse(d),p=function(){localStorage.removeItem("update");s.push("admin")},x=Object(a.useState)(null),f=Object(l.a)(x,2),y=f[0],C=f[1],N=function(e){var t;j?C(Object(r.a)(Object(r.a)({},y),{},Object(o.a)({},e.target.name,e.target.value.trim()))):C(Object(r.a)(Object(r.a)({},y),{},(t={},Object(o.a)(t,e.target.name,e.target.value.trim()),Object(o.a)(t,"role",2),t)))};function _(e){e.preventDefault();var t=new Headers;t.append("Content-Type","application/json"),j?(fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/job_application/"+j,{headers:t,method:"put",body:JSON.stringify(y)}).then((function(e){return e.json()})),p()):(i(!0),fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/job_application",{headers:t,method:"post",body:JSON.stringify(y)}).then((function(e){return e.json()})))}return Object(O.jsxs)("div",{className:"registerMain",children:[Object(O.jsx)("h1",{children:"Enter Your Job Application"}),Object(O.jsx)(g.a,{open:n,autoHideDuration:6e3,onClose:c,children:Object(O.jsx)(v.a,{onClose:c,severity:"success",sx:{width:"100%"},children:"ApplicationJob Create With Success !"})}),Object(O.jsxs)("form",{className:"registerMain_form",onSubmit:_,children:[Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"email",label:"email",type:"email",variant:"outlined",onChange:N}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"lastName",label:"First Name",type:"text",variant:"outlined",onChange:N}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"firstName",label:"Last Name",type:"text",variant:"outlined",onChange:N}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"birthday",type:"date",variant:"outlined",onChange:N}),Object(O.jsx)(R.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"motivation",label:"Motivation",type:"text",variant:"outlined",onChange:N}),Object(O.jsxs)("div",{className:"registerMain_buttons",children:[Object(O.jsx)(h.a,{onClick:null!==b&&1===b[0].role?p:function(){s.push("/")},children:"Back"}),Object(O.jsxs)(h.a,{onClick:_,autoFocus:!0,children:[" ",j?"UPDATE":"CREATE"]})]})]})]})}function z(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],c=function(){i(!1)},s=Object(m.f)(),d=localStorage.getItem("data"),j=localStorage.getItem("update"),b=JSON.parse(d),p=function(){localStorage.removeItem("update");s.push("admin")},x=Object(a.useState)(null),f=Object(l.a)(x,2),y=f[0],C=f[1],N=function(e){C(Object(r.a)(Object(r.a)({},y),{},Object(o.a)({},e.target.name,e.target.value.trim())))};function _(e){e.preventDefault();var t=new Headers({"Content-Type":"application/json",Accept:"application/json"});j?(fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/company/"+j,{headers:t,method:"put",body:JSON.stringify(y)}).then((function(e){return console.log(e),e.json()})).catch((function(e){console.error("PUT FETCH",e)})),p()):(i(!0),fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/company",{headers:t,method:"post",body:JSON.stringify(y)}).then((function(e){return e.json()})))}return Object(O.jsxs)("div",{className:"registerMain",children:[Object(O.jsx)("h1",{children:j?"Update The Company number: "+j:"Enter Your Company"}),Object(O.jsx)("h1",{}),Object(O.jsx)(g.a,{open:n,autoHideDuration:6e3,onClose:c,children:Object(O.jsx)(v.a,{onClose:c,severity:"success",sx:{width:"100%"},children:"Company Create With Success !"})}),Object(O.jsxs)("form",{className:"registerMain_form",onSubmit:_,children:[Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"name",label:"name",type:"text",variant:"outlined",onChange:N}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"address",label:"address",type:"text",variant:"outlined",onChange:N}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"web_site",label:"web_site",type:"text",variant:"outlined",onChange:N}),Object(O.jsxs)("div",{className:"register_buttons",children:[Object(O.jsx)(h.a,{onClick:null!==b&&1===b[0].role?p:function(){s.push("/")},children:"Back"}),Object(O.jsx)(h.a,{onClick:_,autoFocus:!0,children:j?"UPDATE":"CREATE"})]})]})]})}var G=n(303);function K(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],c=function(){i(!1)},s=Object(m.f)(),d=localStorage.getItem("data"),j=localStorage.getItem("update"),b=JSON.parse(d),p=function(){localStorage.removeItem("update");s.push("admin")},x=Object(a.useState)(null),f=Object(l.a)(x,2),y=f[0],C=f[1],N=function(e){C(Object(r.a)(Object(r.a)({},y),{},Object(o.a)({},e.target.name,e.target.value.trim())))};function _(e){e.preventDefault();var t=new Headers({"Content-Type":"application/json",Accept:"application/json"});j?(fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/advertisement/"+j,{headers:t,method:"put",body:JSON.stringify(y)}).then((function(e){return console.log(e),e.json()})).catch((function(e){console.error("PUT FETCH",e)})),p()):(i(!0),fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/advertisement/",{headers:t,method:"post",body:JSON.stringify(y)}).then((function(e){return e.json()})))}return Object(O.jsxs)("div",{className:"registerMain",children:[Object(O.jsx)("h1",{children:j?"Update Advertisement number: "+j:"Create an Advertisement"}),Object(O.jsx)(g.a,{open:n,autoHideDuration:6e3,onClose:c,children:Object(O.jsx)(v.a,{onClose:c,severity:"success",sx:{width:"100%"},children:"Advertisement Create With Success !"})}),Object(O.jsxs)("form",{className:"registerMain_form",onSubmit:_,children:[Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"title",label:"title",type:"text",variant:"outlined",onChange:N}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"register",type:"date",variant:"outlined",onChange:N}),Object(O.jsx)(G.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"description",label:"description",type:"text",variant:"outlined",onChange:N}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"Company",label:"Company",type:"text",variant:"outlined",onChange:N}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"city",label:"city",type:"text",variant:"outlined",onChange:N}),Object(O.jsxs)("select",{onChange:N,name:"domaine",children:[Object(O.jsx)("option",{value:"hotel",children:"hotel"}),Object(O.jsx)("option",{value:"building",children:"building"}),Object(O.jsx)("option",{selected:!0,value:"software",children:"Software"}),Object(O.jsx)("option",{value:"marketing",children:"Marketing"}),Object(O.jsx)("option",{value:"administation",children:"Administation"})]}),Object(O.jsxs)("select",{onChange:N,name:"contract",children:[Object(O.jsx)("option",{value:"traineeship",children:"traineeship"}),Object(O.jsx)("option",{value:"internship",children:"internship"}),Object(O.jsx)("option",{selected:!0,value:"permanent contract",children:"permanent contract"}),Object(O.jsx)("option",{value:"fixed-term",children:"fixed-term"})]}),Object(O.jsxs)("div",{className:"registerMain_buttons",children:[Object(O.jsx)(h.a,{onClick:null!==b&&1===b[0].role?p:function(){s.push("/")},children:"Back"}),Object(O.jsxs)(h.a,{onClick:_,autoFocus:!0,children:[" ",j?"UPDATE":"CREATE"]})]})]})]})}n(223);var Q=function(){var e=Object(m.f)();return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"frontage__button",children:[Object(O.jsx)("button",{className:"frontage__signIn",onClick:function(){e.push("/login")},children:"SIGN IN"}),Object(O.jsx)("button",{className:"frontage__joinUs",onClick:function(){e.push("/redirection")},children:"JOIN US"})]}),Object(O.jsx)(B,{})]})};var V=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],c=function(){i(!1)},s=Object(m.f)(),d=(localStorage.getItem("update"),function(){s.push("/")}),j=Object(a.useState)(null),b=Object(l.a)(j,2),p=b[0],x=b[1],f=function(e){var t;x(Object(r.a)(Object(r.a)({},p),{},(t={},Object(o.a)(t,e.target.name,e.target.value.trim()),Object(o.a)(t,"role",2),t)))};function y(e){e.preventDefault();var t=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/user",{headers:t,method:"post",body:JSON.stringify(p)}).then((function(e){return e.json()})),d()}return Object(O.jsxs)("div",{className:"registerMain",children:[Object(O.jsx)("h1",{children:"Enter Your Login Information "}),Object(O.jsx)(g.a,{open:n,autoHideDuration:6e3,onClose:c,children:Object(O.jsx)(v.a,{onClose:c,severity:"success",sx:{width:"100%"},children:"User Create With Success!"})}),Object(O.jsxs)("form",{className:"registerMain_form",onSubmit:y,children:[Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"email",label:"Email",type:"email",variant:"outlined",onChange:f}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"password",label:"Password",type:"password",variant:"outlined",onChange:f}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"lastName",label:"First Name",type:"text",variant:"outlined",onChange:f}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"firstName",label:"Last Name",type:"text",variant:"outlined",onChange:f}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"birthday",type:"date",variant:"outlined",onChange:f}),Object(O.jsxs)("div",{className:"registerMain_buttons",children:[Object(O.jsx)(h.a,{className:"registerMain_button",onClick:d,children:"Back"}),Object(O.jsx)(h.a,{className:"registerMain_button",onClick:y,autoFocus:!0,children:" CREATE "})]})]})]})};var X=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],c=function(){i(!1)},s=Object(m.f)(),d=localStorage.getItem("data"),j=(localStorage.getItem("update"),JSON.parse(d)),b=function(){s.push("/")},p=Object(a.useState)(null),x=Object(l.a)(p,2),f=x[0],y=x[1],C=function(e){var t;y(Object(r.a)(Object(r.a)({},f),{},(t={},Object(o.a)(t,e.target.name,e.target.value.trim()),Object(o.a)(t,"role",3),t)))};function N(e){e.preventDefault();var t=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/user",{headers:t,method:"post",body:JSON.stringify(f)}).then((function(e){return e.json()})),b()}return Object(O.jsxs)("div",{className:"registerMain",children:[Object(O.jsx)("h1",{children:"Enter Your Login Information "}),Object(O.jsx)(g.a,{open:n,autoHideDuration:6e3,onClose:c,children:Object(O.jsx)(v.a,{onClose:c,severity:"success",sx:{width:"100%"},children:"User Create With Success!"})}),Object(O.jsxs)("form",{className:"registerMain_form",onSubmit:N,children:[Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"email",label:"Email",type:"email",variant:"outlined",onChange:C}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"password",label:"Password",type:"password",variant:"outlined",onChange:C}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"lastName",label:"First Name",type:"text",variant:"outlined",onChange:C}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"firstName",label:"Last Name",type:"text",variant:"outlined",onChange:C}),Object(O.jsx)(u.a,{className:"registerMain_textField",id:"outlined-basic",autoFocus:!0,margin:"dense",name:"birthday",type:"date",variant:"outlined",onChange:C}),Object(O.jsxs)("div",{className:"registerMain_buttons",children:[Object(O.jsx)(h.a,{className:"registerMain_button",onClick:null!==j&&1===j[0].role?function(){s.push("admin")}:b,children:"Back"}),Object(O.jsx)(h.a,{className:"registerMain_button",onClick:N,autoFocus:!0,children:" CREATE "})]})]})]})};n(224);var Z=function(){var e=Object(m.f)();return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"redirection__button",children:[Object(O.jsx)(U.a,{color:"secondary",onClick:function(){e.push("/jobseeker")},children:"Seeking Job"}),Object(O.jsx)(U.a,{color:"secondary",onClick:function(){e.push("/championseeker")},children:"Seeking a Champion"})]})})},$=n(327),ee=n(328),te=n(329),ne=n(330),ae=n(331);n(225);var ie=function(){var e=i.a.useState(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s=function(){c(!1)},d=Object(a.useState)(null),j=Object(l.a)(d,2),h=j[0],m=j[1],b=Object(a.useState)(null),p=Object(l.a)(b,2),x=p[0],f=p[1],g=function(e){f(Object(r.a)(Object(r.a)({},x),{},Object(o.a)({},e.target.name,e.target.value.trim())))};Object(a.useEffect)((function(){!function(){var e=new Headers({"Content-Type":"application/json",Accept:"application/json"});fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/advertisement/"+v,{headers:e}).then((function(e){return e.json()})).then((function(e){m(e),console.log("second fetch ",e)}))}()}),[performance.navigation.TYPE_RELOAD]);var v=localStorage.getItem("id_advertisement"),y=JSON.parse(localStorage.getItem("data")),C=null!==y;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"learnMore__container",children:[h&&Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:h[0].title}),Object(O.jsx)("p",{children:h[0].city}),Object(O.jsx)("p",{children:h[0].contract}),Object(O.jsx)("p",{children:h[0].realease_date}),Object(O.jsx)("p",{children:h[0].description})]}),Object(O.jsx)("button",{className:"learnMore__button",onClick:function(){c(!0)},children:"Apply"}),Object(O.jsxs)($.a,{open:n,onClose:s,"aria-labelledby":"form-dialog-title",children:[Object(O.jsx)(ee.a,{id:"alert-dialog-title",children:"Enter Information About You"}),Object(O.jsx)(te.a,{children:Object(O.jsxs)(ne.a,{id:"alert-dialog-description",children:[!C&&Object(O.jsx)(u.a,{autoFocus:!0,margin:"dense",name:"email",label:"Adresse email",type:"email",fullWidth:!0,variant:"standard",onChange:g}),!C&&Object(O.jsx)(u.a,{autoFocus:!0,margin:"dense",name:"firstName",label:C?y[0].firstName:"First name",type:"text",fullWidth:!0,variant:"standard",onChange:g}),!C&&Object(O.jsx)(u.a,{autoFocus:!0,margin:"dense",name:"lastName",label:C?y[0].lastName:"Last name",type:"text",fullWidth:!0,variant:"standard",onChange:g}),!C&&Object(O.jsx)(u.a,{autoFocus:!0,margin:"dense",name:"birthday",label:C?y[0].birthday:"AAAA-MM-JJ",type:"date-time",fullWidth:!0,variant:"standard",onChange:g}),Object(O.jsx)(G.a,{fullWidth:!0,maxRows:4,name:"motivation","aria-label":"maximum height",placeholder:"Motivation Area",style:{width:550},onChange:g})]})}),Object(O.jsxs)(ae.a,{children:[Object(O.jsx)(U.a,{onClick:s,children:"Disagree"}),Object(O.jsx)(U.a,{onClick:function(e){e.preventDefault(),console.log("form= ",x);var t=new Headers;t.append("Content-Type","application/json"),fetch("https://nodejs-reactjs-mysql-champion.herokuapp.com/job_application",{headers:t,method:"post",body:JSON.stringify(x)}).then((function(e){return e.json()}))},autoFocus:!0,children:"  Agree "})]})]})]})})};var ce=function(){return Object(O.jsx)(f.a,{children:Object(O.jsxs)(m.c,{children:[Object(O.jsx)(m.a,{exact:!0,path:"/",children:Object(O.jsx)(Q,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/register",children:Object(O.jsx)(y,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/login",children:Object(O.jsx)(x,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/redirection",children:Object(O.jsx)(Z,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/registerApplication",children:Object(O.jsx)(Y,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/registerCompany",children:Object(O.jsx)(z,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/registerAdvertisement",children:Object(O.jsx)(K,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/admin",children:Object(O.jsx)(H,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/user",children:Object(O.jsx)(W,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/championseeker",children:Object(O.jsx)(X,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/jobseeker",children:Object(O.jsx)(V,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/learnmore",children:Object(O.jsx)(ie,{})}),Object(O.jsx)(m.a,{exact:!0,path:"/error",children:Object(O.jsx)(C,{})})]})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,333)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(ce,{})}),document.getElementById("root")),se()}},[[226,1,2]]]);
//# sourceMappingURL=main.cb36e71c.chunk.js.map