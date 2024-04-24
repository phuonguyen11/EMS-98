"use strict";(self.webpackChunke_learning_system=self.webpackChunke_learning_system||[]).push([[673],{7762:function(e,t,r){r.d(t,{Z:function(){return h}});var a=r(3366),o=r(7462),i=r(7313),s=r(4146),n=r(1921),l=r(7592),c=r(7342),d=r(1113),u=r(7430),p=r(2298);function f(e){return(0,p.ZP)("MuiDialogContentText",e)}(0,u.Z)("MuiDialogContentText",["root"]);var m=r(6417);const g=["children","className"],y=(0,l.ZP)(d.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({});var h=i.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiDialogContentText"}),{className:i}=r,l=(0,a.Z)(r,g),d=(e=>{const{classes:t}=e,r=(0,n.Z)({root:["root"]},f,t);return(0,o.Z)({},t,r)})(l);return(0,m.jsx)(y,(0,o.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:l,className:(0,s.Z)(d.root,i)},r,{classes:d}))}))},6530:function(e,t,r){r.d(t,{x7:function(){return re},ZP:function(){return ae}});var a=r(7313);let o={data:""},i=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let r="",a="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":a+="f"==i[1]?c(s,i):i+"{"+c(s,"k"==i[1]?"":t)+"}":"object"==typeof s?a+=c(s,t?t.replace(/([^,])+/g,(e=>i.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=c.p?c.p(i,s):i+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+a},d={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e},p=(e,t,r,a,o)=>{let i=u(e),p=d[i]||(d[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!d[p]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=s.exec(e.replace(n,""));)t[4]?a.shift():t[3]?(r=t[3].replace(l," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(l," ").trim();return a[0]})(e);d[p]=c(o?{["@keyframes "+p]:t}:t,r?"":"."+p)}let f=r&&d.g?d.g:null;return r&&(d.g=d[p]),((e,t,r,a)=>{a?t.data=t.data.replace(a,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(d[p],t,a,f),p},f=(e,t,r)=>e.reduce(((e,a,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+a+(null==i?"":i)}),"");function m(e){let t=this||{},r=e.call?e(t.p):e;return p(r.unshift?r.raw?f(r,[].slice.call(arguments,1),t.p):r.reduce(((e,r)=>Object.assign(e,r&&r.call?r(t.p):r)),{}):r,i(t.target),t.g,t.o,t.k)}m.bind({g:1});let g,y,h,b=m.bind({k:1});function x(e,t){let r=this||{};return function(){let a=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;r.p=Object.assign({theme:y&&y()},n),r.o=/ *go\d+/.test(l),n.className=m.apply(r,a)+(l?" "+l:""),t&&(n.ref=s);let c=e;return e[0]&&(c=n.as||e,delete n.as),h&&c[0]&&h(n),g(c,n)}return t?t(o):o}}var v=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,w=(()=>{let e=0;return()=>(++e).toString()})(),E=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),k=new Map,$=e=>{if(k.has(e))return;let t=setTimeout((()=>{k.delete(e),j({type:4,toastId:e})}),1e3);k.set(e,t)},C=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=k.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:r}=t;return e.toasts.find((e=>e.id===r.id))?C(e,{type:1,toast:r}):C(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?$(a):e.toasts.forEach((e=>{$(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===a||void 0===a?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+o})))}}},N=[],O={toasts:[],pausedAt:void 0},j=e=>{O=C(O,e),N.forEach((e=>{e(O)}))},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Z=e=>(t,r)=>{let a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",r=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||w()}}(t,e,r);return j({type:2,toast:a}),a.id},P=(e,t)=>Z("blank")(e,t);P.error=Z("error"),P.success=Z("success"),P.loading=Z("loading"),P.custom=Z("custom"),P.dismiss=e=>{j({type:3,toastId:e})},P.remove=e=>j({type:4,toastId:e}),P.promise=(e,t,r)=>{let a=P.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then((e=>(P.success(v(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e))).catch((e=>{P.error(v(t.error,e),{id:a,...r,...null==r?void 0:r.error})})),e};var z=(e,t)=>{j({type:1,toast:{id:e,height:t}})},M=()=>{j({type:5,time:Date.now()})},T=e=>{let{toasts:t,pausedAt:r}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=(0,a.useState)(O);(0,a.useEffect)((()=>(N.push(r),()=>{let e=N.indexOf(r);e>-1&&N.splice(e,1)})),[t]);let o=t.toasts.map((t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}}));return{...t,toasts:o}}(e);(0,a.useEffect)((()=>{if(r)return;let e=Date.now(),a=t.map((t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout((()=>P.dismiss(t.id)),r);t.visible&&P.dismiss(t.id)}));return()=>{a.forEach((e=>e&&clearTimeout(e)))}}),[t,r]);let o=(0,a.useCallback)((()=>{r&&j({type:6,time:Date.now()})}),[r]),i=(0,a.useCallback)(((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:i}=r||{},s=t.filter((t=>(t.position||i)===(e.position||i)&&t.height)),n=s.findIndex((t=>t.id===e.id)),l=s.filter(((e,t)=>t<n&&e.visible)).length;return s.filter((e=>e.visible)).slice(...a?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+o),0)}),[t]);return{toasts:t,handlers:{updateHeight:z,startPause:M,endPause:o,calculateOffset:i}}},A=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,I=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${I} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,H=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,S=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${H} 1s linear infinite;
`,L=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,R=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,U=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${R} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,q=x("div")`
  position: absolute;
`,B=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,G=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Y} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=e=>{let{toast:t}=e,{icon:r,type:o,iconTheme:i}=t;return void 0!==r?"string"==typeof r?a.createElement(G,null,r):r:"blank"===o?null:a.createElement(B,null,a.createElement(S,{...i}),"loading"!==o&&a.createElement(q,null,"error"===o?a.createElement(_,{...i}):a.createElement(U,{...i})))},K=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Q=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,V=x("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=a.memo((e=>{let{toast:t,position:r,style:o,children:i}=e,s=t.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,o]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[K(r),Q(r)];return{animation:t?`${b(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||r||"top-center",t.visible):{opacity:0},n=a.createElement(J,{toast:t}),l=a.createElement(W,{...t.ariaProps},v(t.message,t));return a.createElement(V,{className:t.className,style:{...s,...o,...t.style}},"function"==typeof i?i({icon:n,message:l}):a.createElement(a.Fragment,null,n,l))}));!function(e,t,r,a){c.p=t,g=e,y=r,h=a}(a.createElement);var ee=e=>{let{id:t,className:r,style:o,onHeightUpdate:i,children:s}=e,n=a.useCallback((e=>{if(e){let r=()=>{let r=e.getBoundingClientRect().height;i(t,r)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,i]);return a.createElement("div",{ref:n,className:r,style:o},s)},te=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,re=e=>{let{reverseOrder:t,position:r="top-center",toastOptions:o,gutter:i,children:s,containerStyle:n,containerClassName:l}=e,{toasts:c,handlers:d}=T(o);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map((e=>{let o=e.position||r,n=((e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...o}})(o,d.calculateOffset(e,{reverseOrder:t,gutter:i,defaultPosition:r}));return a.createElement(ee,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?te:"",style:n},"custom"===e.type?v(e.message,e):s?s(e):a.createElement(X,{toast:e,position:o}))})))},ae=P}}]);