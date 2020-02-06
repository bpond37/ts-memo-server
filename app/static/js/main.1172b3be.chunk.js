(this["webpackJsonpts-note-app"]=this["webpackJsonpts-note-app"]||[]).push([[0],{50:function(e,t,n){e.exports=n.p+"static/media/pen.f1830e2f.svg"},51:function(e,t,n){e.exports=n.p+"static/media/trashcan.d7bec4e6.svg"},56:function(e,t,n){e.exports=n(91)},61:function(e,t,n){},62:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(25),i=n.n(o),c=(n(61),n(62),n(4)),s=n(22),u=n(5),l=n(6);function p(){var e=Object(u.a)(["\n  &.panes{\n    height : calc(100vh - 3rem);\n    display : flex;\n  }\n  &.pane{\n    display:flex;\n    flex:1;\n    &.preview{\n      @media(max-width:768px){\n      flex:0;\n      /* display:none; */\n      }\n    &.editor{\n      @media(max-width:768px){\n      flex:1;\n      }\n    }\n    }\n  }\n  &.seperator{\n    @media(max-width:768px){\n    display:none;\n    }\n    height:100%;\n    position:absolute;\n    transform : translate(-50%);\n    cursor: col-resize;\n    border-left: 1px solid;\n    border-color: lightgray\n  }\n"]);return p=function(){return e},e}var d=l.a.div(p());function m(e){var t=e.topBar,n=e.editor,o=e.preview,i=Object(r.useState)(.2),c=Object(s.a)(i,2),u=c[0],l=c[1],p=function(e){l(e.clientX/window.innerWidth)},m={flex:u},f={flex:1-u},h={left:"".concat(100*u,"%")},g=function e(t){document.body.removeEventListener("mousemove",p),window.removeEventListener("mouseup",e)};return a.a.createElement(d,null,t,a.a.createElement(d,{className:"panes"},a.a.createElement(d,{className:"pane preview",style:m},o),a.a.createElement(d,{className:"pane editor",style:f},n),a.a.createElement(d,{className:"seperator",style:h,onMouseDown:function(e){document.body.addEventListener("mousemove",p),window.addEventListener("mouseup",g)}})))}var f,h,g=n(50),b=n.n(g),y=n(51),v=n.n(y);function w(){var e=Object(u.a)(["\n  background: white;\n  border-radius : 4px;\n  margin-left : 10px;\n  padding-top : 2px;\n  width : 40px;\n  height : 20px;\n  border : 0.5px solid lightgray;\n  font-size : 10;\n  /* align-items: center; */\n  justify-content: center;\n  vertical-align: middle;\n  text-align : center;\n  &:hover{\n    background: whitesmoke;\n  }\n"]);return w=function(){return e},e}function O(){var e=Object(u.a)(["\n  display : flex;\n  padding-left : 1rem;\n  background : whitesmoke;\n  height : 3rem;\n  border-bottom : 0.3px solid;\n  /* justify-content : center; */\n  border-bottom-color :lightgray;\n  align-items: center;\n  font-family:Arial, Helvetica, sans-serif;\n  justify-content:space-between;\n\n  &.header{\n    padding-left: 0;\n  }\n  "]);return O=function(){return e},e}function j(){var e=Object(u.a)(["\n  padding-right: 2rem;\n"]);return j=function(){return e},e}!function(e){e.MEMO_STORE="memoStore",e.AUTH_STORE="authStore"}(f||(f={})),function(e){e.SIGNIN="/login",e.SIGNUP="/register",e.EDITER="/"}(h||(h={}));var x=Object(c.b)(f.MEMO_STORE,f.AUTH_STORE)(Object(c.c)((function(e){var t=e[f.MEMO_STORE],n=t.newMemo,r=t.setIndex,o=t.deleteMemo,i=t.selectedId,c=e[f.AUTH_STORE].logout,s=e.history;return a.a.createElement(k,null,a.a.createElement(k,{className:"header"},a.a.createElement("h3",null,"The Note"),a.a.createElement(M,{onClick:function(){n(),r()}},a.a.createElement("img",{src:b.a,width:13,height:"auto",alt:"new memo"})),a.a.createElement(M,{onClick:function(){o(i)}},a.a.createElement("img",{src:v.a,width:13,height:"auto",alt:"remove memo"}))),a.a.createElement(E,{onClick:function(){console.log("handlelogout"),c(),s.push("/login")}},a.a.createElement("h4",null,"logout")))}))),E=l.a.div(j()),k=l.a.div(O()),M=l.a.div(w()),S=n(23),I=(n(37),n(33)),T=n.n(I),P=n(9),A=n.n(P),D=function(e){return void 0===e&&(e=""),e.slice(0,15)},z=function(e){return T()(e,{allowedTags:[]}).slice(0,10)},N=function(e){return new Date(e).getTime()},L=function(e){return A()(e).toISOString()};function C(){var e=Object(u.a)(["\n  display: block;\n  font-size: 1rem;\n  font-weight: 400;\n  font-family: 'Nanum Myeongjo', serif;\n  border: 0px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: calc(100% - 60px);\n  outline: none;\n  resize: none;\n"]);return C=function(){return e},e}function R(){var e=Object(u.a)(["\n  border: none;\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  font-family: 'Nanum Myeongjo', serif;\n"]);return R=function(){return e},e}function U(){var e=Object(u.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  /* @media(max-width:768px){\n    flex:1;\n    } */\n  &.createdDate {\n    height: 2rem;\n    flex: 0;\n    padding-top: 0.5rem;\n    text-align: center;\n    font-size: 0.8rem;\n    color: darkgray;\n  }\n  &.inputTitle {\n    /* flex: 1; */\n    padding-left: 1rem;\n    padding-right: 1rem;\n    height: 3rem;\n    font-size: 1rem;\n    height: 1rem;\n    flex: 0;\n  }\n  &.inputText {\n    padding: 1rem;\n    font-size: 1rem;\n    height: 1rem;\n  }\n"]);return U=function(){return e},e}var _=Object(c.b)(f.MEMO_STORE)(Object(c.c)((function(e){var t,n=e[f.MEMO_STORE],o=n.setMemo,i=n.memo,c=n.updateMemo,s=n.syncTitle,u=n.syncContents,l={id:0,title:"",createdAt:A()(Object(P.now)()).toISOString(),updatedAt:A()(Object(P.now)()).toISOString(),contents:""};return Object(r.useEffect)((function(){o(l)}),[]),a.a.createElement(H,null,a.a.createElement(H,{className:"createdDate"},(t=N(i.updatedAt),A()(t).locale("kr").format("lll"))),a.a.createElement(H,{className:"inputTitle"},a.a.createElement(B,{type:"text",value:i.title,onChange:function(e){var t=e.target.value;o(Object(S.a)({},i,{updatedAt:L(Object(P.now)()),id:i.id,title:t})),s(t),c()},placeholder:"title"})),a.a.createElement(H,{className:"inputText"},a.a.createElement(G,{value:i.contents,onChange:function(e){var t=e.target.value;o(Object(S.a)({},i,{id:i.id,updatedAt:L(Object(P.now)()),contents:t})),u(t),c()},placeholder:"text"})))}))),H=l.a.div(U()),B=l.a.input(R()),G=l.a.textarea(C());function F(){var e=Object(u.a)(["\n  \n  padding-left : 1rem;\n  padding-top : 1rem;\n  font-size: 1rem;\n  &.title{\n    font-size : 1rem;\n    font-weight: bold;\n  }\n  &.createdTime{\n    padding-top: 0;\n    font-size: 0.8rem;\n    color:gray;\n  }\n  &.text{\n    padding-top : 0;\n    font-size: 0.8rem;\n    /* color:gray; */\n  }\n"]);return F=function(){return e},e}function W(){var e=Object(u.a)(["\n  /* padding: 1rem; */\n  flex-direction:column;\n  overflow-y : auto;\n  font-size: 1.2rem;\n  border-bottom : 1px solid;\n  border-bottom-color :lightgray;\n  height: 5rem;\n  background:",";\n  font-family: 'Nanum Myeongjo', serif; \n  &.title{\n    font-size: 2.5rem;\n    font-weight: 300;\n  }\n  &:hover{\n    background: lightgray;\n  }\n\n"]);return W=function(){return e},e}var J=function(e){var t=e.updatedAt,n=e.id,r=e.title,o=e.contents,i=e.selectMemo,c=e.selected;return a.a.createElement(X,{defaultChecked:c,onClick:function(){return i(n)}},a.a.createElement($,{className:"title"},""===r?"\uc0c8\ub85c\uc6b4 \uba54\ubaa8":D(z(r))),a.a.createElement($,{className:"text"},D(z(o))),a.a.createElement($,{className:"createdTime"},A()(t).locale("kr").fromNow()))},X=l.a.div(W(),(function(e){return e.defaultChecked?"lightgray":"white"})),$=l.a.div(F());function q(){var e=Object(u.a)(["\n  display:flex; \n  flex-direction:column;\n  flex:1;\n  \n"]);return q=function(){return e},e}var K=Object(c.b)(f.MEMO_STORE)(Object(c.c)((function(e){var t=e[f.MEMO_STORE],n=t.memos,o=t.getMemoById,i=t.selectedId,c=t.getMemoList;return Object(r.useEffect)((function(){console.log("useEffect..."),c()}),[]),a.a.createElement(Q,null,n.slice(0).sort((function(e,t){return N(t.updatedAt)-N(e.updatedAt)})).map((function(e){return a.a.createElement(J,{key:e.id,createdAt:e.createdAt,updatedAt:e.updatedAt,id:e.id,contents:e.contents,title:e.title,selectMemo:function(){return t=e.id,void o(t);var t},selected:i===e.id})})))}))),Q=l.a.div(q());var V=Object(c.b)(f.MEMO_STORE,f.AUTH_STORE)(Object(c.c)((function(e){return a.a.createElement(m,{topBar:a.a.createElement(x,e),editor:a.a.createElement(_,e),preview:a.a.createElement(K,e)})}))),Y=n(17),Z=Object(c.b)(f.AUTH_STORE)(Object(c.c)((function(e){var t=e.component,n=e.redirectTo,r=e.authStore,o=e.path,i=e.exact;return a.a.createElement(Y.b,{path:o,exact:i,render:function(e){return r.isLoggedIn()?a.a.createElement(t,e):a.a.createElement(Y.a,{to:n})}})}))),ee=n(19),te=n(2),ne=n.n(te),re={gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"]},ae=n(21);function oe(){var e=Object(u.a)(["\n  background: ",";\n  font-size:1rem;\n  border:none;\n  border-bottom: 1px solid ",";\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  outline:none;\n  width:100%;\n  &:focus{\n    color:",";\n    border-bottom: 1px solid ",";\n  }\n  &+&{\n    margin-top: 1rem;\n  }\n"]);return oe=function(){return e},e}function ie(){var e=Object(u.a)(["\n  .logo-area{\n    display: block;\n    padding-bottom: 2rem;\n    text-align: center;\n    font-weight: bold;\n    letter-spacing: 2px;\n  }\n  /* box-shadow: 0 0 8px rgba(0,0,0,0.025); */\n  text-align:right;\n  /* justify-content: right; */\n  padding: 2rem;\n  width: 360px;\n  background: white;\n  border-radius: 2px;\n"]);return ie=function(){return e},e}function ce(){var e=Object(u.a)(["\n  display:flex;\n  width: 100%;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.5rem 1rem;\n  color: white;\n  outline: none;\n  margin-top: 1rem;\n  justify-content:center;\n  cursor: pointer;\n  \n  background: ",";\n  &:hover {\n    background: ",";\n  }\n"]);return ce=function(){return e},e}function se(){var e=Object(u.a)(["\n  position :absolute;\n  left: 0;\n  top: 0;\n  bottom : 0;\n  right: 0;\n  /* background : ","; */\n  /* flex \ub0b4\ubd80 \ub0b4\uc6a9 \uc911\uc559 \uc815\ub82c */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  h1 {\n    text-align:center;\n    margin : 0;\n    color : ",";\n    margin-bottom : 1rem;\n  }\n"]);return se=function(){return e},e}var ue=Object(c.b)(f.AUTH_STORE)(Object(c.c)((function(e){var t=e.authStore,n=e.history;return Object(r.useEffect)((function(){t.resetPasswordAndEmail()}),[t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(ae.Helmet,null,a.a.createElement("title",null,"Login")),a.a.createElement(le,null,a.a.createElement(de,null,a.a.createElement("h1",null,"Log In"),a.a.createElement(me,{placeholder:"Email Address",value:t.email,onChange:function(e){t.setEmail(e.target.value)}}),a.a.createElement(me,{type:"password",placeholder:"Password",value:t.password,onChange:function(e){t.setPassword(e.target.value)}}),a.a.createElement(pe,{onClick:function(e){return ne.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),e.stopPropagation(),r.prev=2,r.next=5,ne.a.awrap(t.login());case 5:n.push(h.EDITER),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),alert(r.t0);case 11:case"end":return r.stop()}}),null,null,[[2,8]])}},"Login with Email"),a.a.createElement(ee.b,{to:h.SIGNUP},"Sign Up"))))}))),le=l.a.div(se(),re.gray[2],re.gray[8]),pe=l.a.button(ce(),re.gray[8],re.gray[6]),de=l.a.div(ie()),me=l.a.input(oe(),re.gray[1],re.gray[5],re.gray[7],re.gray[7]);function fe(){var e=Object(u.a)(["\n  background: ",";\n  font-size:1rem;\n  border:none;\n  border-bottom: 1px solid ",";\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  outline:none;\n  width:100%;\n  &:focus{\n    color:",";\n    border-bottom: 1px solid ",";\n  }\n  &+&{\n    margin-top: 1rem;\n  }\n"]);return fe=function(){return e},e}function he(){var e=Object(u.a)(["\n  .logo-area{\n    display: block;\n    padding-bottom: 2rem;\n    text-align: center;\n    font-weight: bold;\n    letter-spacing: 2px;\n  }\n  /* box-shadow: 0 0 8px rgba(0,0,0,0.025); */\n  text-align:right;\n  /* justify-content: right; */\n  padding: 2rem;\n  width: 360px;\n  background: white;\n  border-radius: 2px;\n"]);return he=function(){return e},e}function ge(){var e=Object(u.a)(["\n  display:flex;\n  width: 100%;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.5rem 1rem;\n  color: white;\n  outline: none;\n  margin-top: 1rem;\n  justify-content:center;\n  cursor: pointer;\n  \n  background: ",";\n  &:hover {\n    background: ",";\n  }\n"]);return ge=function(){return e},e}function be(){var e=Object(u.a)(["\n  position :absolute;\n  left: 0;\n  top: 0;\n  bottom : 0;\n  right: 0;\n  /* background : ","; */\n  /* flex \ub0b4\ubd80 \ub0b4\uc6a9 \uc911\uc559 \uc815\ub82c */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  h1 {\n    text-align:center;\n    margin : 0;\n    color : ",";\n    margin-bottom : 1rem;\n  }\n"]);return be=function(){return e},e}var ye=Object(c.b)(f.AUTH_STORE)(Object(c.c)((function(e){var t=e.history,n=Object(r.useState)(""),o=Object(s.a)(n,2),i=o[0],c=o[1],u=Object(r.useState)(""),l=Object(s.a)(u,2),p=l[0],d=l[1],m=Object(r.useState)(""),f=Object(s.a)(m,2),g=f[0],b=f[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(ae.Helmet,null,a.a.createElement("title",null,"Sign Up")),a.a.createElement(ve,null,a.a.createElement(Oe,null,a.a.createElement("h1",null,"Sign Up"),a.a.createElement(je,{placeholder:"Email Address",value:i,onChange:function(e){c(e.target.value)}}),a.a.createElement(je,{type:"password",value:p,onChange:function(e){d(e.target.value)},placeholder:"Password"}),a.a.createElement(je,{type:"password",placeholder:"Confirm Password",value:g,onChange:function(e){b(e.target.value)}}),a.a.createElement(we,{onClick:function(n){var r;return ne.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),n.stopPropagation(),!(p.length<5)){a.next=5;break}return alert("\ube44\ubc00\ubc88\ud638\ub294 5\uae00\uc790 \uc774\uc0c1\uc785\ub2c8\ub2e4."),a.abrupt("return",!1);case 5:if(!(i.length<5)){a.next=8;break}return alert("ID\ub294 5\uae00\uc790 \uc774\uc0c1\uc785\ub2c8\ub2e4."),a.abrupt("return",!1);case 8:if(p===g){a.next=11;break}return alert("\uc785\ub825\ud558\uc2e0 \ube44\ubc00\ubc88\ud638\uac00 \ube44\ubc00\ubc88\ud638\ud655\uc778\uc5d0 \uc785\ub825\ud55c \ube44\ubc00\ubc88\ud638\uc640 \ub2e4\ub985\ub2c8\ub2e4."),a.abrupt("return",!1);case 11:return a.prev=11,a.next=14,ne.a.awrap(e.authStore.register({email:i,password:p}));case 14:r=a.sent,t.push(h.SIGNIN),alert(r.data.msg),a.next=22;break;case 19:a.prev=19,a.t0=a.catch(11),alert(a.t0.response.data.msg);case 22:return a.abrupt("return",!1);case 23:case"end":return a.stop()}}),null,null,[[11,19]])}},"Continue with Email"),a.a.createElement(ee.b,{to:h.SIGNIN},"Login"))))}))),ve=l.a.div(be(),re.gray[2],re.gray[8]),we=l.a.button(ge(),re.gray[8],re.gray[6]),Oe=l.a.div(he()),je=l.a.input(fe(),re.gray[1],re.gray[5],re.gray[7],re.gray[7]);var xe=Object(c.b)(f.AUTH_STORE)(Object(c.c)((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ae.Helmet,null,a.a.createElement("title",null,"Ulendo")),a.a.createElement(ee.a,null,a.a.createElement(Y.d,null,a.a.createElement(Z,{redirectTo:"/login",exact:!0,path:"/",component:V}),a.a.createElement(Y.b,{exact:!0,path:"/login",component:ue}),a.a.createElement(Y.b,{exact:!0,path:"/register",component:ye}))))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee,ke,Me,Se,Ie,Te,Pe,Ae,De,ze,Ne,Le,Ce=n(12),Re=n(14),Ue=n(16),_e=n(3),He=(n(39),n(1)),Be=n(15),Ge=n.n(Be),Fe=function(){function e(){Object(Ce.a)(this,e)}return Object(Ue.a)(e,[{key:"login",value:function(e){return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("/api"),t.abrupt("return",Ge.a.post("".concat("/api","/auth/login"),e));case 2:case"end":return t.stop()}}))}},{key:"register",value:function(e){return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Ge.a.post("".concat("/api","/auth/register"),e));case 1:case"end":return t.stop()}}))}},{key:"checkLogin",value:function(){return ne.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ge.a.get("".concat("/api","/auth/check")));case 1:case"end":return e.stop()}}))}}]),e}(),We=n(36),Je=n.n(We),Xe=n(27),$e=Object(Xe.a)((ke=function(){function e(){var t=this;Object(Ce.a)(this,e),Object(Re.a)(this,"token",Me,this),Object(Re.a)(this,"auth",Se,this),Object(Re.a)(this,"email",Ie,this),Object(Re.a)(this,"password",Te,this),this.authService=new Fe,this.token&&(this.auth=Je()(this.token)),Object(He.m)((function(){return t.token}),(function(e){null!=e&&window.sessionStorage.setItem("jwt",e)}))}return Object(Ue.a)(e,[{key:"isLoggedIn",value:function(){return null!=this.token}},{key:"login",value:function(){var e,t;return ne.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e={email:this.email,password:this.password},n.next=3,ne.a.awrap(this.authService.login(e));case 3:t=n.sent,this.setToken(t.data.data.token);case 5:case"end":return n.stop()}}),null,this)}},{key:"checkLogin",value:function(){var e;return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne.a.awrap(this.authService.checkLogin());case 2:e=t.sent,console.log(e);case 4:case"end":return t.stop()}}),null,this)}},{key:"logout",value:function(){return ne.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:window.sessionStorage.removeItem("jwt"),this.token=null,this.auth=void 0;case 3:case"end":return e.stop()}}),null,this)}},{key:"register",value:function(e){return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne.a.awrap(this.authService.register(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),null,this)}},{key:"resetPasswordAndEmail",value:function(){this.password="",this.email=""}},{key:"setPassword",value:function(e){this.password=e}},{key:"setEmail",value:function(e){this.email=e}},{key:"setToken",value:function(e){this.token=e,this.auth=Je()(e)}}]),e}(),Me=Object(_e.a)(ke.prototype,"token",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return window.sessionStorage.getItem("jwt")}}),Se=Object(_e.a)(ke.prototype,"auth",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ie=Object(_e.a)(ke.prototype,"email",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Te=Object(_e.a)(ke.prototype,"password",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Object(_e.a)(ke.prototype,"login",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"login"),ke.prototype),Object(_e.a)(ke.prototype,"checkLogin",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"checkLogin"),ke.prototype),Object(_e.a)(ke.prototype,"logout",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"logout"),ke.prototype),Object(_e.a)(ke.prototype,"resetPasswordAndEmail",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"resetPasswordAndEmail"),ke.prototype),Object(_e.a)(ke.prototype,"setPassword",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"setPassword"),ke.prototype),Object(_e.a)(ke.prototype,"setEmail",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"setEmail"),ke.prototype),Object(_e.a)(ke.prototype,"setToken",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"setToken"),ke.prototype),Ee=ke))||Ee,qe=Object(Xe.a)((Ae=function(){function e(t){Object(Ce.a)(this,e),this.memoService=t,Object(Re.a)(this,"memos",De,this),Object(Re.a)(this,"memo",ze,this),Object(Re.a)(this,"selectedId",Ne,this),Object(Re.a)(this,"selectedIndex",Le,this)}return Object(Ue.a)(e,[{key:"getMemoList",value:function(){var e,t;return ne.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ne.a.awrap(this.memoService.getMemoList());case 2:e=n.sent,t=e.data.data,this.setMemos(t),this.getRecentUpdatedMemo();case 6:case"end":return n.stop()}}),null,this)}},{key:"newMemo",value:function(){var e;return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne.a.awrap(this.memoService.registerMemo({title:"",contents:""}));case 2:return e=t.sent,t.next=5,ne.a.awrap(this.getMemoList());case 5:this.selectedId=e.data.data.id,this.getMemoById(this.selectedId);case 7:case"end":return t.stop()}}),null,this)}},{key:"deleteMemo",value:function(e){return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne.a.awrap(this.memoService.deleteMemo(e));case 2:return t.next=4,ne.a.awrap(this.getMemoList());case 4:case"end":return t.stop()}}),null,this)}},{key:"updateMemo",value:function(){return ne.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.a.awrap(this.memoService.updateMemo(this.memo));case 2:case"end":return e.stop()}}),null,this)}},{key:"getRecentUpdatedMemo",value:function(){var e=this.memos;if(e.length>0){var t=e.sort((function(e,t){return N(t.updatedAt)-N(e.updatedAt)}))[0].id;this.getMemoById(t)}}},{key:"getMemoById",value:function(e){this.selectedId=e;var t=this.memos.find((function(t){return t.id===e}));t&&this.setMemo(t)}},{key:"setMemo",value:function(e){this.memo=e,this.setIndex()}},{key:"setMemos",value:function(e){this.memos=e}},{key:"setIndex",value:function(){var e=this,t=this.memos.find((function(t){return t.id===e.selectedId}));if(t){var n=this.memos.indexOf(t);this.selectedIndex=n}}},{key:"syncTitle",value:function(e){this.memos.splice(this.selectedIndex,1,Object(S.a)({},this.memo,{title:e}))}},{key:"syncContents",value:function(e){this.memos.splice(this.selectedIndex,1,Object(S.a)({},this.memo,{contents:e}))}}]),e}(),De=Object(_e.a)(Ae.prototype,"memos",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ze=Object(_e.a)(Ae.prototype,"memo",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Ne=Object(_e.a)(Ae.prototype,"selectedId",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Le=Object(_e.a)(Ae.prototype,"selectedIndex",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(_e.a)(Ae.prototype,"getMemoList",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"getMemoList"),Ae.prototype),Object(_e.a)(Ae.prototype,"newMemo",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"newMemo"),Ae.prototype),Object(_e.a)(Ae.prototype,"deleteMemo",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"deleteMemo"),Ae.prototype),Object(_e.a)(Ae.prototype,"updateMemo",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"updateMemo"),Ae.prototype),Object(_e.a)(Ae.prototype,"getRecentUpdatedMemo",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"getRecentUpdatedMemo"),Ae.prototype),Object(_e.a)(Ae.prototype,"getMemoById",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"getMemoById"),Ae.prototype),Object(_e.a)(Ae.prototype,"setMemo",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"setMemo"),Ae.prototype),Object(_e.a)(Ae.prototype,"setMemos",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"setMemos"),Ae.prototype),Object(_e.a)(Ae.prototype,"setIndex",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"setIndex"),Ae.prototype),Object(_e.a)(Ae.prototype,"syncTitle",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"syncTitle"),Ae.prototype),Object(_e.a)(Ae.prototype,"syncContents",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"syncContents"),Ae.prototype),Pe=Ae))||Pe,Ke=function(){function e(t){Object(Ce.a)(this,e),this.authStore=t}return Object(Ue.a)(e,[{key:"getMemoList",value:function(){var e;return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=this.authStore.auth){t.next=2;break}throw new Error("need to login!");case 2:return e=this.authStore.auth.id,t.abrupt("return",Ge.a.get("".concat("/api","/memos/").concat(e)));case 4:case"end":return t.stop()}}),null,this)}},{key:"registerMemo",value:function(e){var t;return ne.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!=this.authStore.auth){n.next=2;break}throw new Error("need to login!");case 2:return(t=new FormData).append("userId",String(this.authStore.auth.id)),t.append("title",e.title),t.append("contents",e.contents),n.abrupt("return",Ge.a.post("".concat("/api","/memos"),t,{headers:{"Content-Type":"multipart/form-data"}}));case 7:case"end":return n.stop()}}),null,this)}},{key:"updateMemo",value:function(e){var t;return ne.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!=this.authStore.auth){n.next=2;break}throw new Error("need to login!");case 2:return t={title:e.title,contents:e.contents},n.abrupt("return",Ge.a.patch("".concat("/api","/memos/").concat(e.id),t));case 4:case"end":return n.stop()}}),null,this)}},{key:"deleteMemo",value:function(e){return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Ge.a.delete("".concat("/api","/memos/").concat(e)));case 1:case"end":return t.stop()}}))}}]),e}(),Qe=function e(){Object(Ce.a)(this,e),this.authStore=new $e,this.memoStore=new qe(new Ke(this.authStore))};Qe.instance=void 0;var Ve=new Qe,Ye=function(e){var t=e.children;return r.createElement(c.a,Ve,t)};i.a.render(a.a.createElement(Ye,null,a.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.1172b3be.chunk.js.map