(this["webpackJsonpts-note-app"]=this["webpackJsonpts-note-app"]||[]).push([[0],{50:function(e,t,n){e.exports=n.p+"static/media/pen.f1830e2f.svg"},51:function(e,t,n){e.exports=n.p+"static/media/trashcan.d7bec4e6.svg"},56:function(e,t,n){e.exports=n(91)},61:function(e,t,n){},62:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(25),i=n.n(a),c=(n(61),n(62),n(4)),s=n(22),l=n(5),u=n(6);function p(){var e=Object(l.a)(["\n  &.panes{\n    height : calc(100vh - 3rem);\n    display : flex;\n  }\n  &.pane{\n    display:flex;\n    flex:1;\n    &.preview{\n      @media(max-width:768px){\n      flex:0;\n      /* display:none; */\n      }\n    &.editor{\n      @media(max-width:768px){\n      flex:1;\n      }\n    }\n    }\n  }\n  &.seperator{\n    @media(max-width:768px){\n    display:none;\n    }\n    height:100%;\n    position:absolute;\n    transform : translate(-50%);\n    cursor: col-resize;\n    border-left: 1px solid;\n    border-color: lightgray\n  }\n"]);return p=function(){return e},e}var d=u.a.div(p());function m(e){var t=e.topBar,n=e.editor,a=e.preview,i=Object(r.useState)(.2),c=Object(s.a)(i,2),l=c[0],u=c[1],p=function(e){u(e.clientX/window.innerWidth)},m={flex:l},f={flex:1-l},g={left:"".concat(100*l,"%")},h=function e(t){document.body.removeEventListener("mousemove",p),window.removeEventListener("mouseup",e)};return o.a.createElement(d,null,t,o.a.createElement(d,{className:"panes"},o.a.createElement(d,{className:"pane preview",style:m},a),o.a.createElement(d,{className:"pane editor",style:f},n),o.a.createElement(d,{className:"seperator",style:g,onMouseDown:function(e){document.body.addEventListener("mousemove",p),window.addEventListener("mouseup",h)}})))}var f,g,h=n(50),b=n.n(h),y=n(51),v=n.n(y);function w(){var e=Object(l.a)(["\n  background: white;\n  border-radius : 4px;\n  margin-left : 10px;\n  padding-top : 2px;\n  width : 40px;\n  height : 20px;\n  border : 0.5px solid lightgray;\n  font-size : 10;\n  /* align-items: center; */\n  justify-content: center;\n  vertical-align: middle;\n  text-align : center;\n  &:hover{\n    background: whitesmoke;\n  }\n"]);return w=function(){return e},e}function O(){var e=Object(l.a)(["\n  display : flex;\n  padding-left : 1rem;\n  background : whitesmoke;\n  height : 3rem;\n  border-bottom : 0.3px solid;\n  /* justify-content : center; */\n  border-bottom-color :lightgray;\n  align-items: center;\n  font-family:Arial, Helvetica, sans-serif;\n  justify-content:space-between;\n\n  &.header{\n    padding-left: 0;\n  }\n  "]);return O=function(){return e},e}function x(){var e=Object(l.a)(["\n  padding-right: 2rem;\n"]);return x=function(){return e},e}!function(e){e.MEMO_STORE="memoStore",e.AUTH_STORE="authStore"}(f||(f={})),function(e){e.SIGNIN="/login",e.SIGNUP="/register",e.EDITER="/"}(g||(g={}));var j=Object(c.b)(f.MEMO_STORE,f.AUTH_STORE)(Object(c.c)((function(e){var t=e[f.MEMO_STORE],n=t.newMemo,r=t.setIndex,a=t.deleteMemo,i=t.selectedId,c=e[f.AUTH_STORE].logout,s=e.history;return o.a.createElement(k,null,o.a.createElement(k,{className:"header"},o.a.createElement("h3",null,"Ulendo"),o.a.createElement(M,{onClick:function(){n(),r()}},o.a.createElement("img",{src:b.a,width:13,height:"auto",alt:"new memo"})),o.a.createElement(M,{onClick:function(){a(i)}},o.a.createElement("img",{src:v.a,width:13,height:"auto",alt:"remove memo"}))),o.a.createElement(E,{onClick:function(){console.log("handlelogout"),c(),s.push("/login")}},o.a.createElement("h4",null,"logout")))}))),E=u.a.div(x()),k=u.a.div(O()),M=u.a.div(w()),S=n(23),T=(n(37),n(33)),I=n.n(T),P=n(9),A=n.n(P),D=function(e){return void 0===e&&(e=""),e.slice(0,10)},z=function(e){return I()(e,{allowedTags:[]}).slice(0,10)},L=function(e){return new Date(e).getTime()},C=function(e){return A()(e).toISOString()};function R(){var e=Object(l.a)(["\n    display: block;\n    font-size: 1rem;\n    font-weight: 400;\n    font-family: Arial, Helvetica, sans-serif;\n    border: 0px;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: calc(100% - 60px);\n    outline: none;\n    resize: none;\n  "]);return R=function(){return e},e}function N(){var e=Object(l.a)(["\n    border: none;\n    font-size: 1.2rem;\n    font-weight: 600;\n    padding:0;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  "]);return N=function(){return e},e}function U(){var e=Object(l.a)(["\n  flex:1;\n  display: flex;\n  flex-direction:column;\n    /* @media(max-width:768px){\n    flex:1;\n    } */\n  &.createdDate{\n    height: 2rem;\n    flex:0;\n    padding-top : 0.5rem;\n    text-align : center;\n    font-size: 0.8rem;\n    color: darkgray;\n  }\n  &.inputTitle{\n    /* flex: 1; */\n    padding-left : 1rem;\n    padding-right : 1rem;\n    height:3rem;\n    font-size: 1rem;\n    height: 1rem;\n    flex:0;\n  }\n  &.inputText{\n    padding : 1rem;\n    font-size: 1rem;\n    height: 1rem;\n\n  }\n"]);return U=function(){return e},e}var _=Object(c.b)(f.MEMO_STORE)(Object(c.c)((function(e){var t,n=e[f.MEMO_STORE],a=n.setMemo,i=n.memo,c=n.updateMemo,s=n.syncTitle,l=n.syncContents,u={id:0,title:"",createdAt:A()(Object(P.now)()).toISOString(),updatedAt:A()(Object(P.now)()).toISOString(),contents:""};return Object(r.useEffect)((function(){a(u)}),[]),o.a.createElement(H,null,o.a.createElement(H,{className:"createdDate"},(t=L(i.updatedAt),A()(t).locale("kr").format("lll"))),o.a.createElement(H,{className:"inputTitle"},o.a.createElement(B,{type:"text",value:i.title,onChange:function(e){var t=e.target.value;a(Object(S.a)({},i,{updatedAt:C(Object(P.now)()),id:i.id,title:t})),s(t),c()},placeholder:"title"})),o.a.createElement(H,{className:"inputText"},o.a.createElement(G,{value:i.contents,onChange:function(e){var t=e.target.value;a(Object(S.a)({},i,{id:i.id,updatedAt:C(Object(P.now)()),contents:t})),l(t),c()},placeholder:"text"})))}))),H=u.a.div(U()),B=u.a.input(N()),G=u.a.textarea(R());function F(){var e=Object(l.a)(["\n  \n  padding-left : 1rem;\n  padding-top : 1rem;\n  font-size: 1rem;\n  &.title{\n    font-size : 1rem;\n    font-weight: bold;\n  }\n  &.createdTime{\n    padding-top: 0;\n    font-size: 0.8rem;\n    color:gray;\n  }\n  &.text{\n    padding-top : 0;\n    font-size: 0.8rem;\n    /* color:gray; */\n  }\n"]);return F=function(){return e},e}function W(){var e=Object(l.a)(["\n  /* padding: 1rem; */\n  flex-direction:column;\n  overflow-y : auto;\n  font-size: 1.2rem;\n  border-bottom : 1px solid;\n  border-bottom-color :lightgray;\n  height: 5rem;\n  background:",";\n  font-family: Arial, Helvetica, sans-serif;\n  &.title{\n    font-size: 2.5rem;\n    font-weight: 300;\n  }\n  &:hover{\n    background: lightgray;\n  }\n\n"]);return W=function(){return e},e}var J=function(e){var t=e.updatedAt,n=e.id,r=e.title,a=e.contents,i=e.selectMemo,c=e.selected;return o.a.createElement(X,{defaultChecked:c,onClick:function(){return i(n)}},o.a.createElement($,{className:"title"},""===r?"\uc0c8\ub85c\uc6b4 \uba54\ubaa8":D(z(r))),o.a.createElement($,{className:"text"},D(z(a))),o.a.createElement($,{className:"createdTime"},A()(t).locale("kr").fromNow()))},X=u.a.div(W(),(function(e){return e.defaultChecked?"lightgray":"white"})),$=u.a.div(F());function q(){var e=Object(l.a)(["\n  display:flex; \n  flex-direction:column;\n  flex:1;\n  \n"]);return q=function(){return e},e}var K=Object(c.b)(f.MEMO_STORE)(Object(c.c)((function(e){var t=e[f.MEMO_STORE],n=t.memos,a=t.getMemoById,i=t.selectedId,c=t.getMemoList;return Object(r.useEffect)((function(){console.log("useEffect..."),c()}),[]),o.a.createElement(Q,null,n.slice(0).sort((function(e,t){return L(t.updatedAt)-L(e.updatedAt)})).map((function(e){return o.a.createElement(J,{key:e.id,createdAt:e.createdAt,updatedAt:e.updatedAt,id:e.id,contents:e.contents,title:e.title,selectMemo:function(){return t=e.id,void a(t);var t},selected:i===e.id})})))}))),Q=u.a.div(q());var V=Object(c.b)(f.MEMO_STORE,f.AUTH_STORE)(Object(c.c)((function(e){return o.a.createElement(m,{topBar:o.a.createElement(j,e),editor:o.a.createElement(_,e),preview:o.a.createElement(K,e)})}))),Y=n(17),Z=Object(c.b)(f.AUTH_STORE)(Object(c.c)((function(e){var t=e.component,n=e.redirectTo,r=e.authStore,a=e.path,i=e.exact;return o.a.createElement(Y.b,{path:a,exact:i,render:function(e){return r.isLoggedIn()?o.a.createElement(t,e):o.a.createElement(Y.a,{to:n})}})}))),ee=n(19),te=n(2),ne=n.n(te),re={gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"]},oe=n(21);function ae(){var e=Object(l.a)(["\n  background: ",";\n  font-size:1rem;\n  border:none;\n  border-bottom: 1px solid ",";\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  outline:none;\n  width:100%;\n  &:focus{\n    color:",";\n    border-bottom: 1px solid ",";\n  }\n  &+&{\n    margin-top: 1rem;\n  }\n"]);return ae=function(){return e},e}function ie(){var e=Object(l.a)(["\n  .logo-area{\n    display: block;\n    padding-bottom: 2rem;\n    text-align: center;\n    font-weight: bold;\n    letter-spacing: 2px;\n  }\n  /* box-shadow: 0 0 8px rgba(0,0,0,0.025); */\n  text-align:right;\n  /* justify-content: right; */\n  padding: 2rem;\n  width: 360px;\n  background: white;\n  border-radius: 2px;\n"]);return ie=function(){return e},e}function ce(){var e=Object(l.a)(["\n  display:flex;\n  width: 100%;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.5rem 1rem;\n  color: white;\n  outline: none;\n  margin-top: 1rem;\n  justify-content:center;\n  cursor: pointer;\n  \n  background: ",";\n  &:hover {\n    background: ",";\n  }\n"]);return ce=function(){return e},e}function se(){var e=Object(l.a)(["\n  position :absolute;\n  left: 0;\n  top: 0;\n  bottom : 0;\n  right: 0;\n  /* background : ","; */\n  /* flex \ub0b4\ubd80 \ub0b4\uc6a9 \uc911\uc559 \uc815\ub82c */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  h1 {\n    text-align:center;\n    margin : 0;\n    color : ",";\n    margin-bottom : 1rem;\n  }\n"]);return se=function(){return e},e}var le=Object(c.b)(f.AUTH_STORE)(Object(c.c)((function(e){var t=e.authStore,n=e.history;return Object(r.useEffect)((function(){t.resetPasswordAndEmail()}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement(oe.Helmet,null,o.a.createElement("title",null,"Login")),o.a.createElement(ue,null,o.a.createElement(de,null,o.a.createElement("h1",null,"Log In"),o.a.createElement(me,{placeholder:"Email Address",value:t.email,onChange:function(e){t.setEmail(e.target.value)}}),o.a.createElement(me,{type:"password",placeholder:"Password",value:t.password,onChange:function(e){t.setPassword(e.target.value)}}),o.a.createElement(pe,{onClick:function(e){return ne.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),e.stopPropagation(),r.prev=2,r.next=5,ne.a.awrap(t.login());case 5:n.push(g.EDITER),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),alert(r.t0);case 11:case"end":return r.stop()}}),null,null,[[2,8]])}},"Login with Email"),o.a.createElement(ee.b,{to:g.SIGNUP},"Sign Up"))))}))),ue=u.a.div(se(),re.gray[2],re.gray[8]),pe=u.a.button(ce(),re.gray[8],re.gray[6]),de=u.a.div(ie()),me=u.a.input(ae(),re.gray[1],re.gray[5],re.gray[7],re.gray[7]);function fe(){var e=Object(l.a)(["\n  background: ",";\n  font-size:1rem;\n  border:none;\n  border-bottom: 1px solid ",";\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  outline:none;\n  width:100%;\n  &:focus{\n    color:",";\n    border-bottom: 1px solid ",";\n  }\n  &+&{\n    margin-top: 1rem;\n  }\n"]);return fe=function(){return e},e}function ge(){var e=Object(l.a)(["\n  .logo-area{\n    display: block;\n    padding-bottom: 2rem;\n    text-align: center;\n    font-weight: bold;\n    letter-spacing: 2px;\n  }\n  /* box-shadow: 0 0 8px rgba(0,0,0,0.025); */\n  text-align:right;\n  /* justify-content: right; */\n  padding: 2rem;\n  width: 360px;\n  background: white;\n  border-radius: 2px;\n"]);return ge=function(){return e},e}function he(){var e=Object(l.a)(["\n  display:flex;\n  width: 100%;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.5rem 1rem;\n  color: white;\n  outline: none;\n  margin-top: 1rem;\n  justify-content:center;\n  cursor: pointer;\n  \n  background: ",";\n  &:hover {\n    background: ",";\n  }\n"]);return he=function(){return e},e}function be(){var e=Object(l.a)(["\n  position :absolute;\n  left: 0;\n  top: 0;\n  bottom : 0;\n  right: 0;\n  /* background : ","; */\n  /* flex \ub0b4\ubd80 \ub0b4\uc6a9 \uc911\uc559 \uc815\ub82c */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  h1 {\n    text-align:center;\n    margin : 0;\n    color : ",";\n    margin-bottom : 1rem;\n  }\n"]);return be=function(){return e},e}var ye=Object(c.b)(f.AUTH_STORE)(Object(c.c)((function(e){var t=e.history,n=Object(r.useState)(""),a=Object(s.a)(n,2),i=a[0],c=a[1],l=Object(r.useState)(""),u=Object(s.a)(l,2),p=u[0],d=u[1],m=Object(r.useState)(""),f=Object(s.a)(m,2),h=f[0],b=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(oe.Helmet,null,o.a.createElement("title",null,"Sign Up")),o.a.createElement(ve,null,o.a.createElement(Oe,null,o.a.createElement("h1",null,"Sign Up"),o.a.createElement(xe,{placeholder:"Email Address",value:i,onChange:function(e){c(e.target.value)}}),o.a.createElement(xe,{type:"password",value:p,onChange:function(e){d(e.target.value)},placeholder:"Password"}),o.a.createElement(xe,{type:"password",placeholder:"Confirm Password",value:h,onChange:function(e){b(e.target.value)}}),o.a.createElement(we,{onClick:function(n){var r;return ne.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(n.preventDefault(),n.stopPropagation(),!(p.length<5)){o.next=5;break}return alert("\ube44\ubc00\ubc88\ud638\ub294 5\uae00\uc790 \uc774\uc0c1\uc785\ub2c8\ub2e4."),o.abrupt("return",!1);case 5:if(!(i.length<5)){o.next=8;break}return alert("ID\ub294 5\uae00\uc790 \uc774\uc0c1\uc785\ub2c8\ub2e4."),o.abrupt("return",!1);case 8:if(p===h){o.next=11;break}return alert("\uc785\ub825\ud558\uc2e0 \ube44\ubc00\ubc88\ud638\uac00 \ube44\ubc00\ubc88\ud638\ud655\uc778\uc5d0 \uc785\ub825\ud55c \ube44\ubc00\ubc88\ud638\uc640 \ub2e4\ub985\ub2c8\ub2e4."),o.abrupt("return",!1);case 11:return o.prev=11,o.next=14,ne.a.awrap(e.authStore.register({email:i,password:p}));case 14:r=o.sent,t.push(g.SIGNIN),alert(r.data.msg),o.next=22;break;case 19:o.prev=19,o.t0=o.catch(11),alert(o.t0.response.data.msg);case 22:return o.abrupt("return",!1);case 23:case"end":return o.stop()}}),null,null,[[11,19]])}},"Continue with Email"),o.a.createElement(ee.b,{to:g.SIGNIN},"Login"))))}))),ve=u.a.div(be(),re.gray[2],re.gray[8]),we=u.a.button(he(),re.gray[8],re.gray[6]),Oe=u.a.div(ge()),xe=u.a.input(fe(),re.gray[1],re.gray[5],re.gray[7],re.gray[7]);var je=Object(c.b)(f.AUTH_STORE)(Object(c.c)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(oe.Helmet,null,o.a.createElement("title",null,"\uc774\ub984\uc744\ubb58\ub85c\ud558\uc9c0..")),o.a.createElement(ee.a,null,o.a.createElement(Y.d,null,o.a.createElement(Z,{redirectTo:"/login",exact:!0,path:"/",component:V}),o.a.createElement(Y.b,{exact:!0,path:"/login",component:le}),o.a.createElement(Y.b,{exact:!0,path:"/register",component:ye}))))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee,ke,Me,Se,Te,Ie,Pe,Ae,De,ze,Le,Ce,Re=n(12),Ne=n(14),Ue=n(16),_e=n(3),He=(n(39),n(1)),Be=n(15),Ge=n.n(Be),Fe=function(){function e(){Object(Re.a)(this,e)}return Object(Ue.a)(e,[{key:"login",value:function(e){return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("/api"),t.abrupt("return",Ge.a.post("".concat("/api","/auth/login"),e));case 2:case"end":return t.stop()}}))}},{key:"register",value:function(e){return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Ge.a.post("".concat("/api","/auth/register"),e));case 1:case"end":return t.stop()}}))}},{key:"checkLogin",value:function(){return ne.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ge.a.get("".concat("/api","/auth/check")));case 1:case"end":return e.stop()}}))}}]),e}(),We=n(36),Je=n.n(We),Xe=n(27),$e=Object(Xe.a)((ke=function(){function e(){var t=this;Object(Re.a)(this,e),Object(Ne.a)(this,"token",Me,this),Object(Ne.a)(this,"auth",Se,this),Object(Ne.a)(this,"email",Te,this),Object(Ne.a)(this,"password",Ie,this),this.authService=new Fe,this.token&&(this.auth=Je()(this.token)),Object(He.m)((function(){return t.token}),(function(e){null!=e&&window.sessionStorage.setItem("jwt",e)}))}return Object(Ue.a)(e,[{key:"isLoggedIn",value:function(){return null!=this.token}},{key:"login",value:function(){var e,t;return ne.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e={email:this.email,password:this.password},n.next=3,ne.a.awrap(this.authService.login(e));case 3:t=n.sent,this.setToken(t.data.data.token);case 5:case"end":return n.stop()}}),null,this)}},{key:"checkLogin",value:function(){var e;return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne.a.awrap(this.authService.checkLogin());case 2:e=t.sent,console.log(e);case 4:case"end":return t.stop()}}),null,this)}},{key:"logout",value:function(){return ne.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:window.sessionStorage.removeItem("jwt"),this.token=null,this.auth=void 0;case 3:case"end":return e.stop()}}),null,this)}},{key:"register",value:function(e){return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne.a.awrap(this.authService.register(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),null,this)}},{key:"resetPasswordAndEmail",value:function(){this.password="",this.email=""}},{key:"setPassword",value:function(e){this.password=e}},{key:"setEmail",value:function(e){this.email=e}},{key:"setToken",value:function(e){this.token=e,this.auth=Je()(e)}}]),e}(),Me=Object(_e.a)(ke.prototype,"token",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return window.sessionStorage.getItem("jwt")}}),Se=Object(_e.a)(ke.prototype,"auth",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Te=Object(_e.a)(ke.prototype,"email",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ie=Object(_e.a)(ke.prototype,"password",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Object(_e.a)(ke.prototype,"login",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"login"),ke.prototype),Object(_e.a)(ke.prototype,"checkLogin",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"checkLogin"),ke.prototype),Object(_e.a)(ke.prototype,"logout",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"logout"),ke.prototype),Object(_e.a)(ke.prototype,"resetPasswordAndEmail",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"resetPasswordAndEmail"),ke.prototype),Object(_e.a)(ke.prototype,"setPassword",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"setPassword"),ke.prototype),Object(_e.a)(ke.prototype,"setEmail",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"setEmail"),ke.prototype),Object(_e.a)(ke.prototype,"setToken",[He.d],Object.getOwnPropertyDescriptor(ke.prototype,"setToken"),ke.prototype),Ee=ke))||Ee,qe=Object(Xe.a)((Ae=function(){function e(t){Object(Re.a)(this,e),this.memoService=t,Object(Ne.a)(this,"memos",De,this),Object(Ne.a)(this,"memo",ze,this),Object(Ne.a)(this,"selectedId",Le,this),Object(Ne.a)(this,"selectedIndex",Ce,this)}return Object(Ue.a)(e,[{key:"getMemoList",value:function(){var e,t;return ne.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("getMemoList"),n.next=3,ne.a.awrap(this.memoService.getMemoList());case 3:e=n.sent,t=e.data.data,this.setMemos(t),this.getRecentUpdatedMemo();case 7:case"end":return n.stop()}}),null,this)}},{key:"newMemo",value:function(){var e;return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("newMemo"),t.next=3,ne.a.awrap(this.memoService.registerMemo({title:"",contents:""}));case 3:return e=t.sent,console.log(e.data.msg),t.next=7,ne.a.awrap(this.getMemoList());case 7:this.selectedId=e.data.data.id,this.getMemoById(this.selectedId);case 9:case"end":return t.stop()}}),null,this)}},{key:"deleteMemo",value:function(e){return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("deletememo"),t.next=3,ne.a.awrap(this.memoService.deleteMemo(e));case 3:return t.next=5,ne.a.awrap(this.getMemoList());case 5:this.getRecentUpdatedMemo();case 6:case"end":return t.stop()}}),null,this)}},{key:"updateMemo",value:function(){return ne.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("updatememo"),e.next=3,ne.a.awrap(this.memoService.updateMemo(this.memo));case 3:case"end":return e.stop()}}),null,this)}},{key:"getRecentUpdatedMemo",value:function(){var e=this.memos;if(e.length>0){var t=e.sort((function(e,t){return L(t.updatedAt)-L(e.updatedAt)}))[0].id;this.getMemoById(t)}}},{key:"getMemoById",value:function(e){console.log("getmemo"),this.selectedId=e;var t=this.memos.find((function(t){return t.id===e}));t&&this.setMemo(t)}},{key:"setMemo",value:function(e){console.log("setMemo"),console.log(e),this.memo=e,this.setIndex()}},{key:"setMemos",value:function(e){console.log("setMemos"),this.memos=e}},{key:"setIndex",value:function(){var e=this,t=this.memos.find((function(t){return t.id===e.selectedId}));if(t){var n=this.memos.indexOf(t);this.selectedIndex=n,console.log("current index",n)}}},{key:"syncTitle",value:function(e){this.memos.splice(this.selectedIndex,1,Object(S.a)({},this.memo,{title:e}))}},{key:"syncContents",value:function(e){this.memos.splice(this.selectedIndex,1,Object(S.a)({},this.memo,{contents:e}))}}]),e}(),De=Object(_e.a)(Ae.prototype,"memos",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ze=Object(_e.a)(Ae.prototype,"memo",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Le=Object(_e.a)(Ae.prototype,"selectedId",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Ce=Object(_e.a)(Ae.prototype,"selectedIndex",[He.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(_e.a)(Ae.prototype,"getMemoList",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"getMemoList"),Ae.prototype),Object(_e.a)(Ae.prototype,"newMemo",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"newMemo"),Ae.prototype),Object(_e.a)(Ae.prototype,"deleteMemo",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"deleteMemo"),Ae.prototype),Object(_e.a)(Ae.prototype,"updateMemo",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"updateMemo"),Ae.prototype),Object(_e.a)(Ae.prototype,"getRecentUpdatedMemo",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"getRecentUpdatedMemo"),Ae.prototype),Object(_e.a)(Ae.prototype,"getMemoById",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"getMemoById"),Ae.prototype),Object(_e.a)(Ae.prototype,"setMemo",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"setMemo"),Ae.prototype),Object(_e.a)(Ae.prototype,"setMemos",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"setMemos"),Ae.prototype),Object(_e.a)(Ae.prototype,"setIndex",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"setIndex"),Ae.prototype),Object(_e.a)(Ae.prototype,"syncTitle",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"syncTitle"),Ae.prototype),Object(_e.a)(Ae.prototype,"syncContents",[He.d],Object.getOwnPropertyDescriptor(Ae.prototype,"syncContents"),Ae.prototype),Pe=Ae))||Pe,Ke=function(){function e(t){Object(Re.a)(this,e),this.authStore=t}return Object(Ue.a)(e,[{key:"getMemoList",value:function(){var e;return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=this.authStore.auth){t.next=2;break}throw new Error("need to login!");case 2:return e=this.authStore.auth.id,t.abrupt("return",Ge.a.get("".concat("/api","/memos/").concat(e)));case 4:case"end":return t.stop()}}),null,this)}},{key:"registerMemo",value:function(e){var t;return ne.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!=this.authStore.auth){n.next=2;break}throw new Error("need to login!");case 2:return(t=new FormData).append("userId",String(this.authStore.auth.id)),t.append("title",e.title),t.append("contents",e.contents),n.abrupt("return",Ge.a.post("".concat("/api","/memos"),t,{headers:{"Content-Type":"multipart/form-data"}}));case 7:case"end":return n.stop()}}),null,this)}},{key:"updateMemo",value:function(e){var t;return ne.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!=this.authStore.auth){n.next=2;break}throw new Error("need to login!");case 2:return t={title:e.title,contents:e.contents},n.abrupt("return",Ge.a.patch("".concat("/api","/memos/").concat(e.id),t));case 4:case"end":return n.stop()}}),null,this)}},{key:"deleteMemo",value:function(e){return ne.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Ge.a.delete("".concat("/api","/memos/").concat(e)));case 1:case"end":return t.stop()}}))}}]),e}(),Qe=function e(){Object(Re.a)(this,e),this.authStore=new $e,this.memoStore=new qe(new Ke(this.authStore))};Qe.instance=void 0;var Ve=new Qe,Ye=function(e){var t=e.children;return r.createElement(c.a,Ve,t)};i.a.render(o.a.createElement(Ye,null,o.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.a3ea9393.chunk.js.map