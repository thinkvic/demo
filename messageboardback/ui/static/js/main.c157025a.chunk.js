(window.webpackJsonpmessageboard=window.webpackJsonpmessageboard||[]).push([[0],{60:function(e,n,t){e.exports=t(71)},65:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),c=t.n(o),l=(t(65),t(15)),i=t(23),s=t(4),u=t(110),m=t(109),d=t(106),f=t(108),g=t(49),p=t.n(g),h=function(e){var n=e.channels,t=e.onClick,a=e.currentChannel;return r.a.createElement("div",null,r.a.createElement(b,null,n.map(function(e){return r.a.createElement(E,{key:e.id,onClick:function(){return t(e.id)},selected:a===e.id},r.a.createElement(d.a,null,r.a.createElement(p.a,null)),r.a.createElement(f.a,{primary:e.name}))})))},E=Object(s.a)(function(e){return{selected:{backgroundColor:"#FFE5E5 !important",color:"#666666 !important",width:"105%",borderRadius:"8px"}}})(m.a),b=Object(s.a)({})(function(e){return r.a.createElement(u.a,e)}),y=t(37),O=t(73),v=t(72),j=t(50),w=t.n(j),C=function(e){var n=e.messages;return r.a.createElement(O.a,{component:"nav","aria-label":"main mailbox folders"},n.map(function(e){return r.a.createElement(v.a,{key:e.id},r.a.createElement(d.a,null,r.a.createElement(w.a,null)),r.a.createElement(y.a,null,e.content))}))},S=t(113),x=t(115),N=t(112),k=t(51),A=t.n(k),D=function(e){var n=e.onClick,t=e.currentChannel,o=F(),c=Object(a.useState)(),l=Object(i.a)(c,2),s=l[0],u=l[1];return r.a.createElement("form",{className:o.container,noValidate:!0,autoComplete:"off"},r.a.createElement(x.a,{id:"outlined-multiline-static",label:"New Message",multiline:!0,rows:"4",defaultValue:"",className:o.textField,margin:"normal",variant:"outlined",onChange:function(e){return function(e){console.log(e.target.value),u(e.target.value)}(e)},value:s}),r.a.createElement(N.a,{onClick:function(){return n(s)},variant:"outlined",color:"primary",className:o.button,disabled:!t||!s},r.a.createElement(A.a,null)," \xa0 Submit"))},F=Object(S.a)(function(e){return{container:{display:"flex",alignItems:"flex-end",justifyContent:"space-between"},textField:{width:"60vw",marginLeft:e.spacing(1),marginRight:e.spacing(1)},dense:{marginTop:e.spacing(2)},menu:{width:200},button:{margin:e.spacing(1)},input:{display:"none"}}}),I=t(116),P=t(114),T=t(117),J=t(36),L=t.n(J);function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}var M=Object(S.a)(function(e){return{root:{width:"100%"},summary:{backgroundColor:"#EEEEEE"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}),R=function(){var e=this,n=Object(a.useState)([]),t=Object(i.a)(n,2),o=t[0],c=t[1],s=Object(a.useState)(null),u=Object(i.a)(s,2),m=u[0],d=u[1],f=Object(a.useState)([]),g=Object(i.a)(f,2),p=g[0],E=g[1];Object(a.useEffect)(function(){fetch("api/channels/").then(function(e){return e.json()}).then(function(e){console.log(JSON.stringify(e)),c(e)}.bind(e)).catch(function(e){return alert("FETCH CHANNELS FAILED: "+e.message)})},[]),Object(a.useEffect)(function(){var e=b(m);console.log("found",e),o[e]&&o[e].messages&&E(o[e].messages)});var b=function(e){return o.findIndex(function(n){return n.id===e})},O=function(e){console.log("cid",e);var n=b(e);console.log("iiiiiiii",n),d(e),fetch("api/messages/"+e).then(function(e){return e.json()}).then(function(e){console.log("messages"+JSON.stringify(e));var t=o.map(function(t,a){return console.log("index now",a,n),a!==n?t:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(t,!0).forEach(function(n){Object(l.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},t,{messages:e})});console.log("newdata",t),c(t)}).catch(function(e){return alert("FETCH CHANEL MESSAGES FAILED: "+e.message)})},v=M(),j=r.a.useState([!0,!0,!0]),w=Object(i.a)(j,2),S=w[0],x=w[1],N=function(e){return function(n,t){var a=S.map(function(n,t){return t===e?!n:n});x(a)}};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:v.root},r.a.createElement(I.a,{expanded:S[0],onChange:N(0)},r.a.createElement(T.a,{className:v.summary,expandIcon:r.a.createElement(L.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},r.a.createElement(y.a,{className:v.heading},"Channels")),r.a.createElement(P.a,null,r.a.createElement(h,{channels:o,onClick:function(e){return O(e)},currentChannel:m}))),r.a.createElement(I.a,{expanded:S[1],onChange:N(1)},r.a.createElement(T.a,{className:v.summary,expandIcon:r.a.createElement(L.a,null),"aria-controls":"panel2bh-content",id:"panel2bh-header"},r.a.createElement(y.a,{className:v.heading},"Messages")),r.a.createElement(P.a,null,r.a.createElement(C,{messages:p,currentChannel:m}))),r.a.createElement(I.a,{expanded:S[2],onChange:N(2)},r.a.createElement(T.a,{className:v.summary,expandIcon:r.a.createElement(L.a,null),"aria-controls":"panel3bh-content",id:"panel3bh-header"},r.a.createElement(y.a,{className:v.heading},"Add A Message")),r.a.createElement(P.a,null,r.a.createElement(D,{onClick:function(e){return function(e){console.log("submit value",e),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return console.log("url",e),fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){console.log("msg after put",e)}).catch(function(e){return alert("ADD MESSAGE FAILED: "+e.message)})}("api/"+m,{user:"default",content:e}).then(function(e){return console.log(JSON.stringify(e))}).catch(function(e){return console.error(e)})}(e)},currentChannel:m})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[60,1,2]]]);
//# sourceMappingURL=main.c157025a.chunk.js.map