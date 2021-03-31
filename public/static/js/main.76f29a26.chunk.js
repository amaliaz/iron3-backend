(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(61),i=n.n(s),r=n(11),o=n(17),l=n(18),u=n(20),j=n(19),d=n(62),h=n.n(d).a.create({baseURL:"https://traveliron.herokuapp.com/api",withCredentials:!0});function p(e){if(e.response)throw console.log(e.response.data.message),e.response.data;throw e}var b={service:h,signup:function(e){return h.post("/signup",e).then((function(e){return e.data})).catch(p)},signin:function(e){return h.post("/signin",e).then((function(e){return e.data})).catch(p)},logout:function(){return h.delete("/logout").catch(p)},isLoggedIn:function(){return h.get("/current-user").then((function(e){return e.data})).catch(p)},getItems:function(){return h.get("/trips").then((function(e){return e.data})).catch(p)},updateUser:function(e){return h.patch("/profile",e).then((function(e){return e.data})).catch(p)},getUserInfos:function(){return h.get("/profile").then((function(e){return e.data})).catch(p)},removeItem:function(e){return h.delete("/trips/".concat(e)).then((function(e){return e.data})).catch(p)},updateItem:function(e,t){return h.patch("/items/".concat(e),t).then((function(e){return e.data})).catch(p)},getUserItems:function(){return h.get("/profile/trips").then((function(e){return e.data})).catch(p)},addItem:function(e){return h.post("/new-trip",e).then((function(e){return e.data})).catch(p)}},m=c.a.createContext(),O=n(2),g=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.isLoggedIn().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return Object(O.jsx)(m.Provider,{value:e,children:this.props.children})}}]),n}(a.Component),x=(n(89),n(10)),f=(n(90),function(e){return function(t){return Object(O.jsx)(m.Consumer,{children:function(n){return Object(O.jsx)(e,Object(x.a)(Object(x.a)({},t),{},{context:n}))}})}}),v=(n(91),f((function(e){var t=e.context,n=e.toggleFormDisplay;return Object(O.jsxs)("nav",{className:"NavMain",children:[Object(O.jsx)(r.c,{exact:!0,to:"/",children:Object(O.jsx)("h3",{className:"logo",children:"Travel"})}),Object(O.jsxs)("ul",{className:"nav-list",children:[t.isLoggedIn&&Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)("li",{children:Object(O.jsx)("p",{onClick:n,children:"Add Item"})}),Object(O.jsx)("li",{children:Object(O.jsx)("p",{onClick:n,children:"List Items"})}),Object(O.jsx)("li",{children:Object(O.jsx)("p",{onClick:function(){b.logout().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))},children:"Logout"})})]}),!t.isLoggedIn&&Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)("li",{children:Object(O.jsx)(r.c,{to:"/signin",className:"navlink",children:"Log in"})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.c,{to:"/signup",className:"navlink",children:"Create account"})})]})]})]})}))),y=n(8),C=n(9),w=(n(51),f(function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(C.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),b.signin(e.state).then((function(t){console.log("DATAAAAA",t),e.props.context.setUser(t)})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return this.props.context.isLoggedIn?Object(O.jsx)(y.a,{to:"/"}):Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("header",{className:"section header",children:Object(O.jsxs)("div",{className:"header__text",children:[Object(O.jsx)("h1",{children:"sup."}),Object(O.jsx)("p",{children:"Sign in or create a new account."})]})}),Object(O.jsx)("div",{className:"section sign-in",children:Object(O.jsxs)("form",{autoComplete:"off",className:"form",onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.email,className:"input",id:"email",type:"email",name:"email",placeholder:"Email"}),Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.password,className:"input",id:"password",type:"password",name:"password",placeholder:"Password"}),Object(O.jsx)("button",{className:"btn-submit",children:"Sign In"}),Object(O.jsx)(r.b,{to:"/signup",className:"opposite-btn1",children:"Don't have an account?"})]})})]})}}]),n}(a.Component))),N=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(w,{})})}}]),n}(a.Component),S=f(function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.handleChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(C.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),b.signup(e.state).then((function(t){e.props.context.setUser(t)})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return this.props.context.isLoggedIn?Object(O.jsx)(y.a,{to:"/signin"}):Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("header",{className:"section header",children:Object(O.jsxs)("div",{className:"header__text",children:[Object(O.jsx)("h1",{children:"sup."}),Object(O.jsx)("p",{children:"Create an Account"})]})}),Object(O.jsx)("div",{className:"section sign-up",children:Object(O.jsxs)("form",{autoComplete:"off",className:"form",onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.firstName,className:"input",id:"firstName",type:"text",name:"firstName",placeholder:"First Name"}),Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.lastName,className:"input",id:"lastName",type:"text",name:"lastName",placeholder:"Last Name"}),Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.email,className:"input",id:"email",type:"email",name:"email",placeholder:"Email"}),Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.password,className:"input",id:"password",type:"password",name:"password",placeholder:"Password"}),Object(O.jsx)("input",{onChange:this.handleChange,value:this.state.profileImg,className:"input",id:"profileImg",type:"file",name:"profileImg",placeholder:"Profile Image",multiple:!0}),Object(O.jsx)("button",{className:"btn-submit",children:"Sign up"}),Object(O.jsx)(r.b,{to:"/signin",className:"opposite-btn1",children:"Already a Member?"})]})})]})}}]),n}(a.Component)),I=function(e){return Object(O.jsx)(S,{})},L=n(7),F=n.n(L),k=n(16),D=n(12),A=n(24),E=(n(114),n(32)),U=n.n(E),P=(n(60),function(e){var t=e.showPopup,n=e.trips,a=(e.setTrips,e.setShowPopup),s=e.viewport;return Object(O.jsx)("div",{children:n.map((function(e){return Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)(A.a,{latitude:e.location.coordinates[0],longitude:e.location.coordinates[1],children:Object(O.jsx)("div",{onClick:function(){return a(Object(x.a)(Object(x.a)({},t),{},Object(C.a)({},e._id,!0)))},children:Object(O.jsx)("svg",{className:"marker yellow",style:{height:"".concat(6*s.zoom,"px"),width:"".concat(6*s.zoom,"px")},version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",children:Object(O.jsx)("g",{children:Object(O.jsx)("g",{children:Object(O.jsx)("path",{d:"M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"})})})})})}),t[e._id]?Object(O.jsx)(A.b,{latitude:e.location.coordinates[0],longitude:e.location.coordinates[1],closeButton:!0,closeOnClick:!1,dynamicPosition:!0,onClose:function(){return a(Object(x.a)(Object(x.a)({},t),{},Object(C.a)({},e._id,!1)))},anchor:"top",children:Object(O.jsxs)("div",{className:"popup",children:[Object(O.jsx)("img",{src:e.image,alt:"Trip"}),Object(O.jsx)("h2",{children:e.title}),Object(O.jsxs)("p",{children:["Description: ",e.description]}),Object(O.jsxs)("small",{children:["Start: ",new Date(e.startDate).toLocaleDateString()]}),Object(O.jsxs)("small",{children:["Start: ",new Date(e.endDate).toLocaleDateString()]}),Object(O.jsxs)("h3",{children:["City: ",e.city]}),Object(O.jsxs)("p",{children:["Transportation: ",e.transportation]}),Object(O.jsxs)("p",{children:["Accomondation: ",e.accomondation]}),Object(O.jsx)(r.b,{to:"/edit",children:"Edit"})]})}):null]},e._id)}))})}),T=n(65);function z(e,t,n){if(!t||"object"!==typeof t||t instanceof Date||t instanceof File){var a=null==t?"":t;e.append(n,a)}else Object.keys(t).forEach((function(a){z(e,t[a],n?"".concat(n,"[").concat(a,"]"):a)}))}var _=function(e){var t=e.location,n=e.onClose,c=Object(a.useState)(""),s=Object(D.a)(c,2),i=s[0],r=s[1],o=Object(T.a)(),l=o.register,u=o.handleSubmit,j=function(){var e=Object(k.a)(F.a.mark((function e(a){var c,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.image[0]),c={coordinates:[t.latitude,t.longitude]},a.location=c,e.prev=3,a.image=a.image[0],console.log(a),z(s=new FormData,a),console.log("fomdata",s),e.next=11,b.addItem(s);case 11:n(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0),r(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("form",{onSubmit:u(j),className:"entry-form",children:[i?Object(O.jsx)("h3",{className:"error",children:i}):null,Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{name:"title",type:"text",required:!0,ref:l}),Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("textarea",{name:"description",type:"text",rows:3,ref:l}),Object(O.jsx)("label",{htmlFor:"image",children:"Image"}),Object(O.jsx)("input",{name:"image",type:"file",ref:l}),Object(O.jsx)("label",{htmlFor:"accomondation",children:"Accomondation"}),Object(O.jsx)("input",{name:"accomondation",type:"text",required:!0,ref:l}),Object(O.jsx)("label",{htmlFor:"transportation",children:"Transportation"}),Object(O.jsx)("input",{name:"transportation",type:"text",required:!0,ref:l}),Object(O.jsx)("label",{htmlFor:"startDate",children:"Start Date"}),Object(O.jsx)("input",{name:"startDate",type:"date",required:!0,ref:l}),Object(O.jsx)("label",{htmlFor:"endDate",children:"End Date"}),Object(O.jsx)("input",{name:"endDate",type:"date",required:!0,ref:l}),Object(O.jsx)("button",{children:"ADD"})]})};U.a.workerClass=n(115).default;var M=function(){var e=Object(a.useState)([]),t=Object(D.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)({}),r=Object(D.a)(i,2),o=r[0],l=r[1],u=Object(a.useState)(null),j=Object(D.a)(u,2),d=j[0],h=j[1],p=c.a.useState({width:"100vw",height:"100vh",latitude:48.8566,longitude:2.3522,zoom:14}),m=Object(D.a)(p,2),g=m[0],f=m[1],v=function(){var e=Object(k.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getItems();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()}),[]),Object(O.jsxs)(A.c,Object(x.a)(Object(x.a)({},g),{},{mapStyle:"mapbox://styles/amaliaflz/ckmxg2uv00ny717pdnv9ehhci",onViewportChange:f,onDblClick:function(e){var t=Object(D.a)(e.lngLat,2),n=t[0],a=t[1];console.log("EVEEEEEENT",e),h({longitude:n,latitude:a})},children:[Object(O.jsx)(P,{showPopup:o,setShowPopup:l,trips:n,viewport:g,setTrips:s}),d?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(A.a,{latitude:d.latitude,longitude:d.longitude,children:Object(O.jsx)("div",{children:Object(O.jsx)("svg",{className:"marker red",style:{height:"".concat(6*g.zoom,"px"),width:"".concat(6*g.zoom,"px")},version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",children:Object(O.jsx)("g",{children:Object(O.jsx)("g",{children:Object(O.jsx)("path",{d:"M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"})})})})})}),Object(O.jsx)(A.b,{latitude:d.latitude,longitude:d.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,onClose:function(){return h(null)},anchor:"top",children:Object(O.jsx)("div",{className:"popup",children:Object(O.jsx)(_,{onClose:function(){h(null),v()},location:d})})})]}):null]}))},B=f(function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={selectedItem:null,items:[]},e}return Object(l.a)(n,[{key:"render",value:function(){this.props.context.user;return Object(O.jsx)(M,{})}}]),n}(c.a.Component)),q=function(){return Object(O.jsx)("div",{className:"NotFound",children:Object(O.jsx)("h2",{children:"Oh oh, seems like the page you're looking for doesn't exist !"})})},J=n(66),V=f((function(e){var t=e.context,n=Object(J.a)(e,["context"]);return t.isLoading?null:t.isLoggedIn?Object(O.jsx)(y.b,Object(x.a)({},n)):Object(O.jsx)(y.a,{to:"/signin"})})),R=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={displayForm:!1},e.toggleFormDisplay=function(){e.setState({displayForm:!e.state.displayForm})},e.handleClose=function(){e.setState({displayForm:!1})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{toggleFormDisplay:this.toggleFormDisplay}),Object(O.jsxs)(y.d,{children:[Object(O.jsx)(V,{exact:!0,path:"/",render:function(t){return Object(O.jsx)(B,Object(x.a)(Object(x.a)({},t),{},{displayForm:e.state.displayForm,handleFormClose:e.handleClose}))}}),Object(O.jsx)(y.b,{exact:!0,path:"/signup",component:I}),Object(O.jsx)(y.b,{exact:!0,path:"/signin",component:N}),Object(O.jsx)(y.b,{path:"*",component:q})]})]})}}]),n}(c.a.Component),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(r.a,{children:Object(O.jsx)(g,{children:Object(O.jsx)(R,{})})}),document.getElementById("root")),G()},51:function(e,t,n){},60:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.76f29a26.chunk.js.map